import { associations } from "./associations.js";
const { Card, List, Tag } = associations;
main();

async function main() {
  const findAll = await List.findAll({
    include: "card",
  });
}
