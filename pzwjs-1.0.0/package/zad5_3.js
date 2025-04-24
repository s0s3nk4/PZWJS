const { error } = require('console');
const fs = require('fs');

function blankFilter(data)
{
    return data.replace(/[^a-zA-Z\s]/g, '');
}

function readBlankFilterFile()
{
    const stream = fs.createReadStream('file_s.txt', {encoding: 'utf-8'});


stream.on('data', (chunk) =>
{
    const filterChunk = blankFilter(chunk);
    console.log('Filtered part of file: ', filterChunk);
});

stream.on('end', () => 
{
    console.log('File loaded and filtered.');
});

stream.on('error', (error) =>
{
    console.error('Error while reading file: ', error);
});
}

readBlankFilterFile();