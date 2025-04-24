const fs = require('fs').promises;

async function readFileAsync()
{
    try
    {
        const file1 = await fs.readFile('file1.txt', 'utf-8');
        const file2 = await fs.readFile('file2.txt', 'utf-8');

        console.log('File1 content: ', file1);
        console.log('File2 content: ', file2);
    }
    catch(error)
    {
        console.error('Error while reading file:', error);
    }
}

readFileAsync();