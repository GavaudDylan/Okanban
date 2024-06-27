import { Router } from "express";
import * as listController from "./controllers/listController.js";
import { controllerWrapper as cw } from "./utils/controllerWrapper.js";

export const router = Router();

router.get("/lists", cw(listController.getAllLists));
router.get("/lists/:id", cw(listController.getOneList));
router.post("/lists", cw(listController.createList));
router.patch("/lists/:id", cw(listController.updateList));


// Middleware 404
router.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
