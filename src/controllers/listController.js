import { List } from "../models/index.js";

export async function getAllLists(req, res) {
  try {

    // Récupérer toutes les listes en BDD
    const lists = await List.findAll();
  
    // Renvoyer au format JSON
    res.json(lists);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unexpected server error. Please try again later." });
  }
}

