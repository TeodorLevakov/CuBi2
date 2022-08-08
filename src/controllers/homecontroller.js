const router = require('express').Router();
const cubeService = require('../services/cubeService.js');



router.get('/', (req, res) => {

    let { search, from, to} = req.query;
    let cubes = cubeService.getAll(search, from, to);

    res.render('index', { cubes: cubes, search, from, to});
});

router.get('/about', (req, res) => {
    res.render('about.hbs');
});


// exports.index = (req, res) => {
//     res.render('index', { cubes: cubes });
// };

// exports.about = (req, res) => {
//     res.render('about.hbs');
// }

module.exports = router;
