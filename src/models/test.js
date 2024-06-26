import { Card, List, Tag } from "./associations.js";
main();

async function main() {
  const findAll = await List.findAll({
    include: "card",
  });
}
