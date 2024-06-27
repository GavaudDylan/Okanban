import Joi from "joi";
import { Card } from "../models/index.js";
import { List } from "../models/index.js";

export async function getAllCards(req, res) {
  console.log(req.body);

  const cards = await Card
    .findAll
    // Avec ces includes, on renvoie toute la BDD => mauvaise pratique car bcp de data sur le réseau. Avantage : faciliter notre travail en frontend plus tard
    ();
  res.json(cards);
}

export async function createCard(req, res) {
  console.log(req.body);
  const { content, position, color, list_id } = req.body;

  // Valider le body
  const schema = Joi.object({
    content: Joi.string().required(), // require = le champ "content" est obligatoire
    position: Joi.number().integer().min(1),
    color: Joi.string()
      .pattern(new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$"))
      .message(
        "color property should a valid hexadecimal code starting with #"
      ),
    list_id: Joi.number().integer().min(1),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message }); // Renvoyer le message d'erreur de Joi
  }

  // Récupérer la list_id
  const listId = req.body.list_id;
  const list = await List.findByPk(listId);

  // Vérifier si la liste (dans laquelle on va insérer notre nouvelle carte) existe
  if (isNaN(listId)) {
    return res
      .status(404)
      .json({ error: "List not found. Please verify the provided ID." });
  }

  if (!list) {
    return res.status(404).json({
      error:
        "List not HostNotFoundError. Please verify the provided IDBCursor.",
    });
  }

  // Créer la nouvelle carte
  const createdCard = await Card.create({
    content: content,
    position: position,
    color: color,
    list_id: list_id,
  });

  // Répondre avec la nouvelle carte et un status 201
  res.status(201).json(createdCard);
}

export async function getOneCard(req, res) {
  console.log(req.body);

  const cardId = parseInt(req.params.id);

  if (isNaN(cardId)) {
    return res
      .status(404)
      .json({ error: "Card not found. Please verify the provided ID." });
  }

  const card = await Card.findByPk(cardId);

  if (!card) {
    return res
      .status(404)
      .json({ error: "Card not found. Please verify the provided ID." });
  }
  res.json(card);
}

export async function updateCard(req, res) {
  console.log(req.body);

  const shema = Joi.object({
    content: Joi.string().required(),
    position: Joi.number().integer().min(1),
    color: Joi.string()
      .pattern(new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$"))
      .message(
        "color property should a valid hexadecimal code starting with #"
      ),
    list_id: Joi.number().integer().min(1),
  }).min(1);

  const { error } = shema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const cardId = parseInt(req.params.id);

  if (isNaN(cardId)) {
    return res.status(404).json({
      error: "Card not found. Please verify the provided ID.",
    });
  }

  const card = await Card.findByPk(cardId);

  if (!card) {
    return res.status(404).json({
      error: "Card not found. Please verify the provided ID.",
    });
  }

  if (req.body.content) {
    card.content = req.body.content;
  }
  if (req.body.position) {
    card.position = req.body.position;
  }
  if (req.body.color) {
    card.color = req.body.color;
  }
  if (req.body.list_id) {
    card.list_id = req.body.list_id;
  }
  await card.save();

  res.json(card);
}

export async function deleteCard(req, res) {
  const cardId = parseInt(req.params.id);

  if (isNaN(cardId)) {
    return res
      .status(404)
      .json({ error: "Card not found. Please verify the provided ID." });
  }

  const card = await Card.findByPk(cardId);

  if (!card) {
    return res
      .status(404)
      .json({ error: "Card not found. Please verify the provided ID" });
  }
  await card.destroy();

  res.status(204).end();
}
