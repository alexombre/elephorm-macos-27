export type Lesson = {
  slug: string
  title: string
  duration: string
  description: string
  goal: string
  projectStep: string
}

export type Chapter = {
  id: number
  title: string
  duration: string
  objective: string
  lessons: Lesson[]
}

export const course = {
  title: "Maîtriser la bureautique avec macOS 27 Golden Gate",
  eyebrow: "FORMATION",
  updatedAt: "22/09/2026",
  duration: "4 h 20 min",
  lessonCount: 38,
  chapterCount: 9,
  level: "Débutant à intermédiaire",
  promise:
    "Organisez, sécurisez et exploitez votre Mac au quotidien, puis accélérez votre travail avec Spotlight, Siri AI et les apps Apple.",
  outcomes: [
    "Mettre à niveau son Mac en protégeant ses données et ses réglages essentiels.",
    "Organiser, retrouver, synchroniser et partager ses fichiers avec le Finder et iCloud.",
    "Travailler plus vite avec les fenêtres, Spotlight et les raccourcis essentiels.",
    "Utiliser Siri AI et l’Intelligence visuelle dans des situations professionnelles.",
    "Organiser une veille dans Safari et créer une extension simple en langage naturel.",
    "Transformer ses e-mails en rendez-vous, rappels et automatisations contrôlées.",
    "Sécuriser ses comptes, ses autorisations et les données d’un projet client.",
  ],
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Préparer et personnaliser macOS 27",
    duration: "26 min",
    objective: "Réussir la mise à niveau et obtenir rapidement un environnement lisible.",
    lessons: [
      {
        slug: "preparer-mac-mise-a-niveau-macos-27",
        title: "Préparer son Mac avant la mise à niveau vers macOS 27",
        duration: "08:00",
        description:
          "Vérifiez le modèle et la puce du Mac, l’espace disponible, la compatibilité des apps importantes et l’état de la sauvegarde. Repérez ensuite le lancement de la mise à jour et les contrôles utiles après le redémarrage.",
        goal: "Valider une checklist de mise à niveau sans exposer ses données.",
        projectStep: "Créer la checklist « Mac prêt pour le projet ».",
      },
      {
        slug: "reperes-bureau-dock-barre-menus",
        title: "Prendre ses repères dans le Bureau, le Dock et la barre des menus",
        duration: "06:00",
        description:
          "Identifiez les zones de l’interface, ouvrez et quittez une app, épinglez les outils utiles dans le Dock et accédez rapidement aux réglages principaux.",
        goal: "Construire un environnement familier, y compris après une migration depuis Windows.",
        projectStep: "Installer Finder, Safari, Mail, Notes et Calendrier dans le Dock.",
      },
      {
        slug: "regler-liquid-glass-lisibilite",
        title: "Régler Liquid Glass pour préserver la lisibilité",
        duration: "06:00",
        description:
          "Comparez transparence et contraste sur plusieurs fenêtres, puis adaptez l’apparence, la taille du texte et les réglages d’accessibilité utiles.",
        goal: "Obtenir une interface agréable sans sacrifier la lisibilité.",
        projectStep: "Préparer un affichage confortable pour consulter le brief client.",
      },
      {
        slug: "tableau-bord-widgets-centre-controle",
        title: "Construire un tableau de bord avec le Centre de contrôle et les widgets",
        duration: "06:00",
        description:
          "Personnalisez les commandes rapides, ajoutez les widgets Calendrier et Rappels, organisez le Bureau et limitez les notifications inutiles.",
        goal: "Afficher uniquement les informations nécessaires à une journée de travail.",
        projectStep: "Faire apparaître l’échéance et les prochaines actions du projet Horizon.",
      },
    ],
  },
  {
    id: 2,
    title: "Organiser et partager ses fichiers avec le Finder",
    duration: "34 min",
    objective: "Construire une organisation fiable et retrouver rapidement ses documents.",
    lessons: [
      {
        slug: "creer-espace-projet-finder",
        title: "Créer l’espace de travail Projet Horizon dans le Finder",
        duration: "07:00",
        description:
          "Parcourez les vues du Finder, affichez les informations utiles, personnalisez la barre latérale et créez une arborescence simple pour le brief, la recherche, la production et la livraison.",
        goal: "Mettre en place une structure réutilisable pour tout nouveau dossier client.",
        projectStep: "Centraliser les fichiers fournis dans quatre dossiers clairement nommés.",
      },
      {
        slug: "classer-tags-favoris-noms",
        title: "Classer les documents avec les tags, favoris et noms cohérents",
        duration: "06:00",
        description:
          "Renommez plusieurs fichiers selon une convention, déplacez-les sans les dupliquer, attribuez des tags de statut et ajoutez le projet aux favoris.",
        goal: "Éviter les doublons et rendre l’état d’un document immédiatement visible.",
        projectStep: "Distinguer les éléments « À analyser », « Validés » et « À livrer ».",
      },
      {
        slug: "annoter-signer-pdf-apercu",
        title: "Lire, annoter et signer un PDF avec Coup d’œil et Aperçu",
        duration: "08:00",
        description:
          "Prévisualisez le brief, surlignez une échéance, ajoutez une note, réorganisez une page et insérez une signature fictive avant d’exporter une copie.",
        goal: "Annoter un document sans écraser le fichier original.",
        projectStep: "Produire le fichier « Brief_Horizon_annote.pdf ».",
      },
      {
        slug: "rechercher-fichier-filtres-finder",
        title: "Retrouver un fichier avec les filtres du Finder",
        duration: "07:00",
        description:
          "Recherchez par nom, type, date et tag, combinez plusieurs critères et vérifiez le chemin du fichier avant toute modification.",
        goal: "Construire une recherche précise et reproductible.",
        projectStep: "Afficher uniquement les documents récents marqués « À analyser ».",
      },
      {
        slug: "partager-airdrop-icloud-lien",
        title: "Partager un document avec AirDrop, iCloud Drive ou un lien",
        duration: "06:00",
        description:
          "Comparez partage ponctuel et collaboration durable, générez un lien et contrôlez les droits de lecture ou de modification.",
        goal: "Choisir le bon mode de partage et limiter son périmètre.",
        projectStep: "Partager le brief annoté sans exposer le reste du dossier.",
      },
    ],
  },
  {
    id: 3,
    title: "Travailler plus vite avec les fenêtres et Spotlight",
    duration: "28 min",
    objective: "Réduire les manipulations répétitives et retrouver rapidement une information.",
    lessons: [
      {
        slug: "organiser-fenetres-mission-control",
        title: "Organiser ses fenêtres pour comparer plusieurs sources",
        duration: "07:00",
        description:
          "Placez le PDF, Safari et Notes côte à côte, redimensionnez les zones, utilisez Mission Control et créez un espace de travail séparé.",
        goal: "Comparer plusieurs sources sans perdre le fil de la tâche.",
        projectStep: "Préparer l’écran pour analyser le brief Horizon.",
      },
      {
        slug: "retrouver-information-spotlight",
        title: "Retrouver une information avec Spotlight",
        duration: "07:00",
        description:
          "Lancez une recherche au clavier, filtrez les résultats, prévisualisez un document et retrouvez une phrase présente dans un fichier ou un e-mail.",
        goal: "Distinguer résultat local, contenu d’app et suggestion web.",
        projectStep: "Retrouver la date de lancement sans parcourir manuellement les dossiers.",
      },
      {
        slug: "actions-spotlight-presse-papiers",
        title: "Agir depuis Spotlight et réutiliser le presse-papiers",
        duration: "07:00",
        description:
          "Ouvrez un fichier à son emplacement, lancez une action disponible et récupérez un élément récent du presse-papiers avant de le vérifier.",
        goal: "Enchaîner recherche et action sans ouvrir inutilement plusieurs apps.",
        projectStep: "Ajouter la date et le contact client à la note de synthèse.",
      },
      {
        slug: "raccourcis-clavier-dictee",
        title: "Gagner du temps avec les raccourcis clavier et la dictée",
        duration: "07:00",
        description:
          "Utilisez les raccourcis essentiels pour ouvrir, basculer, copier et rechercher, puis dictez un court paragraphe et corrigez les erreurs de transcription.",
        goal: "Réduire les gestes répétitifs tout en gardant le contrôle du texte.",
        projectStep: "Saisir rapidement les premières observations du projet.",
      },
    ],
  },
  {
    id: 4,
    title: "Travailler avec Siri AI et Apple Intelligence",
    duration: "50 min",
    objective: "Employer l’intelligence intégrée au Mac avec méthode et esprit critique.",
    lessons: [
      {
        slug: "activer-apple-intelligence-autorisations",
        title: "Activer Apple Intelligence et contrôler ses autorisations",
        duration: "07:00",
        description:
          "Vérifiez l’appareil, la langue, la région et l’état d’activation, puis examinez les accès accordés à Siri et les fonctions encore soumises à disponibilité.",
        goal: "Configurer Apple Intelligence sans accorder de permissions inutiles.",
        projectStep: "Autoriser uniquement les apps nécessaires au scénario fictif.",
      },
      {
        slug: "dialoguer-nouvelle-app-siri",
        title: "Dialoguer avec la nouvelle app Siri",
        duration: "07:00",
        description:
          "Ouvrez Siri comme une app, saisissez puis reformulez une demande, poursuivez une conversation et comparez une consigne vague à une consigne structurée.",
        goal: "Formuler une demande comportant un objectif, un contexte et un format.",
        projectStep: "Lister les informations manquantes avant la réunion client.",
      },
      {
        slug: "retrouver-information-contexte-personnel",
        title: "Retrouver une information avec le contexte personnel",
        duration: "07:00",
        description:
          "Demandez une information présente dans les données fictives, ouvrez la source proposée et affinez la demande lorsque la réponse manque de précision.",
        goal: "Remonter systématiquement à la source utilisée par Siri.",
        projectStep: "Retrouver le dernier échange, la date cible et la contrainte principale.",
      },
      {
        slug: "creer-action-app-siri-spotlight",
        title: "Créer une action dans une app depuis Siri ou Spotlight",
        duration: "07:00",
        description:
          "Transformez une information retrouvée en note ou en rappel, contrôlez le titre, la date et la destination, puis corrigez une action mal interprétée.",
        goal: "Passer de l’information à l’action sans ressaisie inutile.",
        projectStep: "Créer le rappel « Valider le brief Horizon ».",
      },
      {
        slug: "analyser-pdf-image-intelligence-visuelle",
        title: "Analyser un PDF et une image avec l’Intelligence visuelle",
        duration: "08:00",
        description:
          "Sélectionnez une zone, identifiez un élément, extrayez ou traduisez une information et posez une question sur le contenu affiché avant de comparer le résultat à la source.",
        goal: "Utiliser l’analyse visuelle sans considérer sa réponse comme infaillible.",
        projectStep: "Relever les objectifs du PDF et l’élément important de l’image de référence.",
      },
      {
        slug: "rediger-adapter-texte-outils-ecriture",
        title: "Rédiger et adapter un texte avec les outils d’écriture",
        duration: "07:00",
        description:
          "Partez d’un brouillon, corrigez l’orthographe, raccourcissez, structurez et modifiez le ton sans altérer les faits.",
        goal: "Comparer les versions et conserver uniquement les formulations pertinentes.",
        projectStep: "Produire un résumé professionnel du brief dans Notes.",
      },
      {
        slug: "verifier-reponse-ia-proteger-donnees",
        title: "Vérifier une réponse IA et protéger les données du projet",
        duration: "07:00",
        description:
          "Retrouvez la source, vérifiez noms, dates et chiffres, identifiez les incertitudes et retirez toute donnée qui n’est pas utile à la demande.",
        goal: "Appliquer une méthode de contrôle avant de réutiliser un résultat IA.",
        projectStep: "Marquer chaque information de la synthèse comme confirmée ou à vérifier.",
      },
    ],
  },
  {
    id: 5,
    title: "Naviguer et protéger ses comptes avec Safari",
    duration: "27 min",
    objective: "Organiser sa navigation et renforcer la sécurité des identifiants.",
    lessons: [
      {
        slug: "profils-groupes-onglets-safari",
        title: "Séparer sa veille avec les profils et groupes d’onglets Safari",
        duration: "07:00",
        description:
          "Créez un profil professionnel, ouvrez plusieurs ressources et regroupez-les par thème en distinguant favoris, liste de lecture et groupes d’onglets.",
        goal: "Retrouver une session de veille sans mélanger navigation personnelle et professionnelle.",
        projectStep: "Créer le groupe d’onglets « Horizon - Veille ».",
      },
      {
        slug: "surveiller-page-me-prevenir",
        title: "Surveiller une page web avec « Me prévenir »",
        duration: "07:00",
        description:
          "Activez le suivi d’une page compatible, identifiez le changement attendu, retrouvez les notifications et désactivez le suivi lorsqu’il n’est plus utile.",
        goal: "Mettre en place une veille ciblée plutôt qu’une surveillance manuelle.",
        projectStep: "Surveiller une date ou une disponibilité utile au projet.",
      },
      {
        slug: "creer-extension-safari-langage-naturel",
        title: "Créer une extension Safari en décrivant le besoin",
        duration: "07:00",
        description:
          "Décrivez une extension qui récupère le titre, l’adresse et le texte sélectionné d’une page, contrôlez ses permissions et testez son résultat.",
        goal: "Créer une extension simple et compréhensible avec une solution manuelle de repli.",
        projectStep: "Ajouter une source web proprement référencée à la note de veille.",
      },
      {
        slug: "securiser-acces-app-mots-de-passe",
        title: "Sécuriser ses accès avec l’app Mots de passe",
        duration: "06:00",
        description:
          "Retrouvez un identifiant fictif, utilisez une passkey ou un code de validation, repérez un mot de passe faible et effectuez une correction lorsque le site le permet.",
        goal: "Diagnostiquer puis corriger un accès sans exposer de compte personnel.",
        projectStep: "Sécuriser le service employé pour partager le dossier client.",
      },
    ],
  },
  {
    id: 6,
    title: "Organiser ses communications et ses tâches",
    duration: "35 min",
    objective: "Transformer les messages reçus en informations, rendez-vous et actions.",
    lessons: [
      {
        slug: "classer-retrouver-echanges-mail",
        title: "Classer et retrouver les échanges importants dans Mail",
        duration: "07:00",
        description:
          "Recherchez par expéditeur ou pièce jointe, exploitez le classement par pertinence et rangez un échange dans une boîte projet en conservant l’accès à la source.",
        goal: "Isoler rapidement les messages utiles à une décision.",
        projectStep: "Regrouper les échanges associés au client Horizon.",
      },
      {
        slug: "resumer-echange-rediger-reponse",
        title: "Résumer un échange et rédiger une réponse professionnelle",
        duration: "07:00",
        description:
          "Générez un résumé, comparez-le au message original, préparez une réponse depuis la note validée et contrôlez destinataire, dates et pièces jointes.",
        goal: "Employer l’assistance rédactionnelle sans déléguer la vérification finale.",
        projectStep: "Préparer l’e-mail de confirmation du périmètre et des prochaines étapes.",
      },
      {
        slug: "planifier-reunion-rappels-langage-naturel",
        title: "Planifier une réunion et ses rappels en langage naturel",
        duration: "07:00",
        description:
          "Créez un événement à partir d’une phrase, corrigez date, durée, lieu et participants, ajoutez un ordre du jour et vérifiez l’absence de conflit.",
        goal: "Transformer une intention en événement complet et fiable.",
        projectStep: "Programmer la réunion de lancement et son rappel de préparation.",
      },
      {
        slug: "construire-note-reunion-exploitable",
        title: "Construire une note de réunion exploitable",
        duration: "07:00",
        description:
          "Structurez la note avec titres, checklist, liens et pièce jointe, puis séparez clairement faits, questions, décisions et actions.",
        goal: "Créer une note utilisable avant, pendant et après la réunion.",
        projectStep: "Finaliser l’ordre du jour et la checklist de validation Horizon.",
      },
      {
        slug: "raccourci-archivage-langage-naturel",
        title: "Créer un raccourci d’archivage en langage naturel",
        duration: "07:00",
        description:
          "Décrivez le workflow, examinez chaque action générée, choisissez le dossier cible, ajoutez une date au nom du fichier et testez le tout sur une copie.",
        goal: "Vérifier une automatisation avant de l’exécuter sur des fichiers importants.",
        projectStep: "Construire le raccourci « Archiver Projet Horizon ».",
      },
    ],
  },
  {
    id: 7,
    title: "Synchroniser son travail avec iCloud et l’iPhone",
    duration: "20 min",
    objective: "Retrouver son travail sur plusieurs appareils et collaborer avec les bons droits.",
    lessons: [
      {
        slug: "synchroniser-partager-icloud-drive",
        title: "Synchroniser et partager le dossier avec iCloud Drive",
        duration: "07:00",
        description:
          "Vérifiez l’état de synchronisation, rendez un fichier disponible hors ligne, partagez le dossier avec un rôle précis et modifiez ou révoquez un accès.",
        goal: "Distinguer synchronisation, sauvegarde et partage.",
        projectStep: "Partager la version de travail Horizon en lecture seule.",
      },
      {
        slug: "handoff-presse-papiers-universel",
        title: "Poursuivre une tâche avec Handoff et le presse-papiers universel",
        duration: "06:00",
        description:
          "Commencez une consultation sur un appareil, reprenez-la sur le Mac et transférez un élément avec le presse-papiers universel.",
        goal: "Identifier les prérequis et les contrôles à effectuer en cas d’échec.",
        projectStep: "Récupérer une information du téléphone dans la note projet.",
      },
      {
        slug: "utiliser-iphone-depuis-mac",
        title: "Utiliser l’iPhone depuis le Mac sans perdre sa concentration",
        duration: "07:00",
        description:
          "Utilisez la recopie de l’iPhone, ouvrez une app utile et gérez les notifications reçues sur le Mac en protégeant les données sensibles.",
        goal: "Profiter de la continuité sans multiplier les interruptions.",
        projectStep: "Consulter une information mobile puis revenir immédiatement au dossier Horizon.",
      },
    ],
  },
  {
    id: 8,
    title: "Sécuriser, encadrer et maintenir son Mac",
    duration: "27 min",
    objective: "Protéger les données et réagir face aux problèmes les plus courants.",
    lessons: [
      {
        slug: "proteger-session-touch-id-filevault",
        title: "Protéger sa session avec Touch ID et FileVault",
        duration: "07:00",
        description:
          "Vérifiez le verrouillage automatique, configurez Touch ID, examinez l’état de FileVault et repérez les options de récupération.",
        goal: "Distinguer protection de la session et chiffrement du disque.",
        projectStep: "Empêcher qu’un Mac perdu expose le dossier client.",
      },
      {
        slug: "controler-autorisations-mises-a-jour",
        title: "Contrôler les autorisations et les mises à jour",
        duration: "07:00",
        description:
          "Examinez les accès aux fichiers, au microphone, à l’écran et aux données des apps, retirez une permission inutile et configurez les mises à jour automatiques.",
        goal: "Réduire les autorisations tout en conservant un workflow fonctionnel.",
        projectStep: "Revoir les accès accordés à Siri et à l’extension Safari.",
      },
      {
        slug: "protections-essentielles-compte-enfant",
        title: "Configurer les protections essentielles d’un compte enfant",
        duration: "06:00",
        description:
          "Définissez une limite simple, filtrez un contenu et présentez la Sécurité des communications depuis un compte familial de démonstration.",
        goal: "Connaître les protections essentielles sans entrer dans une administration exhaustive.",
        projectStep: "Cas pratique indépendant demandé dans le brief de formation.",
      },
      {
        slug: "liberer-stockage-options-recuperation",
        title: "Libérer du stockage et connaître les options de récupération",
        duration: "07:00",
        description:
          "Identifiez les fichiers volumineux, contrôlez les éléments d’ouverture, fermez une app bloquée et localisez les options de récupération.",
        goal: "Distinguer nettoyage sûr, suppression risquée et nécessité d’une sauvegarde.",
        projectStep: "Préparer l’espace nécessaire à l’archive finale.",
      },
    ],
  },
  {
    id: 9,
    title: "Réaliser le projet bureautique final",
    duration: "13 min",
    objective: "Mobiliser les fonctions clés dans un workflow professionnel cohérent.",
    lessons: [
      {
        slug: "workflow-projet-horizon-bout-en-bout",
        title: "Réaliser le workflow Projet Horizon de bout en bout",
        duration: "07:00",
        description:
          "Repartez d’une nouvelle demande, retrouvez les sources, organisez les fichiers, analysez le brief et l’image puis vérifiez les informations retenues.",
        goal: "Enchaîner les outils sans répéter les explications déjà acquises.",
        projectStep: "Produire en autonomie une synthèse fiable depuis le kit de départ.",
      },
      {
        slug: "livrer-partager-archiver-projet",
        title: "Livrer, partager et archiver le projet",
        duration: "06:00",
        description:
          "Finalisez l’e-mail et la réunion, contrôlez les droits iCloud, exécutez le raccourci d’archivage sur une copie et vérifiez le contenu de l’archive.",
        goal: "Clôturer un projet avec une checklist de livraison vérifiable.",
        projectStep: "Obtenir un dossier livré, partagé avec les bons droits et archivé avec sa date.",
      },
    ],
  },
]

export const allLessons = chapters.flatMap((chapter) =>
  chapter.lessons.map((lesson, chapterLessonIndex) => ({
    ...lesson,
    chapter,
    chapterLessonIndex,
  }))
)

export function getLesson(slug: string) {
  const index = allLessons.findIndex((lesson) => lesson.slug === slug)
  if (index === -1) return null

  return {
    ...allLessons[index],
    index,
    previous: index > 0 ? allLessons[index - 1] : null,
    next: index < allLessons.length - 1 ? allLessons[index + 1] : null,
  }
}
