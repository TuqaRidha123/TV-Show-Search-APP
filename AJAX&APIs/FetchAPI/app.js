// newer way 
// of making http
// requests

// returns a resolved promise with a response object
// response object contains things such as the status code 
// and headers 
// if the endpoint did not exist 
// promise will be reject 
// will print out an error 

// promise version 
/*
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("response, waiting to parse...", res)
        return res.json()
    })
    .then(data => {
        console.log("data parsed");
        console.log(data.ticker.price);
    })
    .catch(err => {
        console.log("error", err);
    })
*/

// async function version
const fetchBitCoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price);
    } catch(err) {
        console.log("something went wrong", err);
    }
} 