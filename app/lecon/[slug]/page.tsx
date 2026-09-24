import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LessonExperience } from "@/components/lesson-experience"
import { allLessons, course, getLesson } from "@/lib/course-data"

export function generateStaticParams() {
  return allLessons.map((lesson) => ({ slug: lesson.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const lesson = getLesson(slug)

  if (!lesson) return {}

  return {
    title: `${lesson.title} | ${course.title}`,
    description: lesson.description,
  }
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!getLesson(slug)) notFound()

  return <LessonExperience slug={slug} />
}
