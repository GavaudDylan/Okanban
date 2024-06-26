import { Router } from "express";
import * as listController from "./controllers/listController.js";

export const router = Router();

router.get("/lists", listController.getAllLists);
router.get("/lists/:id", listController.getListById);
router.post("/lists", listController.createList);
// router.patch("/lists/:id")
router.delete("/lists/:id", listController.deleteList);
