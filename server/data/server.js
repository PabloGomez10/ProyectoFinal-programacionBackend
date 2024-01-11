import express from express;
import ProductsManager from productsManager;
import UsersManager from  usersManager
import fs from fs;
import path from path;
import crypto from crypto;

const server = express ()

const PORT = 8080;
const ready = ()=> console.log('server ready on port ' +PORT);

//middlewares
server.use(express.urlencoded({extended:true}));

server.listen(PORT,ready);

const productsManager = new ProductsManager();

server.get("/api/products",(req, res) => {
   try {
       const products = productManager.read();
       if (products.length > 0) {
           res.json({
               success: true,
               response: products
           });
       } else {
           res.status(404).json({
               success: false,
               message: 'not found!'
           });
       }
   } catch (error) {
       console.error('Error:', error.message);
       res.status(500).json({
           success: false,
           message: 'internal server error'
       });
   }
   });

   server.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
  });

const usersManager = new UsersManager();



server.get("/api/users.js",(req,res)=>{
    try {
     const users =usersManager.read();
    } catch (error) {
     
    }
 
 
 })


// const ruta = "/";
// const funcionQueVaAleer = (req, res)=>{
//     return res.status(200).send("MY FIRST EXPRESS' SERVER")
// }

// server.get(ruta,funcionQueVaAleer);

// const ruta2 = "/events";
// const funcion2 = (req,res)=>{
//     const all = ["aca","deberian","estar","todos","los","eventos"]
//     return res.status(200).send(all);
// }
// server.get(ruta2,funcion2);

// const ruta3 = "/users";
// const funcion3 = (req,res)=>{
//     const all = ["array","de","usuarios","del","archivo"]
//     return res.status(200).json(all);
// }
// server.get(ruta3,funcion3);