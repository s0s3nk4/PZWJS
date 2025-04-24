function alphabetBufor()
{
    const start = 'A'.charCodeAt(0);
    const end = 'Z'.charCodeAt(0);
    const bufor = Buffer.alloc(end - start + 1);

    for(let i=0;i<=end-start;i++)
    {
        bufor[i] = start + i;
    }

    return bufor;
}

function display()
{
    const alphabet = alphabetBufor();

    console.log('Letters in ASCII and UTF-16: ');
    for(let i=0;i<alphabet.length;i++)
    {
        const ascii = alphabet[i];
        const letter = String.fromCharCode(ascii);
        console.log(`Letter: ${letter}, ASCII: ${ascii}, UTF-16: ${letter.charCodeAt(0)}`);
    }
}

display();