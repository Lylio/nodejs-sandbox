const fs = require('fs')

fs.appendFile('mynewfile1.txt', 'here goes the content', function (err) {
    if (err) throw err;
    console.log('saved');
});
