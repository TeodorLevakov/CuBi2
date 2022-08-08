const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');

exports.getAll = (search = '', from = 0, to = 6) => {
    let result = cubes
            .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
            .filter(x => x.difficultyLevel >= from);

    return result;
};

exports.getOne = (cubeId) => cubes[cubeId];

exports.save = (cube) => {
    cubes.push({id: cubes[cubes.length-1].id+1, ... cube});

    let data = JSON.stringify(cubes, '', 4)

    return fs.writeFile(path.resolve('src', 'db.json'), data, {encoding: 'utf-8'})    
}