var http = require ('http');
//var dt = require('./datetime');
const axios = require('axios');


http.createServer (function (req,res) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
   // res.write("The date and time are currently: " + dt.myDateTime());
   // res.end("The date and time are currently: " + dt.myDateTime());
  
   //it is set to tr, you can change it according to the country you want
    axios.get('https://newsapi.org/v2/top-headlines?country=tr&apiKey=3336c6843508409b971dc3b1b8c6f8a0')
        //if successful, returns data as response
        .then(response => {
          console.log(response.data);
         res.end(JSON.stringify(response.data));
        })
        //if has an error in the code, it will print on the terminal screen 
        .catch(error => {
          console.log(error);
        });
     
}).listen(3000);