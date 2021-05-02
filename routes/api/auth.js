import Router from "express";
import authController from "../../controllers/auth/authController.js";

const router = Router();

router
    .route("")
    .get(authController.index);

router
    .route("/:id")
    .get(authController.edit);

export default router;
