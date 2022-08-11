const router = require('express').Router();
const cubeService = require('../services/cubeService.js');
const accessoiesService = require('../services/accessoryService.js');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    
    let cube = req.body;
    //validate
    if (cube.name.length < 2) {
        res.status(400).send('invalid request');
        return;
    };

    try {
        await cubeService.create(cube);

        res.redirect('/');
    } catch(err) {
        res.status(400).send(err);
    }
    //save data
    // cubeService.create(cube)
    // .then(() => {
    //     res.redirect('/');
    // })
    // .catch(err => {
    //     res.status(400).send(err);
    // });
});

router.get('/details/:id', async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();

    res.render('details', { cube });
});

router.get('/:cubeId/attach-accessory', async (req, res) => {

    let cube = await cubeService.getOne(req.params.cubeId).lean();
    let accessories = await accessoiesService.getAll().lean();

    res.render('accessory/attach', {cube, accessories});
});


module.exports = router;