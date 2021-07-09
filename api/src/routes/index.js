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

    /* const arr = []
    const detailId = await axios.get('https://pokeapi.co/api/v2/pokemon')
    
    for(let i=0; i < detailId.data.results.length; i++) {
        arr.push( {
            name: detailId.data.results[i].name
        })
    }
    console.log(arr) */
    
    

    /* const id  = req.params.id 
    try {
        let poke = await Pokemon.findByPk(id);
        return res.json(poke);
    } catch (error) {
        console.log(error)
    } */

    /* let arrayDetailsPokemon = [];
    
    let pokemonesDetails = {
        name: null,
        id: null,
        life: null,
        image: null,
        speed: null,
        height: null,
        weight: null,
        attack: null,
        defense: null,
        mine: false    
    } */
    /* pokemones.id = uuidv4()
            pokemones.life = pokeObj.stats[0].base_stat
            pokemones.speed = pokeObj.stats[5].base_stat
            pokemones.height = pokeObj.height
            pokemones.weight = pokeObj.weight
            pokemones.attack = pokeObj.stats[1].base_stat
            pokemones.defense = pokeObj.stats[2].base_stat */
})

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



/* let result = data();
//console.log(result);

router.get('/pokemon', (req, res) => {
    result.then((data) => {
        res.json(data);
    })
}) */

router.get('/pokemons', async (req, res) => {
    
    let apiPokemons = await data();    
    let arrayPokemonsHome = [];
    
    let pokemones = { 
        image: null,
        name: null, 
        type: []
    }

    try {     
        console.log(apiPokemons.length)           
        for(var i=0; i < apiPokemons.length; i++) {            
            let pokeObj = await getPokemonDetails(apiPokemons[i].url)
            //console.log(pokeObj.name)             
            pokemones.name = pokeObj.name
            pokemones.image = pokeObj.sprites.front_default
            //console.log(pokeObj)
            
            let finalTypes = pokeObj.types.map(e => (e.type.name))
            //console.log(finalTypes)
            pokemones.type = finalTypes 
            
            /* for(i=0; i < arrTypes.length; i++){
                console.log(arrTypes[i].name)
                pokemones.type.push(arrTypes[i].name)
            }     */
            //console.log(pokemones.name)  
            
            let newPokeObj = {
                ...pokemones
            }  
            arrayPokemonsHome.push(newPokeObj)                        
        }    
        //console.log(arrayDetailsPokemon)           

        arrayPokemonsHome.push(await Pokemon.findAll())
        res.send(arrayPokemonsHome)
    } catch (error) {
    console.log(error)
    }     
    
 /*
    if (name) {
        try {
            let poke = Pokemon.findAll({
                where: {
                    name: name,
                }
            });
            return res.json(poke)
        } catch (error) {
            console.log(error)
        }
    } else if(req.query.filter) {
        try {
            let poke = Pokemon.findAll({
                where: {
                    status: req.query.filter
                },
                limit: 12,
                offset: req.query.page,
                order: [['name', req.query.order]],
                include: { model: Type}

            });
            return res.json(poke)
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            let poke = Pokemon.findAll({
                limit: 12,
                offset: req.query.page,
                order: [['name', req.query.order]],
                include: { model: Type}
            });
            return res.json(poke)
        } catch (error) {
            console.log(error)
        }        
    } */
})

router.post('/newPokemon', async (req, res) => {
    const {name, image, status, mine, life, attack, defense, height, weight, speed} = req.body;
    //console.log(newPoke)
     try {        
        let poke = await Pokemon.create({                
                name,
                id: uuidv4(),
                image,
                status,
                mine,
                life,
                attack,
                defense,
                speed,
                weight,
                height,      
                
            })        
            
        res.send(poke)
    } catch (error) {
        console.log(error)
    }
});

const dataTypes = async () => {
    const array = await axios.get('https://pokeapi.co/api/v2/type')
    //console.log('RESPUESTA DE API: ', array.data.results);
    return array.data.results;
};

router.get('/types', async (req, res) => {

    //res.json(apiPokemons)
    //let arrayTypeDetails = [];       
    try {           
        let apiPokemonsTypes = await dataTypes();
    /* let types = apiPokemonsTypes.results[i].name
    arrayTypeDetails.push(types)   */  
    apiPokemonsTypes.forEach( e => {
        Type.findOrCreate( {where: {name: e.name}}) 
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
