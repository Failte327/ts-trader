const body = {resources: 92.00};

async function request() {
    const response = await fetch('http://localhost:3000/trade-data/update', {method: 'post', body: JSON.stringify(body), headers: {'Content-Type': 'application/json'}})
    const data = await response.json()
    console.log(data);
}

request();