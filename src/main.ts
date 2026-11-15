// Punto de entrada: arma la grilla de cards desde el catálogo y activa los carruseles.
// Nota de seguridad: se usa innerHTML con los datos de productos.ts, que son estáticos
// y controlados por nosotros (no hay input de usuario), así que no hay riesgo de XSS.
import { productos, type Producto, type MediaItem } from "./data/productos";

// Subtítulo naranja según la categoría del perno.
const SUBTITULOS: Record<Producto["categoria"], string> = {
  "Camioneta / Auto": "Ideal camioneta / auto",
  Camioneta: "Ideal camioneta",
  Tractor: "Ideal tractor agrícola",
};

// Viñetas de la descripción, iguales dentro de cada tipo de perno.
const BULLETS_CAMIONETA = [
  "Fabricado en acero SAE 1045",
  "Acabado negro brillante",
  "Ángulo de 45° para mejor ajuste",
  "Ideal para trailers, acoplados y maquinaria",
  "Incluye alfiler de enganche",
];

const BULLETS_TRACTOR = [
  "Fabricado en acero SAE 1045",
  "Acabado negro brillante",
  "Manija triangular de fácil agarre",
  "Ideal para tractores y maquinaria agrícola",
  "Incluye alfiler de enganche",
];

function bulletsDe(producto: Producto): string[] {
  return producto.categoria === "Tractor" ? BULLETS_TRACTOR : BULLETS_CAMIONETA;
}

// Devuelve el HTML de un slide del carrusel (imagen o video).
function slideHTML(item: MediaItem, alt: string): string {
  if (item.tipo === "video") {
    return `<div class="slide"><video class="slide-media" src="${item.src}" controls preload="metadata" playsinline></video></div>`;
  }
  return `<div class="slide"><img class="slide-media" src="${item.src}" alt="${alt}" loading="lazy" /></div>`;
}

// Carrusel de la foto del perno. Con una sola imagen no muestra controles.
function fotoHTML(producto: Producto): string {
  const media = producto.media;
  if (media.length === 0) {
    return `<div class="foto foto--vacia"><span>Foto del perno</span></div>`;
  }
  const alt = `Perno de enganche ${producto.medida}`;
  const slides = media.map((item) => slideHTML(item, alt)).join("");
  const multiple = media.length > 1;

  const dots = multiple
    ? `<div class="dots">${media
        .map((_, i) => `<button class="dot${i === 0 ? " active" : ""}" aria-label="Ver ${i + 1}"></button>`)
        .join("")}</div>`
    : "";

  const arrows = multiple
    ? `<button class="arrow prev" aria-label="Anterior">‹</button>
       <button class="arrow next" aria-label="Siguiente">›</button>`
    : "";

  return `<div class="foto"><div class="track">${slides}</div>${arrows}${dots}</div>`;
}

// Arma una card: ficha recreada (título, descripción, foto, medida) + precio y botón.
function tarjeta(producto: Producto): HTMLElement {
  const article = document.createElement("article");
  article.className = "card";

  const precio = producto.precio.toLocaleString("es-AR");
  const bullets = bulletsDe(producto)
    .map((b) => `<li>${b}</li>`)
    .join("");

  article.innerHTML = `
    <div class="ficha">
      <header class="ficha-head">
        <h2>Perno de enganche</h2>
        <p class="sub">${SUBTITULOS[producto.categoria]}</p>
        <p class="medida">${producto.medida}</p>
      </header>
      <div class="ficha-cols">
        <ul class="bullets">${bullets}</ul>
        ${fotoHTML(producto)}
      </div>
      <div class="tira">
        <strong>RESISTENTE · DURADERO · CONFIABLE</strong>
        <span>LISTO PARA TRABAJO PESADO</span>
      </div>
    </div>
    <div class="compra">
      <p class="precio">$ ${precio}</p>
      <a class="buy" href="${producto.url}" target="_blank" rel="noopener">
        Comprar en Mercado Libre
      </a>
    </div>
  `;

  return article;
}

// Conecta el carrusel de la foto: transform por JS, puntos, flechas y swipe táctil.
function activarCarrusel(foto: HTMLElement): void {
  const track = foto.querySelector<HTMLElement>(".track");
  if (!track) return;

  const slides = Array.from(track.querySelectorAll<HTMLElement>(".slide"));
  if (slides.length <= 1) return;

  const dots = Array.from(foto.querySelectorAll<HTMLButtonElement>(".dot"));
  const prev = foto.querySelector<HTMLButtonElement>(".arrow.prev");
  const next = foto.querySelector<HTMLButtonElement>(".arrow.next");

  let indice = 0;

  const irA = (i: number) => {
    indice = Math.max(0, Math.min(slides.length - 1, i));
    track.style.transform = `translateX(${-indice * 100}%)`;
    dots.forEach((d, n) => d.classList.toggle("active", n === indice));
    slides.forEach((s, n) => {
      if (n !== indice) s.querySelector("video")?.pause();
    });
  };

  dots.forEach((dot, i) => dot.addEventListener("click", () => irA(i)));
  prev?.addEventListener("click", () => irA(indice - 1));
  next?.addEventListener("click", () => irA(indice + 1));

  let inicioX = 0;
  foto.addEventListener("touchstart", (e) => (inicioX = e.touches[0].clientX), { passive: true });
  foto.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - inicioX;
      if (Math.abs(dx) > 40) irA(dx < 0 ? indice + 1 : indice - 1);
    },
    { passive: true }
  );
}

const grid = document.querySelector<HTMLElement>("#grid");

if (grid) {
  const fragment = document.createDocumentFragment();
  for (const producto of productos) {
    fragment.appendChild(tarjeta(producto));
  }
  grid.appendChild(fragment);

  grid.querySelectorAll<HTMLElement>(".foto").forEach(activarCarrusel);
}
