const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');

const { Pokemon, Type, Pokemon_Type} = require('../db.js');
//const cors = require('cors');
const { Op } = require('sequelize');

//const pokemon = require('../models/Pokemon.js')

//const getAllPokemons = require('./getAllPokemons');
//router.use("/myDiets", diets)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const router = Router();

//router.use("/pokemon" );


//GET /:ID........................
router.get('/pokemon/:id', async (req, res) => {
    const id = req.params.id 
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
    const array = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0')
    console.log('RESPUESTA DE API: ', array.data.results);
    return array.data.results;
};

let result = data();
//console.log(result)

router.get('/pokemon', (req, res) => {
    console.log('THESE ARE OUR POKEMONES: ', result)
})

/* router.get('/pokemon', async (req, res) => {

    const name = array.query.name;

    const apiPokemons = await data();
    console.log('RESPUESTA DE API: ', apiPokemons.data.results);
    try {
        let pokesDb = await Pokemon.findAll();

        if(!pokesDb.length) await Pokemon.bulkCreate(apiPokemons)
    } catch (error) {
        console.log(error)
    }

    if (name) {
        try {
            let poke = await Pokemon.findAll({
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
            let poke = await Pokemon.findAll({
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
            let poke = await Pokemon.findAll({
                limit: 12,
                offset: req.query.page,
                order: [['name', req.query.order]],
                include: { model: Type}
            });
            return res.json(poke)
        } catch (error) {
            console.log(error)
        }        
    }
}) */

router.post('/newPokemon', async (req, res) => {
    const newPoke = req.body;

    try {
        let poke = await Pokemon.findOrCreate({
            where: {
                name: Pokemon.name,
                image: Pokemon.image,
                status: Pokemon.status,
                mine: Pokemon.mine,
                hp: Pokemon.hp,
                attack: Pokemon.attack,
                defense: Pokemon.defense,
                speed: Pokemon.speed,
                weight: Pokemon.weight,
                height: Pokemon.height
            } 
        });
        return res.json(poke)
    } catch (error) {
        console.log(error)
    }
})




module.exports = router;
