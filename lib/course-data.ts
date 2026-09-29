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
  updatedAt: "29/09/2026",
  duration: "4 h 20 min",
  lessonCount: 38,
  chapterCount: 9,
  level: "Débutant à intermédiaire",
  promise:
    "Organisez, sécurisez et exploitez votre Mac au quotidien, puis accélérez votre travail avec Spotlight, Siri AI et les apps Apple.",
  outcomes: [
    "Mettre à niveau son Mac en protégeant ses données.",
    "Personnaliser l\u2019interface Liquid Glass et construire un espace de travail lisible.",
    "Organiser, retrouver, synchroniser et partager ses fichiers.",
    "Travailler plus vite avec les fenêtres, Spotlight et les raccourcis essentiels.",
    "Utiliser Siri AI et l’Intelligence visuelle dans des situations professionnelles.",
    "Naviguer avec Safari et sécuriser ses identifiants avec Mots de passe.",
    "Organiser ses e-mails, rendez-vous, notes, tâches et automatisations.",
    "Collaborer avec iCloud et les fonctions de Continuité.",
    "Protéger son Mac et résoudre les problèmes courants.",
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
        title: "Vérifier la compatibilité, sauvegarder puis installer macOS 27",
        duration: "08:00",
        description:
          "Vérifiez le modèle et la puce du Mac, l’espace disponible, la compatibilité des apps importantes et l’état de la sauvegarde. Repérez ensuite le lancement de la mise à jour et les contrôles utiles après le redémarrage.",
        goal: "Valider une checklist de mise à niveau sans exposer ses données.",
        projectStep: "Créer la checklist « Mac prêt pour le projet ».",
      },
      {
        slug: "reperes-bureau-dock-barre-menus",
        title: "Découvrir le Bureau, le Dock et la barre des menus",
        duration: "06:00",
        description:
          "Identifiez les zones de l’interface, ouvrez et quittez une app, épinglez les outils utiles dans le Dock et accédez rapidement aux réglages principaux.",
        goal: "Construire un environnement familier, y compris après une migration depuis Windows.",
        projectStep: "Installer Finder, Safari, Mail, Notes et Calendrier dans le Dock.",
      },
      {
        slug: "regler-liquid-glass-lisibilite",
        title: "Ajuster Liquid Glass, le contraste et l’apparence de l’interface",
        duration: "06:00",
        description:
          "Comparez transparence et contraste sur plusieurs fenêtres, puis adaptez l’apparence, la taille du texte et les réglages d’accessibilité utiles.",
        goal: "Obtenir une interface agréable sans sacrifier la lisibilité.",
        projectStep: "Préparer un affichage confortable pour consulter le brief client.",
      },
      {
        slug: "tableau-bord-widgets-centre-controle",
        title: "Personnaliser le Centre de contrôle, les dossiers et les widgets",
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
        title: "Naviguer dans le Finder et personnaliser sa barre latérale",
        duration: "07:00",
        description:
          "Parcourez les vues du Finder, affichez les informations utiles, personnalisez la barre latérale et créez une arborescence simple pour le brief, la recherche, la production et la livraison.",
        goal: "Mettre en place une structure réutilisable pour tout nouveau dossier client.",
        projectStep: "Centraliser les fichiers fournis dans quatre dossiers clairement nommés.",
      },
      {
        slug: "classer-tags-favoris-noms",
        title: "Classer ses fichiers avec les dossiers, les tags et les favoris",
        duration: "06:00",
        description:
          "Renommez plusieurs fichiers selon une convention, déplacez-les sans les dupliquer, attribuez des tags de statut et ajoutez le projet aux favoris.",
        goal: "Éviter les doublons et rendre l’état d’un document immédiatement visible.",
        projectStep: "Distinguer les éléments « À analyser », « Validés » et « À livrer ».",
      },
      {
        slug: "annoter-signer-pdf-apercu",
        title: "Prévisualiser, annoter et signer un PDF avec Coup d’œil et Aperçu",
        duration: "08:00",
        description:
          "Prévisualisez le brief, surlignez une échéance, ajoutez une note, réorganisez une page et insérez une signature fictive avant d’exporter une copie.",
        goal: "Annoter un document sans écraser le fichier original.",
        projectStep: "Produire le fichier « Brief_Horizon_annote.pdf ».",
      },
      {
        slug: "rechercher-fichier-filtres-finder",
        title: "Rechercher un document avec le Finder et ses filtres",
        duration: "07:00",
        description:
          "Recherchez par nom, type, date et tag, combinez plusieurs critères et vérifiez le chemin du fichier avant toute modification.",
        goal: "Construire une recherche précise et reproductible.",
        projectStep: "Afficher uniquement les documents récents marqués « À analyser ».",
      },
      {
        slug: "partager-airdrop-icloud-lien",
        title: "Partager un fichier avec AirDrop, iCloud Drive ou un lien",
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
        title: "Disposer ses fenêtres en mosaïque et naviguer avec Mission Control",
        duration: "07:00",
        description:
          "Placez le PDF, Safari et Notes côte à côte, redimensionnez les zones, utilisez Mission Control et créez un espace de travail séparé.",
        goal: "Comparer plusieurs sources sans perdre le fil de la tâche.",
        projectStep: "Préparer l’écran pour analyser le brief Horizon.",
      },
      {
        slug: "retrouver-information-spotlight",
        title: "Retrouver apps, fichiers et contenus avec Spotlight",
        duration: "07:00",
        description:
          "Lancez une recherche au clavier, filtrez les résultats, prévisualisez un document et retrouvez une phrase présente dans un fichier ou un e-mail.",
        goal: "Distinguer résultat local, contenu d’app et suggestion web.",
        projectStep: "Retrouver la date de lancement sans parcourir manuellement les dossiers.",
      },
      {
        slug: "actions-spotlight-presse-papiers",
        title: "Utiliser les actions et l’historique du presse-papiers dans Spotlight",
        duration: "07:00",
        description:
          "Ouvrez un fichier à son emplacement, lancez une action disponible et récupérez un élément récent du presse-papiers avant de le vérifier.",
        goal: "Enchaîner recherche et action sans ouvrir inutilement plusieurs apps.",
        projectStep: "Ajouter la date et le contact client à la note de synthèse.",
      },
      {
        slug: "raccourcis-clavier-dictee",
        title: "Accélérer son travail avec les raccourcis clavier et la dictée",
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
        title: "Vérifier la compatibilité, les langues et la confidentialité d’Apple Intelligence",
        duration: "07:00",
        description:
          "Vérifiez l’appareil, la langue, la région et l’état d’activation, puis examinez les accès accordés à Siri et les fonctions encore soumises à disponibilité.",
        goal: "Configurer Apple Intelligence sans accorder de permissions inutiles.",
        projectStep: "Autoriser uniquement les apps nécessaires au scénario fictif.",
      },
      {
        slug: "dialoguer-nouvelle-app-siri",
        title: "Découvrir la nouvelle app Siri et formuler une demande efficace",
        duration: "07:00",
        description:
          "Ouvrez Siri comme une app, saisissez puis reformulez une demande, poursuivez une conversation et comparez une consigne vague à une consigne structurée.",
        goal: "Formuler une demande comportant un objectif, un contexte et un format.",
        projectStep: "Lister les informations manquantes avant la réunion client.",
      },
      {
        slug: "retrouver-information-contexte-personnel",
        title: "Retrouver une information grâce au contexte personnel",
        duration: "07:00",
        description:
          "Demandez une information présente dans les données fictives, ouvrez la source proposée et affinez la demande lorsque la réponse manque de précision.",
        goal: "Remonter systématiquement à la source utilisée par Siri.",
        projectStep: "Retrouver le dernier échange, la date cible et la contrainte principale.",
      },
      {
        slug: "creer-action-app-siri-spotlight",
        title: "Déclencher des actions dans les apps depuis Siri et Spotlight",
        duration: "07:00",
        description:
          "Transformez une information retrouvée en note ou en rappel, contrôlez le titre, la date et la destination, puis corrigez une action mal interprétée.",
        goal: "Passer de l’information à l’action sans ressaisie inutile.",
        projectStep: "Créer le rappel « Valider le brief Horizon ».",
      },
      {
        slug: "analyser-pdf-image-intelligence-visuelle",
        title: "Analyser une image ou un PDF avec l’Intelligence visuelle",
        duration: "08:00",
        description:
          "Sélectionnez une zone, identifiez un élément, extrayez ou traduisez une information et posez une question sur le contenu affiché avant de comparer le résultat à la source.",
        goal: "Utiliser l’analyse visuelle sans considérer sa réponse comme infaillible.",
        projectStep: "Relever les objectifs du PDF et l’élément important de l’image de référence.",
      },
      {
        slug: "rediger-adapter-texte-outils-ecriture",
        title: "Rédiger, corriger et adapter le ton d’un texte avec Siri",
        duration: "07:00",
        description:
          "Partez d’un brouillon, corrigez l’orthographe, raccourcissez, structurez et modifiez le ton sans altérer les faits.",
        goal: "Comparer les versions et conserver uniquement les formulations pertinentes.",
        projectStep: "Produire un résumé professionnel du brief dans Notes.",
      },
      {
        slug: "verifier-reponse-ia-proteger-donnees",
        title: "Vérifier les réponses, protéger ses données et comprendre les limites",
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
        slug: "configurer-safari-profils",
        title: "Configurer Safari et séparer ses activités avec les profils",
        duration: "07:00",
        description:
          "Configurez les réglages essentiels de Safari, créez un profil professionnel et séparez navigation personnelle et professionnelle avec des favoris et extensions dédiés.",
        goal: "Obtenir un environnement Safari organisé et adapté à son activité.",
        projectStep: "Créer le profil « Horizon » avec ses favoris dédiés.",
      },
      {
        slug: "onglets-surveiller-page-me-prevenir",
        title: "Regrouper les onglets et surveiller une page avec « Me prévenir »",
        duration: "07:00",
        description:
          "Regroupez plusieurs ressources par thème, activez le suivi d’une page compatible, identifiez le changement attendu et désactivez le suivi lorsqu’il n’est plus utile.",
        goal: "Organiser sa veille avec les groupes d’onglets et les notifications de changement.",
        projectStep: "Créer le groupe d’onglets « Horizon - Veille » et surveiller une page clé.",
      },
      {
        slug: "identifiants-passkeys-mots-de-passe",
        title: "Retrouver ses identifiants, passkeys et codes dans Mots de passe",
        duration: "07:00",
        description:
          "Ouvrez l’app Mots de passe, retrouvez un identifiant fictif, utilisez une passkey ou un code de validation et partagez un accès en toute sécurité.",
        goal: "Accéder rapidement à ses identifiants sans compromettre leur sécurité.",
        projectStep: "Retrouver le compte utilisé pour partager le dossier client.",
      },
      {
        slug: "corriger-mots-de-passe-compromis",
        title: "Identifier et corriger les mots de passe faibles ou compromis",
        duration: "06:00",
        description:
          "Repérez les alertes de sécurité, identifiez un mot de passe faible ou réutilisé, effectuez une correction lorsque le site le permet et activez la modification automatique si disponible.",
        goal: "Diagnostiquer puis corriger les accès vulnérables de manière méthodique.",
        projectStep: "Sécuriser le service employé pour le projet Horizon.",
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
        title: "Configurer, classer et retrouver ses e-mails dans Mail",
        duration: "07:00",
        description:
          "Recherchez par expéditeur ou pièce jointe, exploitez le classement par pertinence et rangez un échange dans une boîte projet en conservant l’accès à la source.",
        goal: "Isoler rapidement les messages utiles à une décision.",
        projectStep: "Regrouper les échanges associés au client Horizon.",
      },
      {
        slug: "resumer-echange-rediger-reponse",
        title: "Rédiger et résumer un message avec Apple Intelligence",
        duration: "07:00",
        description:
          "Générez un résumé, comparez-le au message original, préparez une réponse depuis la note validée et contrôlez destinataire, dates et pièces jointes.",
        goal: "Employer l’assistance rédactionnelle sans déléguer la vérification finale.",
        projectStep: "Préparer l’e-mail de confirmation du périmètre et des prochaines étapes.",
      },
      {
        slug: "planifier-reunion-rappels-langage-naturel",
        title: "Créer et modifier un événement à partir d’une description",
        duration: "07:00",
        description:
          "Créez un événement à partir d’une phrase, corrigez date, durée, lieu et participants, ajoutez un ordre du jour et vérifiez l’absence de conflit.",
        goal: "Transformer une intention en événement complet et fiable.",
        projectStep: "Programmer la réunion de lancement et son rappel de préparation.",
      },
      {
        slug: "construire-note-reunion-exploitable",
        title: "Structurer ses informations avec Notes et Rappels",
        duration: "07:00",
        description:
          "Structurez la note avec titres, checklist, liens et pièce jointe, puis séparez clairement faits, questions, décisions et actions.",
        goal: "Créer une note utilisable avant, pendant et après la réunion.",
        projectStep: "Finaliser l’ordre du jour et la checklist de validation Horizon.",
      },
      {
        slug: "raccourci-archivage-langage-naturel",
        title: "Décrire puis automatiser une tâche avec Raccourcis",
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
        title: "Synchroniser, stocker et partager ses fichiers avec iCloud Drive",
        duration: "07:00",
        description:
          "Vérifiez l’état de synchronisation, rendez un fichier disponible hors ligne, partagez le dossier avec un rôle précis et modifiez ou révoquez un accès.",
        goal: "Distinguer synchronisation, sauvegarde et partage.",
        projectStep: "Partager la version de travail Horizon en lecture seule.",
      },
      {
        slug: "handoff-presse-papiers-universel",
        title: "Continuer son travail avec Handoff et le presse-papiers universel",
        duration: "06:00",
        description:
          "Commencez une consultation sur un appareil, reprenez-la sur le Mac et transférez un élément avec le presse-papiers universel.",
        goal: "Identifier les prérequis et les contrôles à effectuer en cas d’échec.",
        projectStep: "Récupérer une information du téléphone dans la note projet.",
      },
      {
        slug: "utiliser-iphone-depuis-mac",
        title: "Utiliser la recopie de l’iPhone et ses notifications sur le Mac",
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
        title: "Sécuriser sa session avec Touch ID, FileVault et les bons réglages de compte",
        duration: "07:00",
        description:
          "Vérifiez le verrouillage automatique, configurez Touch ID, examinez l’état de FileVault et repérez les options de récupération.",
        goal: "Distinguer protection de la session et chiffrement du disque.",
        projectStep: "Empêcher qu’un Mac perdu expose le dossier client.",
      },
      {
        slug: "controler-autorisations-mises-a-jour",
        title: "Contrôler les autorisations des apps et installer les mises à jour",
        duration: "07:00",
        description:
          "Examinez les accès aux fichiers, au microphone, à l’écran et aux données des apps, retirez une permission inutile et configurez les mises à jour automatiques.",
        goal: "Réduire les autorisations tout en conservant un workflow fonctionnel.",
        projectStep: "Revoir les accès accordés à Siri et à l’extension Safari.",
      },
      {
        slug: "protections-essentielles-compte-enfant",
        title: "Configurer les protections essentielles pour un compte enfant",
        duration: "06:00",
        description:
          "Définissez une limite simple, filtrez un contenu et présentez la Sécurité des communications depuis un compte familial de démonstration.",
        goal: "Connaître les protections essentielles sans entrer dans une administration exhaustive.",
        projectStep: "Cas pratique indépendant demandé dans le brief de formation.",
      },
      {
        slug: "liberer-stockage-options-recuperation",
        title: "Libérer du stockage, contrôler le démarrage et utiliser la récupération",
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
        title: "Préparer un dossier client avec Finder, Safari, Siri AI et Intelligence visuelle",
        duration: "07:00",
        description:
          "Repartez d’une nouvelle demande, retrouvez les sources, organisez les fichiers, analysez le brief et l’image puis vérifiez les informations retenues.",
        goal: "Enchaîner les outils sans répéter les explications déjà acquises.",
        projectStep: "Produire en autonomie une synthèse fiable depuis le kit de départ.",
      },
      {
        slug: "livrer-partager-archiver-projet",
        title: "Planifier, partager et archiver les livrables du projet",
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
