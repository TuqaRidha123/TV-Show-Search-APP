const req = new XMLHttpRequest()

// should print out 
// current bitcoin 
// price
req.onload = function() {
    console.log("all done with request");
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

req.onerror = function() {
    console.log("error"); 
    console.log(this); 
}

// "this" refers to the object 
// of the request itself 
// you'll see it in inspect 
// use postman software 
// in order to view the request 
// object "this" in an easier 
// to read format 

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();