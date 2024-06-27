import { Router } from "express";
import * as listController from "./controllers/listController.js";
import * as cardController from "./controllers/cardController.js";
import { controllerWrapper as cw } from "./utils/controllerWrapper.js";

export const router = Router();

// == Routes des lists ==
router.get("/lists", cw(listController.getAllLists));
router.get("/lists/:id", cw(listController.getOneList));
router.post("/lists", cw(listController.createList));
router.patch("/lists/:id", cw(listController.updateList));
router.delete("/lists/:id", listController.deleteList);


// == Routes des cartes ==
router.post("/cards", cw(cardController.createCard));


// Middleware 404
router.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
