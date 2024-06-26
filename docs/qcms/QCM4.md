# QCM4

`GET`, `POST`, `PUT`, `PATCH`... c'est quoi ? 
- le chemin (path) de la requête HTTP
- le verbe (method) de la requête HTTP
- l'hôte (host) de la requête HTTP


Je suis Bob de l'équipe Frontend, et notre code client appelle l'API d'Alice, qui me retourne une `401`:
- c'est probablement la faute de l'équipe Frontend !
- c'est probablement la faute de l'équipe Backend !
- c'est probablement la faute des reptiliens


Sur mon API REST, pour mettre à jour la `date de naissance` d'un `étudiant`, j'aurais tendance à utiliser la route :
- `GET /students/42 | query-body { birthdate: 1970-01-01 }`
- `PATCH /students/42 | query-body { birthdate: 1970-01-01 }`
- `PATCH /students/42/updateBirthDate/1970-01-01`
