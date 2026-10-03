import { Link } from "react-router-dom";
import { Container } from "../ui/Container.jsx";
import { Button } from "../ui/Button.jsx";
import { NAV_LINKS, SITE_TAGLINE } from "../../lib/constants.js";

const LINKEDIN_URL = "https://www.linkedin.com/in/nagendrayadav90?utm_source=share_via&utm_content=profile&utm_medium=member_android";

function SocialIcon({ label, path, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 text-cream-100/80 transition-colors hover:border-gold-400 hover:text-gold-400"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100">
      <Container className="py-16">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <img src="/brand/logo-light.png" alt="My First Digital Agency" width={168} height={44} className="h-9 w-auto md:h-10" />
            <p className="mt-3 text-sm text-cream-100/60">{SITE_TAGLINE}</p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="text-xl font-display font-bold md:text-2xl">
              Let&rsquo;s make your next <span className="text-gold-400">chapter count.</span>
            </p>
            <Button href="/free-audit" variant="primary">
              Book a free audit
            </Button>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-cream-100/10" />

        <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-xs text-cream-100/50">&copy; {new Date().getFullYear()} My First Digital Agency. Built for ambitious businesses.</p>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} to={link.href} className="text-xs font-semibold text-cream-100/70 hover:text-gold-400">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            <SocialIcon
              label="LinkedIn"
              href={LINKEDIN_URL}
              path="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.85-3-1.85 0-2.13 1.4-2.13 2.9V21h-4V9z"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
