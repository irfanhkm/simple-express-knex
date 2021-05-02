import {Router} from "express";
import bodyParser from "body-parser";
import apiRoute from "./routes/api/index";
import dotenv from "dotenv";

const express = require("express");
const app = express();
const router = Router();
const port = process.env.APP_PORT || 3000;

// env
dotenv.config();

// Handle request type
app.use(bodyParser.json());

// Routes
router.use("/api", apiRoute);
app.use(router);

// Listen
app.listen(port);
console.log("Listening on localhost:" + port);
