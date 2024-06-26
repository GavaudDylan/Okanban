import { Card } from "./Card.js";
import { List } from "./List.js";
import { Tag } from "./Tag.js";

List.hasMany(Card, {
  foreignKey: "list_id",
  as: "cards",
});

Card.belongsTo(List, {
  foreignKey: "list_id",
  as: "list",
});

Card.belongsToMany(Tag, {
  through: "card_has_tag",
  foreignKey: "card_id",
  otherKey: "tag_id",
  as: "tags",
});

Tag.belongsToMany(Card, {
  through: "card_has_tag",
  foreignKey: "tag_id",
  otherKey: "card_id",
  as: "tags",
});

export const associations = { Card, List, Tag };
