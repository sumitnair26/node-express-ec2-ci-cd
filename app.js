const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('<h1>Node Express Demo APP</h1> <h4> Message : Success </h4>');
});

app.get('/products',(req, res)=>{
    res.send([
        {
            productId: "101",
            price:150
        },{
            productId: "102",
            price:152
        },
    ])
})

app.listen(port, () => {    
    console.log(`Demo app is up and listning to port: ${ port } `);
})