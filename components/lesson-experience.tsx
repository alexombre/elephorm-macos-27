"use client"

import { useState, type CSSProperties } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  FileText,
  Lightbulb,
  ListVideo,
  LockKeyhole,
  Pause,
  Play,
  Target,
} from "lucide-react"

import { BrandHeader } from "@/components/brand-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { chapters, course, getLesson } from "@/lib/course-data"

export function LessonExperience({ slug }: { slug: string }) {
  const lesson = getLesson(slug)
  const [isPlaying, setIsPlaying] = useState(false)

  if (!lesson) return null

  return (
    <SidebarProvider
      defaultOpen
      style={{ "--sidebar-width": "23rem" } as CSSProperties}
      className="lesson-layout"
    >
      <Sidebar
        side="right"
        variant="floating"
        collapsible="offcanvas"
        className="lesson-sidebar"
      >
        <SidebarHeader className="lesson-sidebar__header">
          <div>
            <small>Votre progression</small>
            <strong>
              Leçon {lesson.index + 1} sur {course.lessonCount}
            </strong>
          </div>
          <div className="progress-track" aria-label={`Leçon ${lesson.index + 1} sur ${course.lessonCount}`}>
            <span style={{ width: `${((lesson.index + 1) / course.lessonCount) * 100}%` }} />
          </div>
        </SidebarHeader>
        <SidebarContent className="lesson-sidebar__content">
          <div className="lesson-sidebar__title">
            <ListVideo aria-hidden="true" />
            <span>Contenu de la formation</span>
          </div>
          <Accordion
            type="multiple"
            defaultValue={[`side-chapter-${lesson.chapter.id}`]}
            className="sidebar-curriculum"
          >
            {chapters.map((chapter) => (
              <AccordionItem value={`side-chapter-${chapter.id}`} key={chapter.id}>
                <AccordionTrigger className="sidebar-chapter-trigger">
                  <span>{chapter.id}</span>
                  <span>
                    <strong>{chapter.title}</strong>
                    <small>{chapter.lessons.length} vidéos</small>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="sidebar-lessons">
                  {chapter.lessons.map((sidebarLesson, index) => {
                    const isActive = sidebarLesson.slug === lesson.slug
                    return (
                      <Link
                        key={sidebarLesson.slug}
                        href={`/lecon/${sidebarLesson.slug}`}
                        className={isActive ? "sidebar-lesson is-active" : "sidebar-lesson"}
                      >
                        <span className="sidebar-lesson__index">
                          {isActive ? <Play fill="currentColor" /> : index + 1}
                        </span>
                        <span>
                          <strong>{sidebarLesson.title}</strong>
                          <small>{sidebarLesson.duration}</small>
                        </span>
                      </Link>
                    )
                  })}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SidebarContent>
      </Sidebar>

      <SidebarInset className="lesson-inset">
        <BrandHeader
          crumbs={[
            { label: course.title, href: "/" },
            { label: lesson.title },
          ]}
        />

        <div className="lesson-page">
          <div className="lesson-topline">
            <Link href="/" className="back-link">
              <ArrowLeft /> Retour à la formation
            </Link>
            <SidebarTrigger
              className="curriculum-toggle"
              aria-label="Afficher ou masquer le sommaire"
            />
          </div>

          <section className="video-stage" aria-label="Lecteur de la leçon">
            <img src="/assets/macos-desktop-apple.png" alt="Bureau macOS utilisé dans le screencast" />
            <span className="video-stage__shade" />
            <button
              className={isPlaying ? "video-play is-playing" : "video-play"}
              onClick={() => setIsPlaying((playing) => !playing)}
              aria-label={isPlaying ? "Mettre l’aperçu en pause" : "Lire l’aperçu"}
            >
              {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
            </button>
            <span className="premium-label">
              <LockKeyhole /> Aperçu du screencast
            </span>
            <div className="video-controls" aria-hidden="true">
              {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
              <span className="video-controls__track">
                <i className={isPlaying ? "is-playing" : ""} />
              </span>
              <small>00:42 / {lesson.duration}</small>
            </div>
          </section>

          <section className="lesson-summary-card">
            <div className="lesson-summary-card__meta">
              <span>Chapitre {lesson.chapter.id}</span>
              <i />
              <span>Leçon {lesson.chapterLessonIndex + 1}</span>
              <i />
              <span>
                <Clock3 /> {lesson.duration}
              </span>
            </div>
            <h1>{lesson.title}</h1>
            <p>{lesson.goal}</p>
            <div className="lesson-navigation">
              {lesson.previous ? (
                <Link href={`/lecon/${lesson.previous.slug}`}>
                  <ChevronLeft /> Précédent
                </Link>
              ) : (
                <span />
              )}
              {lesson.next ? (
                <Link href={`/lecon/${lesson.next.slug}`}>
                  Suivant <ChevronRight />
                </Link>
              ) : (
                <Link href="/">
                  Programme <ChevronRight />
                </Link>
              )}
            </div>
          </section>

          <h2 className="lesson-details-title">Détails de la leçon</h2>

          <section className="lesson-detail-card lesson-description">
            <div className="detail-card-title">
              <FileText aria-hidden="true" />
              <h2>Description de la leçon</h2>
            </div>
            <p>{lesson.description}</p>
            <p>
              La démonstration s’appuie sur des données fictives et se termine par une
              vérification visible du résultat obtenu.
            </p>
          </section>

          <div className="lesson-detail-grid">
            <section className="lesson-detail-card">
              <div className="detail-card-title">
                <Target aria-hidden="true" />
                <h2>Objectifs de cette leçon</h2>
              </div>
              <ul>
                <li>
                  <Check /> {lesson.goal}
                </li>
                <li>
                  <Check /> Reproduire la manipulation sur le dossier Projet Horizon.
                </li>
                <li>
                  <Check /> Contrôler le résultat avant de passer à l’étape suivante.
                </li>
              </ul>
            </section>

            <section className="lesson-detail-card">
              <div className="detail-card-title">
                <Lightbulb aria-hidden="true" />
                <h2>Mise en pratique</h2>
              </div>
              <p>{lesson.projectStep}</p>
              <p className="detail-note">
                Le fichier produit rejoint le dossier client utilisé dans les chapitres suivants.
              </p>
            </section>
          </div>

          <section className="lesson-faq" aria-labelledby="faq-title">
            <div className="section-heading centered">
              <span className="section-heading__icon" aria-hidden="true">
                <CircleHelp />
              </span>
              <div>
                <p>Pour valider l’essentiel</p>
                <h2 id="faq-title">Questions &amp; réponses</h2>
              </div>
            </div>
            <Accordion type="single" collapsible className="faq-list">
              <AccordionItem value="objective">
                <AccordionTrigger>Quel est le résultat attendu à la fin de cette leçon ?</AccordionTrigger>
                <AccordionContent>{lesson.goal}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="project">
                <AccordionTrigger>Comment cette leçon fait-elle avancer Projet Horizon ?</AccordionTrigger>
                <AccordionContent>{lesson.projectStep}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="privacy">
                <AccordionTrigger>Quelles données utiliser pendant la démonstration ?</AccordionTrigger>
                <AccordionContent>
                  Uniquement les fichiers, comptes et coordonnées fictifs fournis avec la
                  formation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <p className="image-credit">Visuel macOS © Apple, utilisé à titre de maquette pédagogique.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
