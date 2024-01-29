import express from 'express'
const server = express ()
import ProductManager from './src/server/data/fs/products.fs.js';
 import UserManager from './src/server/data/fs/users.fs.js';
import errorHandler from './src/server/middlewares/errorHandler.mid.js';
import pathHandler from './src/server/middlewares/pathHandler.mid.js';
import router from './src/server/routers/index.router.js';
import __dirname from './src/server/data/fs/utils.js';
// ...
import { engine } from "express-handlebars";
import morgan from 'morgan';
const PORT = 9000;
const ready = ()=> console.log('server ready on port ' +PORT);
 
server.listen(PORT,ready);
 
server.use(express.json())
server.use(express.urlencoded({extended:true}));

server.engine("handlebars",engine())
server.set("view engine", "handlebars")
server.set("views", __dirname+"/src/views")
server.use(router)
server.use(express.static(__dirname + "/public"));
server.use(morgan("dev"))
server.use(pathHandler)
server.use(errorHandler)

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