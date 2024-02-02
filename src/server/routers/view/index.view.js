import { Router } from "express";
import usersRouter from "./users.view.js";
import productsRouter from "./products.view.js";

const viewsRouter = Router();

viewsRouter.get("/", (req, res, next) => {
  try {

    const date = new Date();
    return res.render("index", { date });
  } catch (error) {
    next(error);
  }
});


viewsRouter.use("/products", productsRouter);
viewsRouter.use("/users", usersRouter);

export default viewsRouter;
