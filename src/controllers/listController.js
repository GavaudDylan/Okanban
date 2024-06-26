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

export async function createList(req, res) {
  // Récupérer les données de la liste à créé fournies par l'utilisateur
  console.log(req.body);

  // Analyser les données du body pour vérifier que tout est en règle

  // Créer la nouvelle liste en BDD

  // Répondre au client avec les bonnes infos (cf. la spécification !)
  res.send("ok"); // TODO: à modifier

  // Try-catch
}
