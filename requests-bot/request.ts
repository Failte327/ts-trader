export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function request(requests) {
    const response = await fetch('http://localhost:3000/price-data/update', {method: 'post'})
    const data = await response.json()
    console.log(data);
    if (requests < 1000) {
        requests++;
        console.log(`Update request sent ${requests} times.`)
        // Wait 1 minute, then request again
        sleep(60000).then(() => {
            request(requests);  
        })
    }
}

request(0);