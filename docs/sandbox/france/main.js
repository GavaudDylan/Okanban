const httpResponse = await fetch("https://geo.api.gouv.fr/regions"); // Promise<HttpResponse> // Note : Top-level await permis par type="module"
const regions = await httpResponse.json(); // Promise<[{}, {}, {}]>

regions.forEach(region => {
  // console.log(region); // region = { nom, code }

  // Créer un élément LI
  const regionLi = document.createElement("li");

  // Lui mettre le texte contenant le nom de la région
  regionLi.textContent = region.nom;

  // Ajouter le cursor pointer
  regionLi.style.cursor = "pointer";

  // Récupérer le UL 
  const regionsUl = document.querySelector("#regions");

  // Insérer la nouvelle région dans le UL
  regionsUl.appendChild(regionLi);

  // On ajoute un listener sur le <li>
  regionLi.addEventListener("click", async () => {
    // console.log(region.code);

    // On veut récupérer les départements de la région en connaissant son code
    const httpResponse = await fetch(`https://geo.api.gouv.fr/regions/${region.code}/departements`); // On est dans une fonction, donc pas top)level
    const departements = await httpResponse.json();

    // Avant d'insérer les nouveaux départements, on propose de supprimer le contenu du UL departement
    document.querySelector("#departements").innerHTML = "";
    
    // Pour chaque département
    departements.forEach(departement => {
      // console.log(departement); // departement = { nom, code, codeRegion }
      
      // Créer un LI
      const departementLi = document.createElement("li");

      // Changer le texte du LI
      departementLi.textContent = departement.nom;

      // Selectionner le UL pour les départements
      const departementUl = document.querySelector("#departements");

      // Insérer le LI dans le UL
      departementUl.appendChild(departementLi);
    })
  })
});
