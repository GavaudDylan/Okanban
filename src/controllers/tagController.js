import Joi from "joi";
import { Tag } from "../models/index.js";

export async function getAllTags(req, res) {
  console.log(req.body);

  const tags = await Tag.findAll();

  res.json(tags);
}

export async function createTag(req, res) {
  console.log(req.body);
  const { name, color } = req.body;

  const schema = Joi.object({
    name: Joi.string().required(),
    color: Joi.string()
      .pattern(new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$"))
      .message(
        "color property should a valid hexadecimal code starting with #"
      ),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const createTag = await Tag.create({
    name: name,
    color: color,
  });

  res.status(201).json(createTag);
}
