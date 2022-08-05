const router = require('express').Router();
const cubes = require('../db.json');
const fs = require('fs/promises');
const path = require('path');


router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    
    let cube = req.body;

    //validate
    if (cube.name.length < 2) {
        res.status(400).send('invalid request');
        return;
    };

    //save data
    cubes.push(cube);

    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4), {encoding: 'utf-8'})
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(400).send(err);
        });


    //redirect to page
});

module.exports = router;