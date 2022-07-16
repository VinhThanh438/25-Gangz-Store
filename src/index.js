import express from "express";
import routes from "../src/routes/routes";
import configViewEnigne from "../src/config/viewEngine";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

routes(app);
configViewEnigne(app);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port);
