const fs = require('fs/promises');
const path = require('path');

const Cube = require('../models/Cube.js');
//const cubes = require('../db.json');

exports.getAll =  (search = '', fromInput, toInput) => {

    return Cube.find().lean();
    // let from = Number(fromInput) || 0;
    // let to = Number(toInput) || 6;

    // let result = cubes
    //         .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    //         .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to);

    //return [];
};

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.create = (cube) => {

    return Cube.create(cube);

    // cubes.push({id: cubes[cubes.length-1].id+1, ... cube});
    // let data = JSON.stringify(cubes, '', 4)
    // return fs.writeFile(path.resolve('src', 'db.json'), data, {encoding: 'utf-8'})    

}