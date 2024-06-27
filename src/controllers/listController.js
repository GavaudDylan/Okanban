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
  try {
    
    // Récupérer les données de la liste à créé fournies par l'utilisateur
    // console.log(req.body);
    const { title, position } = req.body;
  
    // Analyser les données du body pour vérifier que tout est en règle
  
    // - Vérifier que le title (obligatoire !) est présent et est une string
    if (! title || typeof title !== "string") {
      res.status(400).json({ error: "Property 'title' should be a non empty string." });
      return; // On oublie pas le return pour arrêter le reste de la fonction
    }
  
    // - Si le client nous fourni la "position", vérifier que cette position est un nombre entier supérieur ou égal à 1
    if ((position !== undefined) && ! iStrictlyPositiveInteger(position)) {
      return res.status(400).json({ error: "Property 'position' should be a positive integer when provided." });
    }
  
    // Créer la nouvelle liste en BDD
    const createdList = await List.create({
      title: title,
      position: position // si position est "undefined", notre ORM Sequelize mettra la valeur par défaut, ie 1
    });
  
    // Répondre au client avec les bonnes infos (cf. la spécification !)
    res.status(201).json(createdList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unexpected server error. Please try again later." });
  }
}


function iStrictlyPositiveInteger(value) {
  if (typeof value !== "number") { return false; }
  if (!Number.isInteger(value)) { return false; }
  if (value <= 0) { return false; }
  return true;
}