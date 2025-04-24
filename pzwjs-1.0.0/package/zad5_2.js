const { error } = require('console');
const fs = require('fs');

function readStreamFile()
{
    const stream = fs.createReadStream('file_s.txt', {encoding: 'utf-8'});

    stream.on('data', (chunk) => 
    {
        console.log('Part of file recieved: ', chunk);
    });

    stream.on('end', () =>
    {
        console.log('File readed');
    });

    stream.on('error', (error) =>
    {
        console.error('Error while reading file: ', error);
    });
}

readStreamFile();