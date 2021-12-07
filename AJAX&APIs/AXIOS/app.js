// AXIOS is a library 
// has to be included in code
// in order for it to work
// see html file for more...

// returns a resolved promise
// no need to parse 
// includes all info we need
/* PROMISE VERSION 
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("error", err);
    })
*/
// ASYNC FUNC VERSION
/*
const fetchBitCoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price);
    } catch (err) {
        console.log("error", err)
    }
}
*/
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI); 
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json'} }
        const res = await axios.get('https://icanhazdadjoke.com', config);
        return res.data.joke;
    } catch(e) {
        return "No jokes available"
    } 
}

button.addEventListener('click', addNewJoke);