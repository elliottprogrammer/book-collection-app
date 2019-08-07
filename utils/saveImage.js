const fs = require('fs');
const request = require('request');

const saveImage = function(uri, filename, callback) {
    const path = '../client/public/images/';
    request.head(uri, function(err, res, body) {
        request(uri)
            .pipe(fs.createWriteStream(path + filename))
            .on('close', callback);
    });
    console.log(path + filename);
};
module.exports = saveImage;
