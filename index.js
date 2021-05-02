import {express, Router} from "express";
import bodyParser from "body-parser";
import apiRoute from "./routes/api/index";

const app = express();
const router = Router();
const port = process.env.APP_PORT || 3000;

// Handle request type
app.use(bodyParser.json());

// Routes
router.use("/api", apiRoute);
app.use(router);

// Listen
app.listen(port);
console.log("Listening on localhost:" + port);
