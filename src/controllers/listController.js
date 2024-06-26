import { List } from "../models/index.js";

export async function getAllLists(req, res) {
  try {
    // Récupérer toutes les listes en BDD
    const lists = await List.findAll();

    // Renvoyer au format JSON
    res.json(lists);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Unexpected server error. Please try again later." });
  }
}

export async function createList(req, res) {
  try {
    // Récupérer les données de la liste à créé fournies par l'utilisateur
    console.log(req.body);

    const { title, position } = req.body;

    if (!title) {
      return res
        .status(400)
        .json({ error: "Missing body parameter: 'title'." });
    }

    if (position) {
      if (isNaN(position)) {
        return res
          .status(400)
          .json({ error: "Invalid type: 'position should be a number." });
      }
    }

    // Analyser les données du body pour vérifier que tout est en règle

    // Créer la nouvelle liste en BDD
    const newList = await List.create({
      title,
      position,
    });

    // Répondre au client avec les bonnes infos (cf. la spécification !)
    res.json(newList);

    // Try-catch
  } catch (error) {
    console.error(error);
    res.status(500).json("Unexpected server error. Please try again later.");
  }
}

export async function getListById(req, res) {
  try {
    const listId = req.params.id;
    const list = await List.findByPk(listId);

    if (!list) {
      return res
        .status(404)
        .json({ error: "List not found. Please verify the provided ID." });
    }

    res.json(list);
  } catch (error) {
    console.error(error);
    res.status(500).json("Unexpected server error. Please try again later.");
  }
}
