import {Router} from 'express'
import UserManager from '../../data/fs/users.fs.js';
const usersRouter = Router();
const userManager = new UserManager();

usersRouter.get("/", (req, res) => {
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

usersRouter.get("/:uid", (req, res) => {
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

export default usersRouter