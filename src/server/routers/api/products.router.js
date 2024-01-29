import { Router } from 'express';
import ProductManager from '../../data/fs/products.fs.js';

const productsRouter = Router();
const productManager = new ProductManager();


productsRouter.get("/", (req, res) => {
    try {
        const products = productManager.read();

        if (products.length > 0) {
            res.json({
                success: true,
                response: products
            });
        } else {
            throw new Error('No se encontraron productos');
        }
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message || 'Error interno del servidor'
        });
    }
});

productsRouter.get("/:pid", (req, res) => {
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


productsRouter.post("/", (req, res) => {
   
});

productsRouter.put("/:pid", (req, res) => {
    
});


productsRouter.delete("/:pid", (req, res) => {
    
});

export default productsRouter;
