const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');

const { Pokemon, Type, Pokemon_Type} = require('../db.js');
//const cors = require('cors');
const { Op } = require('sequelize');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const router = Router();

//GET /:ID........................
router.get('/pokemon/:id', async (req, res) => {
    const id  = req.params.id 
    try {
        let poke = await Pokemon.findByPk(id);
        return res.json(poke);
    } catch (error) {
        console.log(error)
    }
})

//GET ALL...........................
//Traigo la data de la API
const data = async () => {
    const array = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=2&offset=0')
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

router.get('/pokemon', (req, res) => {

    //const name = apiPokemons.query.name;

    let apiPokemons = data();
    
    let arrayDetailsPokemon = [];
    
    let pokemones = {
        name: null,
        life: null,
        image: null,
        speed: null,
        height: null,
        weight: null,
        attack: null,
        defense: null,
        mine: false
    }
    /* let numPromesis =
    function getPromises(numPromesis) {
        let promises = [];
        for (let i=0; i < numPromesis; i++) {
            promises.push()
        }
    } */

    try {
        //let pokesDb = Pokemon.findAll();
        
        //aca va el codigo 

        apiPokemons.then( arrayResults => { 
                let promises = [];
                for(i=0; i < arrayResults.length; i++) {
                    
                    let pokeObj = getPokemonDetails(arrayResults[i].url)
                    //.then(data => {console.log(data)})
                    //promises.push(pokeObj)
                    
                    pokeObj.then( pokeResults => {                        
                        pokemones.name = pokeResults.name,
                        pokemones.life = pokeResults.stats[0].base_stat,
                        pokemones.image = pokeResults.sprites.front_default,
                        pokemones.speed = pokeResults.stats[5].base_stat,
                        pokemones.height = pokeResults.height,
                        pokemones.weight = pokeResults.weight,
                        pokemones.attack = pokeResults.stats[1].base_stat,
                        pokemones.defense = pokeResults.stats[2].base_stat,
                        
                        arrayDetailsPokemon.push(pokemones)                        
                        console.log(arrayDetailsPokemon)
                    })
                
               } 
                res.json(arrayDetailsPokemon)

                /* let allPokemonData = arrayResults.map(eachPoke => getPokemonDetails(eachPoke.url).then(objResult => {
                    objResult.hp
                })) 
                console.log(allPokemonData)
 */
                //console.log('POKEMON DATA: ', allPokemonData)
                //res.json(allPokemonData)
                
                /* if(!pokesDb.length) 
                Pokemon.bulkCreate(arrayResults) */
            })
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
    const {name, id, image, status, mine, life, attack, defense, height, weight, speed} = req.body;
    //console.log(newPoke)
     try {        
        let poke = await Pokemon.create({                
                name,
                id,
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
})

module.exports = router;
