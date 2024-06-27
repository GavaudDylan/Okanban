import Joi from "joi";

export async function createCard(req, res) {
  console.log(req.body);

  // Valider le body
  const schema = Joi.object({
    content: Joi.string().required(), // require = le champ "content" est obligatoire
    position: Joi.number().integer().min(1),
    color: Joi.string().pattern(new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$")).message("color property should a valid hexadecimal code starting with #"),
    list_id: Joi.number().integer().min(1)
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message }); // Renvoyer le message d'erreur de Joi
  }

  // Récupérer la list_id

  // Vérifier si la liste (dans laquelle on va insérer notre nouvelle carte) existe

  // Créer la nouvelle carte

  // Répondre avec la nouvelle carte et un status 201
  res.send("OK");
}
