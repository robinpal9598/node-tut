const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const Favorite=require('./db/Favorite');
const Product = require('./db/Products')
const app = express();
app.use(express.json());
app.use(cors());


//register api
app.post('/register', async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);

})
//Bookmark API
app.post('/bookmark', async (req, resp) => {
    let  bookmark= new Favorite(req.body);
    let result = await bookmark.save();
    result = result.toObject();
    resp.send(result);

})


//product api
app.post('/add-product', async (req, resp) => {
    let product = new Product(req.body);
    let resultProduct = await product.save();
    resp.send(resultProduct);
})
//login api
app.post('/login', async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user);
        }
        else {
            resp.send("no user found");
        }
    }
    else {
        resp.send("Enter all the credentials");
    }


})


app.get('/products', async (req, resp) => {
    let products = await Product.find();
    if (products.length > 0) {
        resp.send(products);
    }
    else {
        resp.send({ results: "no products found" });
    }

})


app.delete('/product/:id', async (req, resp) => {
    try {
        console.log(req.params.id);
        let id = req.params.id;
        // resp.send("working");
        const result = await Product.deleteOne({ _id: id });
        resp.send(result);


    } catch (error) {
        console.log("error")
    }

})

app.get("/product/:id", async (req, resp) => {
    try {
        let answer = await Product.findOne({ _id: req.params.id });
        if (answer) {
            resp.send(answer);
        }
        else {
            resp.send({ answer: "Nothing found" });
        }
    } catch (error) {
        console.log("error", error)
    }
})
app.put("/product/:id",async(req,resp)=>{
    let result=await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    resp.send(result);
})

//search API
app.get("/search/:key",async(req,resp)=>{
    let result=await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {price:{$regex:req.params.key}},
        ]
    });
    if(result)
    {
        resp.send(result);
    }
    else
    {
        resp.send({result:"not result found"})
    }
    
})

//favorite api
app.get("/favorite/:userId",async(req,resp)=>{
    let result=await Product.find({
        "$or":[
            {userId:{$regex:req.params.userId}},
            
        ]
    });
    if(result.length>0)
    {
        resp.send(result);
    }
    else
    {
        resp.send({result:"not favorite found"})
    }
    
})
app.get("/bookmark/:userId",async(req,resp)=>{
    let result=await Favorite.find(
    
            {userId:req.params.userId}

            
        
    );
    if(result.length>0)
    {
        resp.send(result);
    }
    else
    {
        resp.send({result:"not favorite found"})
    }
    
})

app.listen(5000); 