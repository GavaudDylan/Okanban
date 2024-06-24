INSERT INTO "list" ("title", "position") VALUES
('Liste 1', 1), ('Liste 2', 2);


INSERT INTO "card" ("content", "position", "color", "list_id") VALUES
('Carte 1', 1, 'rouge', 1), ('Carte 2', 2, 'bleu', 1);


INSERT INTO "label" ("name", "color") VALUES
('Étiquette 1', 'vert'), ('Étiquette 2', 'jaune');


INSERT INTO "card_has_label" ("name", "color", "card_id", "label_id") VALUES
('Nom 1', 'noir', 1, 1), ('Nom 2', 'blanc', 2, 2);