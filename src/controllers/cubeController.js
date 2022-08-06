const router = require('express').Router();
const cubeService = require('../services/cubeService.js');

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
    cubeService.save(cube)
    .then(() => {
        res.redirect('/');
    })
    .catch(err => {
        res.status(400).send(err);
    });
    //redirect to page
});

router.get('/details/:id', (req, res) => {
    const cube = cubeService.getOne(req.params.id);

    res.render('details', { cube });
});


module.exports = router;