// Va chercher un fichier de données créé dans Pages CMS
async function chargerDonnees(nom) {
  const reponse = await fetch("data/" + nom + ".json");
  return reponse.json();
}

// THÈME DE LA SEMAINE
async function afficherTheme() {
  const d = await chargerDonnees("theme");

  const titre = document.getElementById("theme-titre");
  const description = document.getElementById("theme-description");
  const image = document.getElementById("theme-image");

  if (titre) titre.textContent = d.theme;
  if (description) description.textContent = d.description;
  if (image && d.image) image.src = d.image;
}

afficherTheme();