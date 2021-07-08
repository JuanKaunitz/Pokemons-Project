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
    const array = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=4&offset=0')
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

router.get('/pokemon', async (req, res) => {

    //const name = apiPokemons.query.name;

    let apiPokemons = await data();
    //res.json(apiPokemons)
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
    try {                
        for(i=0; i < apiPokemons.length; i++) {            
            let pokeObj = await getPokemonDetails(apiPokemons[i].url)
            //console.log(pokeObj.name)            
            pokemones.name = pokeObj.name
            pokemones.life = pokeObj.stats[0].base_stat
            pokemones.image = pokeObj.sprites.front_default
            pokemones.speed = pokeObj.stats[5].base_stat
            pokemones.height = pokeObj.height
            pokemones.weight = pokeObj.weight
            pokemones.attack = pokeObj.stats[1].base_stat
            pokemones.defense = pokeObj.stats[2].base_stat
            //console.log(pokemones.name)  
            
            let newPokeObj = {
                ...pokemones
            }  
            arrayDetailsPokemon.push(newPokeObj)                        
        }    
        console.log(arrayDetailsPokemon)            

        res.send(arrayDetailsPokemon)
    } catch (error) {
    console.log(error)
    } 
    
    //if(!pokesDb.length) 
    Pokemon.bulkCreate(arrayDetailsPokemon)  
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
