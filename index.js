var express = require('express')
const fetch = require("node-fetch");

var app = express(); 

app.get("/", async function(req, res){

    const params = {
        refresh : 'YOUR REFRESH TOKEN'
    }

    let response = await fetch("https://dev.cobru.co/token/refresh/", {
        method:"POST", 
        headers:{
            Accept:'application/json', 
            'Content-Type': 'application/json',
            'Api-Token' : "2263fa47fe1c7e76d540c1f126693327",
            'Api-Secret-Key': "31AJsHtX3k36"
        }, 
        body: JSON.stringify(params)
    });

    if(response.status == 200){
        let j = await response.json();
        res.send(j); 
    }
    else{
        res.send("error: " + response.status);
    }
})

app.listen(3000, function(){
    console.log('Aplicacion de ejemplo de uso de API COBRU corriendo en el puerto 3000'); 
})