import { Router } from "express";
import * as listController from "./controllers/listController.js";

export const router = Router();

router.get("/lists", listController.getAllLists);
router.post("/lists", listController.createList);


// Middleware 404
router.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
