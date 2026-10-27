// ============ DONNÉES DES COLLECTIONS ============
// Chaque collection a : un titre, une description, une image, et "visible" (true = affichée, false = cachée).
// Pour ajouter une collection : copie un bloc { ... }, colle-le, et change les valeurs.
// Pour cacher une collection sans la supprimer : mets juste "visible: false".

const collections = [
  {
    id: "cyperpunk",
    titre: "Cyberpunk & Science-Fiction",
    description: "Plongez dans un univers futuriste saturé de néons et de hautes technologies.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
    visible: true
  },
  {
    id: "mythologie",
    titre: "Mythologie & Légendes",
    description: "Plongez au cœur des mythes anciens et des récits épiques.",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600",
    visible: true
  },
  {
    id: "avions",
    titre: "Avions & Armées",
    description: "Découvrez une sélection de fonds d'écran dédiés à l'aviation militaire.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600",
    visible: true
  },
  {
   id: "abstrait",
   titre: "Art Abstrait & 3D",
    description: "Des formes vibrantes et des couleurs néon pour faire ressortir votre écran OLED.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600",
    visible: true
  },
    {
    id: "espace",
    titre: "Espace & Galaxie",
    description: "Des étoiles lointaines et des nébuleuses pour une profondeur infinie.",
    image: "images/wallpapers/espace/space-1.jpg",
    visible: true
  },
  {
    id: "voyages",
    titre: "Voyages & merveilles",
    description: "Des villes fascinantes aux paysages grandioses, découvrez les plus beaux endroits de notre planète.",
    image: "images/wallpapers/espace/moscou.jpeg",
    visible: true
  },

  {
    id: "minimalisme",
    titre: "Minimalisme",
    description: "Clean, sombre et élégant pour un écran d'accueil aéré.",
    image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?w=600",
    visible: true
  }
];
