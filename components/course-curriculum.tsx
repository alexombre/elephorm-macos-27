"use client"

import Link from "next/link"
import { Clock3, Play } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { chapters } from "@/lib/course-data"

export function CourseCurriculum() {
  return (
    <section className="curriculum-card" id="programme" aria-labelledby="programme-title">
      <div className="section-heading">
        <span className="section-heading__icon" aria-hidden="true">
          <Play fill="currentColor" />
        </span>
        <div>
          <p>38 vidéos • 9 chapitres</p>
          <h2 id="programme-title">Programme de la formation</h2>
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["chapter-1"]} className="curriculum-list">
        {chapters.map((chapter) => (
          <AccordionItem
            value={`chapter-${chapter.id}`}
            className="curriculum-chapter"
            key={chapter.id}
          >
            <AccordionTrigger className="curriculum-trigger">
              <span className="curriculum-trigger__number">{chapter.id}</span>
              <span className="curriculum-trigger__copy">
                <strong>{chapter.title}</strong>
                <small>
                  {chapter.lessons.length} vidéos • {chapter.duration}
                </small>
              </span>
            </AccordionTrigger>
            <AccordionContent className="curriculum-content">
              <p className="curriculum-objective">{chapter.objective}</p>
              <div className="lesson-list">
                {chapter.lessons.map((lesson, lessonIndex) => (
                  <Link href={`/lecon/${lesson.slug}`} className="lesson-row" key={lesson.slug}>
                    <span className="lesson-thumb">
                      <img
                        src="/assets/macos-desktop-apple.png"
                        alt="Aperçu d’un bureau macOS"
                      />
                      <i aria-hidden="true">
                        <Play fill="currentColor" />
                      </i>
                    </span>
                    <span className="lesson-row__copy">
                      <small>
                        Chapitre {chapter.id} • Leçon {lessonIndex + 1}
                      </small>
                      <strong>{lesson.title}</strong>
                    </span>
                    <span className="lesson-row__duration">
                      <Clock3 aria-hidden="true" />
                      {lesson.duration}
                    </span>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
