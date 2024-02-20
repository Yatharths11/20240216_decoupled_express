const express = require('express');
// const myDB = require('./myDB')
const myDB = require("./myjsonDb")
const app = express();
const port = 3000; // You can choose any port

app.use(express.json()); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get("/search", (req, res) => {
  myDB.searchProduct(req.query.q)
    .then((data) => {
      res.send({ "results": data });
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
    });
});

app.get("/product/:id", (req, res) => {
  myDB.searchOneProduct(req.params.id)
    .then((data) => {
      res.send({ "results": data });
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
    });
});


app.delete('/delete/:id', (req, res)=>{
  myDB.deleteOneProduct(req.params.id)
  .then((data)=>{
    res.send({data})
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  });
})


app.get("/status/:order_id", (req, res) => {
  myDB.checkStatus(req.params.order_id)
  .then((status) => {
    res.send(`Order status: ${status}`);
  })
  .catch((error) => {
    console.error(`Error checking status: ${error.message}`);
  });
});

app.put("/product/update/:id",(req,res)=>{
  myDB.updateProduct(req.params.id, req.body)
   .then((updatedData) =>{
     if(!updatedData){
       res.status(404).send("The product with the given ID was not found.");
     } else {
       res.send(updatedData);
     }
   })
   .catch((e) => {
     res.status(400).send(e);
   });
});

app.post("/checkout",(req,res)=>{
  myDB.checkout(req.body.order_id)
  .then((result) => {
    console.log(result);
    res.send(result)
  })
  .catch((error) => {
    console.error(`Error during checkout: ${error.message}`);
  });
})

app.post("/order",(req,res)=>{
  myDB.placeOrder(req.body.product_id,req.body.quantity)
  .then((result)=>{
    if(result.order_id == undefined){
      res.send(result)
    }else{
      res.send("Order placed successfully.Your order_id is "+result.order_id)
    }
    
  })
  .catch((err)=>{
    console.log(err)
  })
})

app.post("/product/",(req,res)=>{
  const newItem = req.body;
  myDB.addProduct(newItem)
    .then((item)=>res.send(newItem))
    .catch((err)=>console.log(err));
})

app.delete("/cancel/:order_id",(req,res)=>{
  myDB.cancelOrder(req.params.order_id)
  .then((result)=>{
    res.send(result)
  })
})