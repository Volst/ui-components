'use strict';

const path = require('path');
const toPascalCase = require('to-pascal-case');

function myDestRewriter(pathObj, innerPath) {
    let fileName = pathObj.base;

    const rewrittenInnerPath = innerPath.replace('/svg/production', '');

    fileName = fileName.replace('_24px.svg', '');
    fileName = fileName.slice(3);
    fileName = toPascalCase(fileName);
    fileName += '.js';

    if (fileName.indexOf('3d') === 0) {
        fileName = 'three-d' + fileName.slice(2);
    }

    console.log('aaa', fileName);

    return path.join(rewrittenInnerPath, fileName);
}

module.exports = myDestRewriter;
