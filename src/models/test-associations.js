import { Card, List, Tag } from "./associations.js";

// == List ==
const list = await List.findOne({ include: "cards" });
console.log(list.toJSON());

// == Card ==
const card = await Card.findOne({ include: ["list", "tags"] });
console.log(card.toJSON());

// == Tag ==
const tag = await Tag.findOne({ include: "cards" });
console.log(tag.toJSON());