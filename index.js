const express = require('express');
var satelize = require('satelize');
var requestIp = require('request-ip');

const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
    let ip = requestIp.getClientIp(req);
    let data = new Date();
    console.log(ip);
    if(ip != "127.0.0.1" && ip != "0.0.0.0" && ip != "::1" && !ip.startsWith("::")){
        let timezone = satelize.satelize({ip:ip}, function(err, payload) {
            return payload.timezone;
        });
        data = new Date().toLocaleString("en-US",{ timeZone: timezone});   
    }

    res.send(`<h2>Twoj adres IP to ${ip}, strefa czasowa  ${data}`);
});

app.listen(PORT);
console.log(`Serwer nasluchuje na porcie ${PORT}\nWykonany przez Bartosz Pranagal`);