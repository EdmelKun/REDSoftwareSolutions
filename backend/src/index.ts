import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "../src/routes/router";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
