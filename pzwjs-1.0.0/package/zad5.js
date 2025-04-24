const e = require('express');
const fs = require('fs');

function readFileSync()
{
    try
    {
        const file1 = fs.readFileSync('file1.txt', 'utf-8');
        const file2 = fs.readFileSync('file2.txt', 'utf-8');

        console.log('File1 content: ', file1);
        console.log('File2 content: ', file2);
    }
    catch(error)
    {
        console.error('Error while reading file: ', error);
    }
}

readFileSync();