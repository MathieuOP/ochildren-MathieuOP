const data = [
  {
    name: 'space',
    cards: [
      {
        id: 1,
        pics: [
          {
            name: 'landscape',
            desc: '',
            image_url:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/edb33749110005.58ab71bf52e1c.png' 
          },
          {
            name: 'Les Observatoires',
            desc: 'Situés généralement en altitude, loin des sources de pollution lumineuse pour bénéficier d&#39;une meilleure transparence de l&#39;atmosphère. En astronomie, on désigne généralement par observatoire au sol les observatoires dont les télescopes et leurs instruments associés sont dédiés à l&#39;étude des astres. Il existe dans le monde une grande variété d&#39;observatoires astronomiques. Selon le domaine spectral, on ne trouvera pas du tout les mêmes collecteurs de lumière/particules, les mêmes instruments, ni les mêmes techniques d&#39;observations.',
            image_url:'https://image.flaticon.com/icons/svg/231/231142.svg' 
          },
          {
            name: 'La Fusée',
            desc: 'La première fut inventée en Chine au 13eme siécle. Ce fut d&#39;abord une arme, bien loins de notre vision spatial d&#39;aujourd&#39;hui. Ensuite, en 1893, le Russe Konstantin Tsiolkovski imagine le fonctionnement de la fusée spatiale. En 1957, la fusée Semyorka conçue par le Russe Serguey Korolev met en orbite le tout premier satellite Spoutnik 1.',
            image_url:'https://image.flaticon.com/icons/svg/639/639373.svg' 
          },
          {
            name: 'Le Radiotéléscopre',
            desc: 'Un radiotélescope est un télescope spécifique utilisé en radioastronomie pour capter les ondes radioélectriques émises par les astres. On les utilise aussi bien pour étudier le Soleil, que pour celles des régions de formation stellaires (les galaxies) ou des études du Cosmos',
            image_url:'https://image.flaticon.com/icons/svg/1137/1137463.svg' 
          }
        ]
      },

      {
        id: 2,
        pics: [
          {
            name: 'Galaxy_landscape',
            desc: '',
            image_url:'https://telesel.ch/wp/wp-content/uploads/2017/08/a7c4b20e9bf9c64ce9b455a5f2e371a9-space-stars-background.jpg' 
          },
          {
            name: 'Le Soleil',
            desc: 'Le soleil est une étoile de type naine jaune. C&#39;est donc une énorme boule de gaz dans laquelle se produit une fusion nucléaire. Le soleil possède un diamètre d&#39;environ 1 400 000 km. Il est 110 fois plus gros que la Terre! La température du centre du soleil est environ de 15 000 000°C. En revanche, à sa surface il fait un peu moins chaud. Sa temperature varie entre 8500°C et 4200°C',
            image_url:'https://www.flaticon.com/premium-icon/icons/svg/1146/1146310.svg' 
          },
          {
            name: 'Mercure',
            desc: 'Mercure est la plus petite planète du système solaire et la plus proche du Soleil, avec une période de révolution de 88 jours (c&#39;est la plus rapide du système solaire). Sa proximité avec le soleil rend son observation depuis la Terre difficile, il n&#39;est possible de l&#39;observer qu&#39;au lever ou au coucher du Soleil',
            image_url:'https://image.flaticon.com/icons/svg/1086/1086084.svg' 
          },
          {
            name: 'Venus',
            desc: 'Vénus est la deuxième planète la plus proche du Soleil, et la sixième plus grosse. Cette planète rocheuse, légèrement plus petite et moins massive que la Terre, est la plus chaude du système solaire. On appelle aussi Vénus l&#39;étoile du berger. Son nom lui vient de la déesse romaine Vénus',
            image_url:'https://image.flaticon.com/icons/svg/1266/1266586.svg' 
          },
          {
            name: 'La Terre',
            desc: 'Troisième planète du Système solaire et cinquième plus grosse, la Terre est la seule planète connue sur laquelle se trouve des êtres vivants. La révolution de la Terre autour du Soleil, dure 365 jours et 6 heures. La Terre accomplit une rotation sur elle-même en 23 heures et 56 minutes et 4,1 secondes (et non 24 heures). Mais, comme elle avance sur son orbite autour du Soleil de 1 degré par jour, elle a effectivement besoin de 24 heures pour rattraper son "retard". La Terre est parfois appelée Gaïa, en souvenir de la déesse grecque de la fertilité de la terre et du sol. Du fait de l’étendue des océans et mers, la Terre est souvent surnommée la planète bleue (couleur très visible depuis l’espace).',
            image_url:'https://image.flaticon.com/icons/svg/616/616450.svg' 
          },
          {
            name: 'La Lune',
            desc: 'La Lune est l\'unique satellite naturel de la Terre. Elle fait partie des objets de l\'Univers explorés par l\'Homme. Elle est visible depuis la Terre, car elle est éclairée par le Soleil. La Lune a quatre phases : nouvelle lune (pas de lune visible), premier quartier, pleine lune, et dernier quartier. Elle tourne autour de la Terre sur une trajectoire proche d\'un cercle appelée orbite. Elle met 27 jours 7 heures 43 minutes et 11,5 secondes pour faire le tour de la Terre.',
            image_url:'https://image.flaticon.com/icons/svg/1197/1197992.svg' 
          },
          {
            name: 'Le Satellite',
            desc: 'Un satellite artificiel est un objet fabriqué par l&#39;Homme, envoyé dans l&#39;espace à l&#39;aide d&#39;une fusée spatiale et tournant autour de la Terre. Le premier satellite artificiel, nommé Spoutnik 1, a été mis en orbite autour de la Terre par l&#39;URSS en 1957.',
            image_url:'https://image.flaticon.com/icons/svg/254/254009.svg' 
          },
          {
            name: 'Fusée',
            desc: '',
            image_url:'https://image.flaticon.com/icons/svg/639/639373.svg' 
          }
        ]
      },

      {
        id: 3,
        pics: [
          {
            name: 'Galaxy_landscape',
            desc: '',
            image_url:'https://telesel.ch/wp/wp-content/uploads/2017/08/a7c4b20e9bf9c64ce9b455a5f2e371a9-space-stars-background.jpg' 
          },
          {
            name: 'Saturne',
            desc: 'Saturne est la sixième planète tournant autour du Soleil. D&#39;un diamètre neuf fois supérieur à celui de la Terre, Saturne est très connue pour ses anneaux spectaculaires composés de morceaux de glace. C&#39;est la plus lointaine planète visible à l&#39;œil nu, et la dernière connue jusqu&#39;à ce qu&#39;Uranus soit découverte au xixe siècle. En anglais, Saturne a donné son nom à Saturday, ce qui signifie samedi, le sixième jour de la semaine. Il s&#39;agit d&#39;une planète gazeuse ; Saturne n&#39;a par conséquent pas de surface solide : un astronaute ne pourrait donc pas y marcher.',
            image_url:'https://image.flaticon.com/icons/svg/1751/1751904.svg' 
          },
          {
            name: 'Jupiter',
            desc: 'Jupiter est la 5e planète du système solaire, et la plus grande, avec un diamètre de 11 fois celui de la Terre et un volume 1 320 fois plus important. Sa masse n&#39;est en revanche "que" de 318 fois celle de la Terre, car c&#39;est une géante gazeuse.La planète est connue depuis la Préhistoire : elle est visible à l&#39;œil nu, comme une étoile très brillante, mais qui ne scintille pas : c&#39;est en effet l&#39;un des objets les plus lumineux du ciel nocturne (avec la Lune et Vénus). De près, cette planète est hostile : un grand nombre de tempêtes y font rage en ce moment même, tandis que ses diverses lunes gravitent autour d&#39;elle. Comme il s&#39;agit d&#39;une planète d’une géante gazeuse, elle ne possède pas de surface solide : il serait donc impossible de s&#39;y poser.',
            image_url:'https://image.flaticon.com/icons/svg/124/124558.svg' 
          },
          {
            name: 'Mars',
            desc: 'Située à environ 228 millions de kilomètres du Soleil, Mars est la quatrième planète du Système solaire et la deuxième plus petite, après Mercure. Sa couleur rouge est donnée par l&#39;abondance d&#39;oxyde de fer (rouille) sur sa surface. Il est facile de trouver Mars dans le ciel grâce à sa couleur, même à l&#39;œil nu. C&#39;est une planète tellurique, comme le sont Mercure, Vénus et la Terre, environ dix fois moins massive que la Terre mais dix fois plus massive que la Lune. Ses formations d&#39;origine tectonique et climatique telle que des volcans, des vallées, des mesas ou alors des champs de dunes. La gravité y est trois fois moindre que sur Terre, ce qui fait le poids des objets est divisé par trois.',
            image_url:'https://image.flaticon.com/icons/svg/124/124582.svg' 
          },
          {
            name: 'Fusée',
            desc: '',
            image_url:'https://image.flaticon.com/icons/svg/639/639373.svg' 
          },
          {
            name: 'Les Asteroides',
            desc: 'Un astéroïde est un corps céleste composé de roches et de métaux de taille variée qui se déplace dans l\'espace et qui tourne autour du Soleil (ou d\'une autre étoile), ce ne sont ni des planètes, ni des lunes. Leur tailles peuvent varier de moins d\'un centimètre à plusieurs centaines de kilomètres de diamètre. Le premier astéroïde a été découvert en 1801, il s\'agit de Cérès, désormais une planète naine.',
            image_url:'https://image.flaticon.com/icons/svg/433/433924.svg' 
          }
        ]
      },

      {
        id: 4,  
        pics: [
          {
            name: 'Galaxy_landscape',
            desc: '',
            image_url:'https://telesel.ch/wp/wp-content/uploads/2017/08/a7c4b20e9bf9c64ce9b455a5f2e371a9-space-stars-background.jpg' 
          },
          {
            name: 'Uranus',
            desc: 'Uranus est la septième planète du système solaire. C&#39;est une géante gazeuse, composée principalement d’hydrogène et d’hélium, tout comme les trois autres géantes gazeuses Jupiter, Saturne et Neptune. Son nom vient de l&#39;adaptation latine du nom Ouranos (grec Οὑρανός), le dieu du ciel, une des divinités primordiales de la mythologie grecque. Elle a été découverte par l&#39;astronome britannique William Herschel le 13 mars 1781. C&#39;est la première planète invisible à l&#39;œil nu qui a été découverte, la plus éloignée visible à l’œil nu étant Saturne. Uranus est aussi la première planète decouverte par téléscope.',
            image_url:'https://image.flaticon.com/icons/svg/124/124560.svg' 
          },
          {
            name: 'Neptune',
            desc: 'La plus éloignée depuis le déclassement de Pluton, Neptune est la 8e et dernière planète du système solaire et la plus lointaine des géantes gazeuses. Son nom vient du dieu romain des océans, Neptune (Poséidon dans la mythologie grecque) en raison de sa couleur bleu. Elle est formée d’hydrogène, d’hélium, avec des traces d’hydrocarbures et d’azote. C&#39;est le méthane qui lui donne sa couleur bleue. Légèrement plus petite qu&#39;Uranus, elle est plus massive (près de 103 000 milliards de milliards de tonnes contre 86 000 pour Uranus) car plus dense. C&#39;est la plus dense des quatre planètes géantes gazeuses (1,64).',
            image_url:'https://image.flaticon.com/icons/svg/1086/1086088.svg' 
          },
          {
            name: 'Pluton',
            desc: 'Pluton est une planète naine, découverte en 1930 par Clyde William Tombaugh, un astronome américain. Jusqu\'en 2006, elle fut considérée comme la neuvième planète du Système solaire. Pluton est principalement composée de roche et de glace de méthane, mais aussi de glace d&#39;eau et d&#39;azote gelé. Son diamètre est d&#39;environ les deux tiers de celui de la Lune. Son nom vient du dieu des Enfers.',
            image_url:'https://image.flaticon.com/icons/svg/1751/1751884.svg' 
          },
          {
            name: 'Fusée',
            desc: '',
            image_url:'https://image.flaticon.com/icons/svg/639/639373.svg' 
          },
          {
            name: 'Asteroide',
            desc: '',
            image_url:'https://image.flaticon.com/icons/svg/433/433924.svg' 
          },
          {
            name: 'Asteroide',
            desc: '',
            image_url:'https://image.flaticon.com/icons/svg/433/433924.svg' 
          },
          {
            name: 'Asteroide',
            desc: '',
            image_url:'https://image.flaticon.com/icons/svg/433/433924.svg' 
          }
        ]
      },
    ]
  },
  {
    name: 'science',
    cards: [
      { id: 1,
        pics: [
          { 
            name: 'laboratory_background',
            desc: '',
            image_url: 'https://cdn1.vectorstock.com/i/1000x1000/94/05/background-of-chemistry-laboratory-vector-7559405.jpg',
          
          }, 
          { 
            name: 'Professeur Al', 
            desc: 'Bonjour! je suis le professeur Al. Tu vas me suivre tout au long du parcours et je vais te décrire tout ce qui se trouve avec moi.',
            image_url: 'https://image.flaticon.com/icons/svg/843/843255.svg',
          },
          { 
            name: 'Microscope', 
            desc: 'Un microscope est un instrument qui permet d\'observer l\'infiniment petit, tels les microbes, grâce à un système de lentilles optiques. Dans les laboratoires pharmaceutiques et en recherche médicale, les microscopes sont beaucoup utilisés pour séparer des éléments avec précision, par exemple. Il sert aussi à voir ce que l’on ne peut pas voir a l’œil nu (ce qui est microscopique). ',
            image_url: 'https://image.flaticon.com/icons/svg/1198/1198650.svg',
          },
          { 
            name: 'Tubes et fioles à essai', 
            desc: 'Ils servent à contenir tout ce qui est liquide dans les laboratoires.',
            image_url: 'https://image.flaticon.com/icons/svg/1283/1283419.svg',
          } 
        ] 
      },

      { id: 2,
        pics: [ 
          { 
            name: 'microscope_background', 
            desc: '',
            image_url: 'https://image.flaticon.com/icons/svg/1754/1754707.svg',
          }, 
          { 
            name: 'Professeur Al', 
            desc: 'Grâce aux microscopes, on peut voir l\'infiniment petit. C\'est grâce à eux que l\'on peut etudier les bactéries, les virus, les atomes, les cellules d\'un corps et l\'ADN.',
            image_url: '',
          },
          { 
            name: 'Les Bactéries', 
            desc: 'Les bactéries (Eubacteria) sont des êtres vivants composés d\'une seule cellule (unicellulaires). Ce sont des micro-organismes (autrefois appelés microbes).Il en existe des bénéfiques pour l\'homme et d\'autres peuvent causer des maladies infectieuses (on dit qu\'elles sont pathogènes)',
            image_url: 'https://image.flaticon.com/icons/svg/1176/1176353.svg',
          }, 
          { 
            name: 'Les virus', 
            desc: 'Un virus est un parasite des cellules. Il ne peut pas vivre par lui-même, il a besoin d\'une cellule appelée hôte pour se reproduire. Un virus est environ entre 10 et 1000 fois plus petit qu\'une cellule. Le virus entre dans les cellules et les utilise pour fabriquer ses propres molécules. C\'est comme si un homme entrait dans une usine qui fabrique des voitures et ordonnait aux robots de se mettre à construire des brosses à dent pour son compte : c\'est un détournement des fonctions de l\'usine.',
            image_url: 'https://image.flaticon.com/icons/svg/1198/1198638.svg',
          },
          { 
            name: 'Les Atomes', 
            desc: 'Un atome est un minuscule morceau de matière, une sorte de « brique » qui la constitue. Un atome contient un noyau (ensemble de protons et de neutrons), et autour de ce noyau, il y a des électrons. On distingue ces particules du fait qu\elles comportent des "charges" différentes : les neutrons n\'ont aucune charge, les protons ont une charge positive, et les électrons une charge négative. Les différents atomes sont classifiés selon le nombre de protons et de neutrons dans le noyau. La matière (cet ordinateur, le corps humain, la Terre...) est formée d\'atomes ! Quelques atomes reliés dans un ordre précis constituent une molécule. La chimie est la discipline scientifique qui étudie comment les atomes s\'assemblent pour former ces molécules. Plusieurs molécules côte à côte vont donner la matière, et selon qu\'elles sont proches ou éloignées, ce sera un solide, un liquide ou un gaz.',
            image_url: 'https://image.flaticon.com/icons/svg/1198/1198627.svg',
          }
        ] 
      },
      { id: 3, 
        pics: [ 
          { 
            name: 'chemestry_background', 
            desc: '',
            image_url: 'https://image.flaticon.com/icons/svg/201/201607.svg', 
          }, 
          { 
            name: 'Professeur Al', 
            desc: 'lorem',
            image_url: 'https://image.flaticon.com/icons/svg/843/843255.svg', 
          },
          { 
            name: 'Les Médicaments', 
            desc: 'Un médicament est une substance, qu\'on absorbe pour guérir ou éviter une maladie. Le médicament est composé généralement d\'une molécule active (celle qui guérit) et d\'un excipient. L\'excipient sert à donner une forme, une couleur, un gout particulier, à faciliter la prise du médicament. Il peut servir à améliorer l\'efficacité de la molécule active.',
            image_url: 'https://image.flaticon.com/icons/svg/1546/1546140.svg', 
          }, 
          { 
            name: 'Le tableau Périodique', 
            desc: 'Le tableau périodique des éléments regroupe tous les éléments chimiques connus qui constituent l\'Univers : les atomes. Il en manque peut-être dans l\'état actuel des connaissances. Ils sont classés en colonnes et en lignes. Dans une même colonne, se trouvent des atomes qui ont des propriétés similaires. Il existe des phrases pour retenir les premières périodes : Hé HÉ (Hydrogène, HÉlium) LIeBE, le Bateau CARéné, Noé et Olivia Filerons Nord - Est (Lithium, Béryllium, CARbone, azote[N], Oxygène, Fluor, Néon). Napoléon Mangea Allègrement Six Poulets Sans Claquer ARGent (sodium [Na], Magnésium, Aluminium, Silicium, Phosphore, Soufre, Chlore, ARGon).',
            image_url: 'https://image.flaticon.com/icons/svg/1592/1592975.svg', 
          },
          { 
            name: 'Les vaccins', 
            desc: 'Un vaccin est un produit médical qu\'on introduit dans le corps pour le protéger à l\'avance d\'une maladie. Il n\'existe pas de vaccin universel. Chaque vaccin correspond à une maladie précise. Il s\'agit en effet d\'une forme atténuée de la bactérie ou du virus responsable de cette maladie. Selon les cas, le vaccin s\'avale (anti-poliomyélite), est inoculé par piqûre (anti-dyphtérique) ou par une petite coupure sur la peau (anti-variolique). Sans rendre malade, le vaccin provoque dans l\'organisme (une réaction) la fabrication d\'anticorps qui aideront par la suite à combattre la maladie. On appelle cette protection l\'immunité.',
            image_url: 'https://image.flaticon.com/icons/svg/1529/1529532.svg', 
          }  
        ] 
      },
    ]
  },
  {
    name: 'nature',
    cards: [
      { 
        id: 1, 
        pics: [ 
          { 
            name: 'tropical_landscape', 
            desc: '',
            image_url: 'https://i0.wp.com/static.vecteezy.com/system/resources/previews/000/206/763/original/awesome-tropical-landscape-player-vectors.jpg',
          }, 
          { name: 'Le soleil', 
            desc: 'Hello je suis le soleil!',
            image_url: 'https://image.flaticon.com/icons/svg/1164/1164954.svg',
          },
          { 
            name: 'le colibri', 
            desc: 'Le colibri est l\'oiseau le plus petit du monde. On le surnomme "oiseau mouche" à cause de sa petite taille. Il vit du nord jusqu’au sud de l\'Amérique.',
            image_url: 'https://image.flaticon.com/icons/svg/789/789392.svg',
          }, 
          { name: 'La Tortue', 
            desc: 'Il existe plusieurs espèces de tortues. Certaines sont marines ou aquatiques, d\'autres terrestres ou amphibies. On dit que les tortues sont très lentes : en effet, leur carapace et la forme de leurs pattes les ralentissent. Les tortues peuvent pondre une centaine d\'œufs.Les tortues n\'ont pas de dents mais un bec. Elles peuvent mourir étouffées si elles sont retournées sur la carapace, qui leur sert de bouclier protecteur et pour maintenir une partie de leur chaleur interne. Elles peuvent vivre une cinquantaine d\'années. Ce sont des animaux à sang froid qui s\'exposent au soleil pour augmenter leur température interne. Certaines hibernent en hiver.',
            image_url: 'https://image.flaticon.com/icons/svg/852/852075.svg',
          },
          { 
            name: 'Le Dauphin', 
            desc: 'Les dauphins sont des mammifères marins et fluviaux. Les dauphins appartiennent à plusieurs espèces, qui font partie de l\'ordre des cétacés et ne doivent pas être confondus avec les poissons. L\'espèce la plus connue de dauphin est le dauphin commun à bec court et le grand dauphin. Ce mammifère se caractérise par sa grande intelligence.Il est capable de se reconnaître dans un miroir comme l\'homme, comme certains singes et éléphants. Il est aussi capable de faire usage d\'outils. Les dauphins ne font dormir qu\'une partie de leur cerveau',
            image_url: 'https://image.flaticon.com/icons/svg/427/427544.svg',
          }, 
          { name: 'Le singe', 
            desc: 'Les singes sont un groupe de mammifères appartenant à l\'ordre des primates. Comme tous les primates, les singes ont des mains à cinq doigts (et souvent des pieds aussi) avec un pouce opposable, qui leur permet de s\'accrocher aux branches. Ils ont aussi des ongles au lieu des griffes. Contrairement aux autres primates, les singes ont un nez plutôt qu\'une truffe, une mâchoire plus courte et des yeux placés sur le devant de la tête : ils ont donc un visage plutôt qu\'un museau.Il existe 285 espèces de singes vivant dans le monde. ',
            image_url: 'https://image.flaticon.com/icons/svg/852/852071.svg',
          },
          { 
            name: 'Le peroquet', 
            desc: 'Les perroquets sont des oiseaux ; il en existe 350 espèces différentes, connues sous des noms variés, tels que ara, perruche, cacatoès... Ce sont des oiseaux souvent très colorés. Ils ont un gros bec crochu, qui leur sert à manger des graines, des fruits, et des noix. Certains perroquets sont également capables d\'imiter la voix humaine, et de répéter des mots, ou des sons. Certains, comme le gris du Gabon, parlent même très bien. Les perroquets ont la langue noire. Ils ont deux pattes qui sont terminées par des griffes. Les perroquets vivent dans les régions tropicales, principalement en Amérique, Afrique et Océanie.',
            image_url: 'https://image.flaticon.com/icons/svg/688/688300.svg',
          },
        ] 
      },
      { id: 2, 
        pics: [ 
          { 
            name: 'jungle_landscape', 
            desc: '',
            image_url: 'https://storybookstorage.s3.amazonaws.com/items/images/000/705/776/original/20170122-7-1tpunb3.jpg',
          }, 
          { 
            name: 'Le Tigre', 
            desc: 'C\'est le roi de la jungle! Il est carnivore et mesure de 2 à 3m tandis que sa queue peut mesurer de 60 cm à 1 m. Il mesure entre 80 cm et 1.20 m au garrot. Parmi les félins, le tigre est le plus grand de la planète. Le tigre de Sibérie est le plus grand, le tigre du Bengale est de taille intermédiaire et le tigre de Sumatra est le plus petit. n trouve le tigre en Inde et en Asie du Sud-Est.',
            image_url: 'https://image.flaticon.com/icons/svg/616/616523.svg', 
          },
          { 
            name: 'Le Toucan', 
            desc: 'Le toucan est un oiseau d\'Amérique centrale et du Sud, ressemblant au calao. Il est multicolore et il a un grand bec. Il en existe plusieurs espèces, dont le toucan toco.',
            image_url: 'https://image.flaticon.com/icons/svg/375/375082.svg',
          }, 
          { 
            name: 'La Panthère Noire', 
            desc: 'La panthère noire est un mammifère carnassier (qui se nourrit de viande crue) d\'Afrique et d\'Asie. Il s\'agit en fait d\'un léopard au pelage sombre (mélanisme). Elle fait partie des félins. La panthère est tout le contraire de son cousin le guépard qui se laisse apprivoiser facilement. Elle préfère être solitaire et ne vit pas en groupe.',
            image_url: 'https://image.flaticon.com/icons/svg/371/371654.svg', 
          },
          { 
            name: 'Les Libellule', 
            desc: 'On les trouve fréquemment près des zones d\'eau douce notamment les mares. Les libellules ont un corps allongé, en forme de bâton. Elles ont quatre grandes ailes, membraneuses. Les libellules ne peuvent pas replier complètement les ailes sur leur dos, comme la plupart des autres insectes. Quand elles sont posées, elles gardent les ailes grandes ouvertes, ce qui les rend très reconnaissables et leur permet également de très vite s\'échapper jusqu\'à 90 km/h (c\'est l’insecte le plus rapide). Elles mesurent quelques centimètres de long de 4 à 5 centimètres.',
            image_url: 'https://image.flaticon.com/icons/svg/235/235423.svg',
          }, 
          { 
            name: 'Le Singe', 
            desc: 'Hello je suis un singe! En Anglais, on m\'appel aussi Monkey ou Ape',
            image_url: '', 
          },
          { 
            name: 'Le Papillon', 
            desc: 'Le papillon est d\'abord une chenille. C\'est une fois que la chenille a bien mangé, qu\'elle s\'entoure d\'un cocon fait de fil de soie, pour devenir un papillon. Avant de devenir un papillon, la chenille peut rester de 15 jours à 2 ans à l\'interieur du cocon',
            image_url: 'https://image.flaticon.com/icons/svg/235/235423.svg', 
          },
        ] 
      },
    ]
  }
];

export default data;


export const selectId = ({ name, id }) => data.find(elem => elem.name === name).cards.find(eId => eId.id === id);
