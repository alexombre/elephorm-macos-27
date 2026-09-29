import Link from "next/link"
import {
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  FolderKanban,
  ShieldCheck,
  Sparkles,
  Target,
  Video,
} from "lucide-react"

import { BrandHeader } from "@/components/brand-header"
import { CourseCurriculum } from "@/components/course-curriculum"
import { DemoPlayer } from "@/components/demo-player"
import { chapters, course } from "@/lib/course-data"

const firstLesson = chapters[0].lessons[0]

export default function Home() {
  return (
    <main>
      <BrandHeader />

      <div className="course-shell">
        <div className="course-main">
          <section className="course-hero" aria-labelledby="course-title">
            <p className="eyebrow">{course.eyebrow}</p>
            <h1 id="course-title">{course.title}</h1>
            <p className="course-hero__promise">{course.promise}</p>

            <DemoPlayer />

            <div className="meta-pills" aria-label="Informations sur la formation">
              <span>
                <CalendarDays aria-hidden="true" /> Mise à jour : {course.updatedAt}
              </span>
              <span>
                <Clock3 aria-hidden="true" /> Durée : {course.duration}
              </span>
              <span>
                <Video aria-hidden="true" /> {course.lessonCount} vidéos
              </span>
            </div>

            <div className="taxonomy-card">
              <div>
                <strong>Logiciels</strong>
                <span className="chip">macOS 27</span>
              </div>
              <div>
                <strong>Compétences</strong>
                <span className="chip">Bureautique</span>
                <span className="chip">Apple Intelligence</span>
                <span className="chip">Organisation</span>
              </div>
              <div>
                <strong>Métiers</strong>
                <span className="chip">Assistant administratif</span>
                <span className="chip">Chef de projet</span>
                <span className="chip">Entrepreneur</span>
              </div>
            </div>
          </section>

          <section className="content-card learning-card" aria-labelledby="learning-title">
            <div className="section-heading">
              <span className="section-heading__icon" aria-hidden="true">
                <Target />
              </span>
              <div>
                <p>Objectifs pédagogiques</p>
                <h2 id="learning-title">Ce que vous allez apprendre</h2>
              </div>
            </div>
            <ul className="learning-list">
              {course.outcomes.map((outcome) => (
                <li key={outcome}>
                  <Check aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>

          <CourseCurriculum />

          <section className="content-card description-card" aria-labelledby="description-title">
            <div className="section-heading">
              <span className="section-heading__icon" aria-hidden="true">
                <FolderKanban />
              </span>
              <div>
                <p>Une progression orientée résultat</p>
                <h2 id="description-title">Description</h2>
              </div>
            </div>
            <p>
              Cette formation accompagne les utilisateurs dans la prise en main de macOS 27
              Golden Gate pour un usage bureautique moderne. Elle présente les réglages
              essentiels, l’interface Liquid Glass, le Finder, la gestion des fenêtres,
              Spotlight, Safari, Mail et iCloud à travers des manipulations directement
              applicables.
            </p>
            <p>
              Une place centrale est accordée aux nouveautés apparues depuis macOS 15
              Sequoia et enrichies dans macOS 26 Tahoe puis macOS 27 : recopie de l’iPhone,
              disposition des fenêtres, app Mots de passe, actions dans Spotlight,
              automatisations intelligentes, Siri AI, compréhension du contexte personnel,
              Intelligence visuelle et rédaction assistée.
            </p>
            <p>
              Chaque chapitre répond à une situation professionnelle : préparer son Mac,
              organiser un projet, retrouver une information, analyser un PDF, rédiger un
              e-mail, planifier une réunion, partager un dossier ou automatiser un suivi.
            </p>
            <div className="project-callout">
              <Sparkles aria-hidden="true" />
              <div>
                <strong>Mission Projet Horizon</strong>
                <p>
                  L’apprenant prépare un dossier client fictif et réalise une journée de
                  travail : configurer son environnement, organiser les documents, effectuer une
                  recherche, analyser un PDF, rédiger un message, planifier une réunion, puis
                  partager et archiver les livrables.
                </p>
              </div>
            </div>
          </section>

          <div className="info-grid">
            <section className="content-card compact-card">
              <h2>Pré-requis</h2>
              <p>
                Un Mac Apple Silicon compatible avec macOS 27, une connexion Internet et, pour
                certains exercices, un compte Apple et un iPhone. Certaines fonctions peuvent
                dépendre de la langue, de la région ou de la version utilisée.
              </p>
            </section>
            <section className="content-card compact-card">
              <h2>Public cible</h2>
              <p>
                Débutants sur Mac, utilisateurs venant de Windows et professionnels souhaitant
                actualiser leurs usages depuis macOS Sequoia.
              </p>
            </section>
          </div>
        </div>

        <aside className="purchase-card" aria-label="Résumé de l’offre">
          <div className="purchase-card__head">
            <p>Une formation complète et directement applicable</p>
          </div>
          <div className="purchase-card__body">
            <span className="proposal-badge">Proposition éditoriale</span>
            <h2>Maîtrisez macOS 27</h2>
            <p className="purchase-card__sub">Accès au programme complet de la formation</p>
            <div className="offer-stats">
              <span>
                <Clock3 /> {course.duration}
              </span>
              <span>
                <Video /> {course.lessonCount} leçons
              </span>
              <span>
                <ShieldCheck /> Données fictives et sécurisées
              </span>
            </div>
            <a className="primary-cta" href="#programme">
              Consulter le programme <ChevronRight />
            </a>
            <Link className="secondary-cta" href={`/lecon/${firstLesson.slug}`}>
              Voir une leçon
            </Link>
          </div>
        </aside>
      </div>
    </main>
  )
}
