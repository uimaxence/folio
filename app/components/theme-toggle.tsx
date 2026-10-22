"use client";

/** Jour / nuit. Le mode suit le réglage du téléphone ; le bouton le force et le retient.
    Les deux libellés sont dans la page, le CSS montre celui vers lequel on bascule : aucun décalage à l'hydratation. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  function basculer() {
    const root = document.documentElement;
    const force = root.getAttribute("data-theme");
    const nuit = force ? force === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const suivant = nuit ? "light" : "dark";
    root.setAttribute("data-theme", suivant);
    try {
      localStorage.setItem("theme", suivant);
    } catch {
      /* stockage indisponible : le choix vaut pour la page */
    }
  }
  return (
    <button type="button" onClick={basculer} className={`theme ${className}`} aria-label="Nuit ou jour : changer de mode">
      <span aria-hidden className="point-theme" />
      <span className="t-mono lbl-nuit">Nuit</span>
      <span className="t-mono lbl-jour">Jour</span>
    </button>
  );
}
