const express = require('express');
const uuid = require('uuid');
const { check, validationResult } = require('express-validator')

const route = express.Router();



let items = [ 
            // {name:"Laptops", description:"4GB RAM", amount:"20", id: 1 },
            // {name:"Phones", description:"32GB RAM", amount:"29", id: 2  },
            // {name:"Headset", description:"wireless", amount:"29", id: 3  }
]



route.get('/', (req, res) => {
    
    console.log('request has been made');
    res.send(items);
    
})

route.post('/', [

    check('name')
        .isLength({min:3})
        .withMessage('name must be at least 3 character long'),
    check('description')
        .isLength({min:3})
        .withMessage('description must be at least 3 character long'),
    check('amount')
        .isInt({min:1})
        .withMessage('Amount must be a number and greater than zero')
 ], 
    (req, res) => {

   const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    
    const item = req.body;
    
    const itemId = uuid.v4();
    const itemWithId = {...item, itemId};

    
    items.push(itemWithId);

    res.send(`Item with the name ${item.name} added to the Data base`);
})

route.get('/:id', (req, res) => {
    const {id}  = req.params;

    const foundItem = items.find((item) => item.itemId == id);

    res.send(foundItem);

})

route.delete('/:id', (req, res) => {
    const {id}  = req.params;
    
    items = items.filter( item => item.itemId !== id);

    res.send(`Item with the id ${id} deleted from the database`)
    console.log(items);

})

route.put('/:id', (req,res) => {
    const {id} = req.params;
    const {name, description, amount } = req.body;

    const item = items.find(item => item.itemId == id);

    if(name) item.name = name;
    if(description) item.description = description;
    if(amount) item.amount = amount;

    res.send(`Item with the id ${id} has been updated in the database`)


})


module.exports = route;