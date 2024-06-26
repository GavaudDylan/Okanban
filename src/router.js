import { Router } from "express";

export const router = Router();

router.get("/lists", (req, res) => {
  res.send("OK");
});
