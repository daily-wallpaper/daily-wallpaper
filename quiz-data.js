// ============ QUESTIONS DU QUIZ ============
// Une question = un bloc { ... }. Pour en ajouter : copie un bloc, colle-le, change les textes.
// IMPORTANT : la 1re réponse de la liste "reponses" est TOUJOURS la bonne.
// Le site mélange les réponses automatiquement, le joueur ne voit pas l'ordre d'origine.
// "explication" est facultatif (laisse "" pour ne rien afficher).
// "visible: false" cache une question sans la supprimer.

const quizQuestions = [
  {
    question: "Dans la série The Legend of Zelda, comment s'appelle le héros que l'on incarne ?",
    reponses: ["Link", "Zelda", "Ganon", "Epona"],
    explication: "Link est le héros. Zelda est la princesse qu'il cherche à sauver.",
    visible: true
  },
  {
    question: "Quel héros de la mythologie grecque a vaincu Méduse ?",
    reponses: ["Persée", "Achille", "Héraclès", "Thésée"],
    explication: "Persée a décapité Méduse, et de son sang est né le cheval ailé Pégase.",
    visible: true
  },
  {
    question: "Au début du Moyen Âge, de quoi étaient souvent faits les premiers châteaux forts ?",
    reponses: ["De bois", "De marbre", "De briques", "De béton"],
    explication: "Beaucoup de premiers châteaux étaient en bois, sur une butte de terre. La pierre est venue ensuite.",
    visible: true
  },
  {
    question: "Quelle définition d'écran correspond à la 4K grand public (UHD) ?",
    reponses: ["3840 × 2160", "1920 × 1080", "1280 × 720", "2560 × 1440"],
    explication: "La 4K UHD compte 3840 × 2160 pixels, soit 4 fois plus que la Full HD (1920 × 1080).",
    visible: true
  },
  {
    question: "Dans la mythologie grecque, quel dieu règne sur la mer ?",
    reponses: ["Poséidon", "Zeus", "Hadès", "Arès"],
    explication: "Poséidon, frère de Zeus et d'Hadès, est le dieu de la mer. Son symbole est le trident.",
    visible: true
  }
];
