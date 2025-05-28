const express = require('express');
const itemRoute = require('./Routes/items.js');

const app = express();
const PORT = 3000;


// body-parsing middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// items Route middleware
app.use('/items', itemRoute);

//simulating 500 error 
app.get('/error', (req,res,next) => {
    const error = new Error('something went wrong!');
    next(error);
})

// 404  Not found handler
app.use((req,res) => {
    res.status(404).send('404 Error: page not found');
})

// 500 Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
})



const server = app.listen(PORT, () => {
    console.log(`server running on port:http://localhost:${PORT}`)
} )