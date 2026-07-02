// ============================================
// IDIOMAS — mapa único de rutas ES ↔ EN.
// Lo usan Layout, Header, Footer y el banner de cookies.
// Si añades una página nueva, añade aquí su pareja.
// ============================================

export const RUTAS: Record<string, string> = {
  "/": "/en/",
  "/servicios": "/en/services",
  "/nosotros": "/en/about",
  "/contacto": "/en/contact",
  "/aviso-legal": "/en/legal-notice",
  "/privacidad": "/en/privacy",
  "/cookies": "/en/cookies",
  "/accesibilidad": "/en/accessibility",
};

// Quita barras finales: "/servicios/" -> "/servicios"
export function normaliza(ruta: string): string {
  const limpia = ruta.replace(/\/+$/, "");
  return limpia === "" ? "/" : limpia;
}

// ¿En qué idioma está esta URL?
export function idiomaDe(ruta: string): "es" | "en" {
  const p = normaliza(ruta);
  return p === "/en" || p.startsWith("/en/") ? "en" : "es";
}

// Devuelve la misma página en el otro idioma.
export function urlAlterna(ruta: string): string {
  const p = normaliza(ruta);
  if (idiomaDe(p) === "es") return RUTAS[p] ?? "/en/";
  const par = Object.entries(RUTAS).find(([, en]) => normaliza(en) === p);
  return par ? par[0] : "/";
}
