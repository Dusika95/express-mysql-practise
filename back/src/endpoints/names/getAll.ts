import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import { db } from "../../database";

export default asyncHandler(async (_: Request, res: Response) => {
	let query = db.selectFrom("names");

	const result = await query.selectAll().execute();

	res.json(result);
});
