export const world = [
  {
    "id": 5,
    "name": "3-6 ans",
    "description": "Activités pour les 3 à 6 ans",
    "image": "bear.svg",
    "slug": "3-6-ans",
  },
  {
    "id": 6,
    "name": "7-10 ans",
    "description": "Activités pour les 7 à 10 ans",
    "image": "lego.svg",
    "slug": "7-10-ans",
  },
];

export const selectCategoryFromSlug = (slug) => {
  const uniqueCategory = world.find(category => category.slug === slug);
  return uniqueCategory;
};

export const datas = [
  {
    question: 'Combien de planètes il y a t-il dans le système solaire ?',
    response: 8,
  },
  {
    question: 'Combien de temps met la Terre pour faire un tour sur elle même ?',
    response: '24 heures',
  },
  {
    question: 'Quelle planètes n\'est pas une géante gazeuse ?',
    response: 'Mars',
  },
  {
    question: 'La Terre est composée d \'un noyau et d\'une croûte terrestre. Trouvez parmis les réponses ce qui lui manque.',
    response: 'Un manteau',
  },
  {
    question: 'Est-ce que la Terre orbite (tourne) autours du Soleil ?',
    response: 'Oui',
  },
];



