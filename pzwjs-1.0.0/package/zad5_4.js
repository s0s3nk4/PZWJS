const { error } = require('console');
const fs = require('fs');

function cipher(str, shift)
{
    return str.replace(/[^a-zA-z\s]/g, (char) =>
    {
        const start = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
    });
}

function blankFilter(data)
{
    return data.replace(/[^a-zA-Z\s]/g, '');
}

function readCipher()
{
    const stream = fs.createReadStream('file_s.txt', {encoding: 'utf-8'});
    const outstream = fs.createWriteStream('encrypted.txt', {encoding: 'utf-8'});

    stream.on('data', (chunk) =>{
        const chunkFilter = blankFilter(chunk);
        const chunkEncrypt = cipher(chunkFilter, 3);
        console.log('Encrypted part of file: ', chunkEncrypt);
        outstream.write(chunkEncrypt);
    });

    stream.on('end', () =>
    {
        console.log('File readed and encrypted.');
        outstream.end();
    });

    stream.on('error', (error) =>
    {
        console.error('Error while reading file.', error);
    })
}

readCipher();