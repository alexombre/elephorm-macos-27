import Link from "next/link"
import {
  ChevronRight,
  Home,
  Play,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react"

type Crumb = {
  label: string
  href?: string
}

export function BrandMark() {
  return (
    <Link href="/" className="brand-mark" aria-label="Retour à la formation">
      <span className="brand-mark__icon" aria-hidden="true">
        <Play fill="currentColor" strokeWidth={2.4} />
        <i />
      </span>
      <span className="brand-mark__name">elephorm</span>
    </Link>
  )
}

export function BrandHeader({ crumbs = [] }: { crumbs?: Crumb[] }) {
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <BrandMark />
          <label className="site-search">
            <Search aria-hidden="true" />
            <span className="sr-only">Rechercher une formation</span>
            <input placeholder="Rechercher une formation" />
          </label>
          <div className="site-header__actions">
            <button className="icon-button" aria-label="Panier">
              <ShoppingCart />
            </button>
            <button className="login-button">
              <UserRound />
              <span>Connexion</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Fil d’Ariane">
        <Link href="/">
          <Home aria-hidden="true" />
          <span>Accueil</span>
        </Link>
        <ChevronRight aria-hidden="true" />
        <Link href="/">Formations</Link>
        {crumbs.map((crumb) => (
          <span className="breadcrumbs__tail" key={crumb.label}>
            <ChevronRight aria-hidden="true" />
            {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
          </span>
        ))}
      </nav>
    </>
  )
}
