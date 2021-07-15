const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');

const { Pokemon, Type, Pokemon_Type} = require('../db');
//const cors = require('cors');
const { Op } = require('sequelize');
const { v4: uuidv4 } = require('uuid')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const router = Router();

//GET /:ID........................

router.get('/pokemons/:id', async (req, res) => { 
    var detalles = [];
    const  Id  = req.params.id    
    
    if(Id.includes('-')) {
        const pokeId = await Pokemon.findOne({
            where: {
                id: Id,
            }, include: type,
        }) 
        return res.json(pokeId);
    } else {
        let resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Id}`);      
        if (resp.data) { 
          detalles.push({
            name: resp.data.name,
            id: resp.data.id,
            life: resp.data.stats[0].base_stat,
            image: resp.data.sprites.front_default,
            speed: resp.data.stats[5].base_stat,
            height: resp.data.height,
            weight: resp.data.weight,
            attack: resp.data.stats[1].base_stat,
            defense: resp.data.stats[2].base_stat,
            mine: false,
            types: resp.data.types.map(e => (e.type.name))    
          });
        }
    }    
  
    return res.json(detalles);  
});

//GET ALL...........................
//Traigo la data de la API
const data = async () => {
    const array = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0')
    //console.log('RESPUESTA DE API: ', array.data.results);
    return array.data.results;
};

const getPokemonDetails = async (url) => {
    const array = await axios.get(url)
    return array.data;
};

router.get('/pokemons', async (req, res) => {
    let { name } = req.query;
    let apiPokemons = await data();    
    let arrayPokemonsHome = [];

    let pokemones = { 
        image: null,
        name: null, 
        type: [],
        id: null
    }      
    //console.log(name)
    if (name) {     
        
        try {
            let dBPoke = await Pokemon.findOne({
                where: {
                    name: name,
                }
            })

            if(dBPoke) {
                return res.send(dBPoke)
            }
            
            let pokeName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if(!pokeName) {
                return res.send('No Pokemon Found');

            } else {                
                pokemones.name = pokeName.data.name
                pokemones.image = pokeName.data.sprites.front_default
                pokemones.id = pokeName.data.id
                let finalTypes = pokeName.data.types.map(e => (e.type.name))
                pokemones.type = finalTypes 

                res.send(pokemones);
            }

        } catch (error) {
        console.log(error)
        }  

    } else {
        try {     
            for(var i=0; i < apiPokemons.length; i++) {            
                let pokeObj = await getPokemonDetails(apiPokemons[i].url)
                             
                pokemones.name = pokeObj.name
                pokemones.image = pokeObj.sprites.front_default
                pokemones.id = pokeObj.id
                
                
                let finalTypes = pokeObj.types.map(e => (e.type.name))
                pokemones.type = finalTypes             
                
                let newPokeObj = {
                    ...pokemones
                }  
                arrayPokemonsHome.push(newPokeObj)                        
            }             
            let resp = await Pokemon.findAll()
            const sendPokemonsHome = resp.concat(arrayPokemonsHome)
            res.send(sendPokemonsHome)
        } catch (error) {
            console.log(error)
        }      
    }      
});


router.post('/newPokemon', async (req, res) => {
    const { name, image, types,  life, attack, defense, height, weight, speed } = req.body;
    
     try {        
        let poke = await Pokemon.create({                
                name,
                id: uuidv4(),
                image,
                types,                
                life,
                attack,
                defense,
                speed,
                weight,
                height,         
            })  

            /* if(type){
                type.forEach(async (element)  => {
                 let typePoke = await Type.findOne({
                     where: {
                         name:name
                    }, include() //segun que lo tengo que buscar
                 })
                 await videogameCreated.addGenre(genresGame)
                });
            }   */
          
        res.send(poke)
    } catch (error) {
        console.log(error)
    }
});

const dataTypes = async () => {
    const array = await axios.get('https://pokeapi.co/api/v2/type')
    return array.data.results;
};

router.get('/types', async (req, res) => {
          
    try {           
        let apiPokemonsTypes = await dataTypes();
    /* let types = apiPokemonsTypes.results[i].name
    arrayTypeDetails.push(types)   */  
    apiPokemonsTypes.forEach( e => {
        Type.findOrCreate( {where: {
            name: e.name            
        }}) 
    })     
    const dBTypes = await Type.findAll()
    res.json(dBTypes)                       
    //console.log(pokemones.name)         
//filtrar repetidos
//enviarlos en la tabla types en dB
    } catch (error) {
    console.log(error)
    }    
})


module.exports = router;
