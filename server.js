import express from 'express'
import ProductManager from './server/data/fs/products.fs.js';
// import ProductManager from './server/data/fs/products.fs';
import UserManager from './server/data/fs/users.fs.js';
const server = express ()

const PORT = 8080;
const ready = ()=> console.log('server ready on port ' +PORT);
 
server.listen(PORT,ready);
 
server.use(express.urlencoded({extended:true}));

const productManager = new ProductManager();
const userManager = new UserManager();

server.get("/", (req, res) => {
    try {
        res.json({ message: "Welcome my API" });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

server.get("/api/products", (req, res) => {
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
});

server.get("/api/products/:pid", (req, res) => {
    const productId = req.params.pid;
    const product = productManager.readOne(productId);

    if (product) {
        res.json({
            success: true,
            response: product
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'not found!'
        });
    }
});

server.get("/api/users", (req, res) => {
    const users = userManager.read();
    if (users.length > 0) {
        res.json({
            success: true,
            response: users
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'not found!'
        });
    }
});

server.get("/api/users/:uid", (req, res) => {
    const userId = req.params.uid;
    const user = userManager.readOne(userId);

    if (user) {
        res.json({
            success: true,
            response: user
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'not found!'
        });
    }
});

// ---------------------------------------------------------------------------------------------
// import express from 'express';

// import fs from 'fs';
// import path from 'path';
// import crypto from 'crypto';
// import ProductManager from './fs/products.fs';
// import UserManager from './fs/users.fs';

// const server = express ()

// const PORT = 8080;
// const ready = ()=> console.log('server ready on port ' +PORT);

// //middlewares
// server.use(express.urlencoded({extended:true}));

// server.listen(PORT,ready);

// const productsManager = new ProductManager();

// server.get("/api/products",(req, res) => {
//    try {
//        const products = productsManager.read();
//        if (products.length > 0) {
//            res.json({
//                success: true,
//                response: products
//            });
//        } else {
//            res.status(404).json({
//                success: false,
//                message: 'not found!'
//            });
//        }
//    } catch (error) {
//        console.error('Error:', error.message);
//        res.status(500).json({
//            success: false,
//            message: 'internal server error'
//        });
//    }
//    });

//    server.listen(PORT, () => {
//       console.log(`Server listening at http://localhost:${PORT}`);
//   });

// const usersManager = new UserManager();



// server.get("/api/users.js",(req,res)=>{
//     try {
//      const users =usersManager.read();
//     } catch (error) {
     
//     }
 
 
//  })


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