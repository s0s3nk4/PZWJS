function fetchData(): Promise<string>
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() =>
        {
            const success = true;
            if(success)
            {
                resolve("Data downloaded succesfully");
            }
            else
            {
                reject("Error while downloading data");
            }
        }, 1000);
    });
}

async function getData(): Promise<void>
{
    try
    {
        console.log("Downloading data . . .");
        const data = await fetchData();
        console.log(data);
    }
    catch (error)
    {
        console.error("Error: ", error);
    }
}

getData();