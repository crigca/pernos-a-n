import { productos, type Producto } from "./data/productos";

// Arma una tarjeta por producto: badge de categoría, infografía, datos y botón a Mercado Libre.
function tarjeta(producto: Producto): HTMLElement {
  const article = document.createElement("article");
  article.className = "card";

  const precio = producto.precio.toLocaleString("es-AR");

  article.innerHTML = `
    <a class="card-media" href="${producto.url}" target="_blank" rel="noopener">
      <img src="${producto.imagen}" alt="Perno de enganche ${producto.categoria} ${producto.medida}" loading="lazy" />
    </a>
    <div class="card-body">
      <span class="badge">${producto.categoria}</span>
      <p class="medida">${producto.medida}</p>
      <p class="precio">$ ${precio}</p>
      <a class="buy" href="${producto.url}" target="_blank" rel="noopener">
        Comprar en Mercado Libre
      </a>
    </div>
  `;

  return article;
}

const grid = document.querySelector<HTMLElement>("#grid");

if (grid) {
  const fragment = document.createDocumentFragment();
  for (const producto of productos) {
    fragment.appendChild(tarjeta(producto));
  }
  grid.appendChild(fragment);
}
