interface PriceData {
    price: Number,
    timestamp: Date
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const body = {resources: 25.00};

async function trade() {

    let response = await fetch('http://localhost:3000/price-data');
    let data: string[] = await response.json();

    let adxusdtList: PriceData[] = [];
    let glmusdList: PriceData[] = [];
    let clvusdList: PriceData[] = [];
    let sandusdList: PriceData[] = [];
    let oceanusdList: PriceData[] = [];

    for (var i in data) {
        if (data[i]["symbol"] === "ADXUSDT") {
            let priceTimestamp = {} as PriceData;
            priceTimestamp["price"] = data[i]["price"]
            priceTimestamp["timestamp"] = data[i]["timestamp"]
            adxusdtList.push(priceTimestamp)
        } else if (data[i]["symbol"] === "GLMUSD") {
            let priceTimestamp = {} as PriceData;
            priceTimestamp["price"] = data[i]["price"]
            priceTimestamp["timestamp"] = data[i]["timestamp"]
            glmusdList.push(priceTimestamp)
        } else if (data[i]["symbol"] === "CLVUSD") {
            let priceTimestamp = {} as PriceData;
            priceTimestamp["price"] = data[i]["price"]
            priceTimestamp["timestamp"] = data[i]["timestamp"]
            clvusdList.push(priceTimestamp)
        } else if (data[i]["symbol"] === "SANDUSD") {
            let priceTimestamp = {} as PriceData;
            priceTimestamp["price"] = data[i]["price"]
            priceTimestamp["timestamp"] = data[i]["timestamp"]
            sandusdList.push(priceTimestamp)
        } else if (data[i]["symbol"] === "OCEANUSD") {
            let priceTimestamp = {} as PriceData;
            priceTimestamp["price"] = data[i]["price"]
            priceTimestamp["timestamp"] = data[i]["timestamp"]
            oceanusdList.push(priceTimestamp)
        }
    }

    console.log("ADXUSDT\n", adxusdtList);
    console.log("GLMUSD\n", glmusdList);
    console.log("CLVUSD\n", clvusdList);
    console.log("SANDUSD\n", sandusdList);
    console.log("OCEANUSD\n", oceanusdList);

    // const response = await fetch('http://localhost:3000/trade-data/update', {method: 'post', body: JSON.stringify(body), headers: {'Content-Type': 'application/json'}})
    // const data = await response.json()
    // console.log(data);
}

trade();