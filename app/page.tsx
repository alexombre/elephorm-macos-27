import Link from "next/link"
import {
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  FolderKanban,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  Video,
} from "lucide-react"

import { BrandHeader } from "@/components/brand-header"
import { CourseCurriculum } from "@/components/course-curriculum"
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

            <Link className="hero-preview" href={`/lecon/${firstLesson.slug}`}>
              <img src="/assets/macos-desktop-apple.png" alt="Bureau macOS avec widgets" />
              <span className="hero-preview__veil" />
              <span className="hero-preview__play" aria-hidden="true">
                <Play fill="currentColor" />
              </span>
              <span className="hero-preview__caption">
                <small>Découvrir la formation</small>
                <strong>Voir la première leçon</strong>
              </span>
            </Link>

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
              Cette formation accompagne la prise en main de macOS 27 Golden Gate dans un
              contexte bureautique moderne. Les réglages essentiels, le Finder, Spotlight,
              Safari, Mail et iCloud sont abordés à travers des gestes immédiatement
              applicables.
            </p>
            <p>
              Une place centrale est accordée à Siri AI, au contexte personnel, à
              l’Intelligence visuelle, aux actions Spotlight et aux automatisations en langage
              naturel. Chaque résultat produit par l’intelligence artificielle est vérifié à sa
              source avant d’être réutilisé.
            </p>
            <div className="project-callout">
              <Sparkles aria-hidden="true" />
              <div>
                <strong>Mission Projet Horizon</strong>
                <p>
                  Pendant toute la formation, l’apprenant transforme un brief client en dossier
                  organisé, synthèse vérifiée, réunion planifiée, espace partagé et archive
                  sécurisée.
                </p>
              </div>
            </div>
          </section>

          <div className="info-grid">
            <section className="content-card compact-card">
              <h2>Pré-requis</h2>
              <p>
                Un Mac Apple Silicon compatible avec macOS 27, une connexion Internet et un
                compte Apple. Certaines fonctions peuvent dépendre de la langue, de la région ou
                de la version utilisée.
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
