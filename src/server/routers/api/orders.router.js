import { Router } from 'express';
import OrdersManager from '../../data/fs/orders.fs.js';

const ordersRouter = Router();
const ordersManager = new OrdersManager();

ordersRouter.post("/", (req, res) => {
    try {
        const newOrder = ordersManager.create(req.body);
        res.json({
            success: true,
            response: newOrder
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

ordersRouter.get("/", (req, res) => {
    try {
        const orders = ordersManager.read();

        if (orders.length > 0) {
            res.json({
                success: true,
                response: orders
            });
        } else {
            throw new Error('No se encontraron órdenes');
        }
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message || 'Error interno del servidor'
        });
    }
});


ordersRouter.get("/:orderId", (req, res) => {
    const orderId = req.params.orderId;
    const order = ordersManager.readOne(orderId);

    if (order) {
        res.json({
            success: true,
            response: order
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Orden no encontrada'
        });
    }
});


ordersRouter.delete("/:orderId", (req, res) => {
    const orderId = req.params.orderId;
    const success = ordersManager.destroy(orderId);

    if (success) {
        res.json({
            success: true,
            message: 'Orden eliminada exitosamente'
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Orden no encontrada'
        });
    }
});

export default ordersRouter;
