"use client"

import { useState, useRef } from "react"
import { Play, X } from "lucide-react"

export function DemoPlayer() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function handlePlay() {
    setPlaying(true)
    // small delay so the <video> is mounted before we call play()
    requestAnimationFrame(() => videoRef.current?.play())
  }

  function handleClose() {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setPlaying(false)
  }

  if (playing) {
    return (
      <div className="hero-preview hero-preview--playing">
        <video
          ref={videoRef}
          className="hero-preview__video"
          src="/assets/demo-elephorm.mov"
          controls
          playsInline
          onEnded={handleClose}
        />
        <button
          className="hero-preview__close"
          onClick={handleClose}
          aria-label="Fermer la vidéo"
        >
          <X />
        </button>
      </div>
    )
  }

  return (
    <button className="hero-preview" onClick={handlePlay} type="button">
      <img src="/assets/macos-desktop-apple.png" alt="Bureau macOS avec widgets" />
      <span className="hero-preview__veil" />
      <span className="hero-preview__play" aria-hidden="true">
        <Play fill="currentColor" />
      </span>
      <span className="hero-preview__caption">
        <small>Découvrir la formation</small>
        <strong>Voir la démo</strong>
      </span>
    </button>
  )
}
