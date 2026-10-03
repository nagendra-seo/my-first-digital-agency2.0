import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** React Router does NOT scroll to top on navigation by default — unlike
 *  a traditional multi-page site, an SPA keeps whatever scroll position
 *  the previous page was at. This mounts once and resets scroll to the
 *  top of the page on every route change (header nav, footer links,
 *  service cards, buttons — anything using <Link> or navigate()). */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
