let startTime = Date.now();
const alphabet = ['a', 'ą', 'b', 'c', 'd', 'e', 
                  'ę', 'f', 'g', 'h', 'i', 'j',
                  'k', 'l', 'm', 'n', 'o', 'p',
                  'q', 'r', 's', 't', 'u', 'v',
                  'w', 'x', 'y', 'z', 'ź', 'ż'];
let index = 0;

function updateTimer()
{
    let curTime = Date.now();
    let elapsedTime = curTime - startTime;

    let sec = Math.floor(elapsedTime / 1000);

    console.log(`${sec} sec passed`);
}

function display()
{
    for(let i=0; i<5; i++)
    {
        setTimeout(() => 
        {
            console.log(`a`);
        }, i * 10);
    }
}

function letters()
{
    if(index < alphabet.length)
        {
            const letter = alphabet[index];
            console.log(letter);

            if(['a', 'e', 'i', 'o', 'u'].includes(letter))
            {
                setTimeout(() => 
                {
                    index++;
                    letters();
                }, 2000);
            }
            else 
            {
                index++;
                setTimeout(letters, 500)
            }
    }
}

setInterval(updateTimer, 1000);
setInterval(display, 1000);
letters();