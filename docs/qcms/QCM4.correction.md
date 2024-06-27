# QCM4

`GET`, `POST`, `PUT`, `PATCH`... c'est quoi ? 
- ❌ le chemin (path) de la requête HTTP ==> quelle ressource on vise
- ✅ le verbe (method) de la requête HTTP ==> quelle action sur la ressource
- ❌ l'hôte (host) de la requête HTTP  ==> où l'application est héberger (`localhost` / `oclock.io` / ...)


- `GET` = obtenir une ressource
- `POST` = créer une ressource
- `PATCH` = modifier une ressource
- `PUT` = remplacer une ressource
- `DELETE` = supprimer une ressource

Note vis à vis des formulaires HTML `<form>` : 
- ils ne suppportent que les verbes `GET` et `POST`
  - c'est pour ça que dans la saison oquiz, pour supprimer un Level : `GET /levels/:id/delete` --> on a triché
    - REST, ce ne sont que des conventions ! Finalement on peut faire ce qu'on veut (mal !)
  - avec `fetch` on pourra tout faire ! 



Je suis Bob de l'équipe Frontend, et notre code client appelle l'API d'Alice, qui me retourne une `401`:
- ✅ c'est probablement la faute de l'équipe Frontend !
- ❌ c'est probablement la faute de l'équipe Backend !
- ❌ c'est probablement la faute des reptiliens

`4XX` = erreurs client = le client qui fait une bétise
- `400` : le client appelle une route sans donner toutes les infos attendues dans le body
- `404` : l'utilisateur essaie d'appeler une route qui n'existe : `GET /toto`
- `401` : l'utilisateur ne s'est pas authentifié 

`5XX` = erreurs serveur = le serveur qui fait une bétise
- `500` : ex, la BDD plante. ex, le code a une erreur (à corriger par les devs back !), 



Sur mon API REST, pour mettre à jour la `date de naissance` d'un `étudiant`, j'aurais tendance à utiliser/créer quelle route :
- ❌ `GET /students/42 | query-body { birthdate: 1970-01-01 }`
- ✅ `PATCH /students/42 | query-body { birthdate: 1970-01-01 }`
- ❌ `PATCH /students/42/updateBirthDate/1970-01-01` ==> peu conventionnel

En général, avec REST, pour les POST, PUT, PATCH, 
- on vise la ressource via l'**URL** (chemin)
- on fourni les informations de l'update dans le **BODY** de la requête
