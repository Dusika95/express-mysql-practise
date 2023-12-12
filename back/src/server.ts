import express from "express";

import * as dotenv from "dotenv";
dotenv.config();

import getAllNames from "./endpoints/names/getAll";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/names", getAllNames);
app.get("/asd", getAllNames);
// app.post("/names", createName);
// app.put("/names/{:id}", updateName);
// app.delete("/names/{:id}", deleteName);

app.listen(process.env.PORT, () => {
	console.log("app is running");
});
