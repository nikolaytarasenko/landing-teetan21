const del = require('del');

// Config
const path = require('../config/path.js');

// Clear directory
const clear = () => {
    return del(path.root);
}

module.exports = clear;