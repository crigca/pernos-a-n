// Los 7 modelos de Pernos A-N.
// `imagen` es el archivo dentro de public/img/ (la infografía final de cada modelo).
// `url` es la publicación de Mercado Libre de ese modelo.

export interface Producto {
  id: string;
  categoria: "Camioneta / Auto" | "Camioneta" | "Tractor";
  nombre: string;
  medida: string;
  precio: number;
  imagen: string;
  url: string;
}

export const productos: Producto[] = [
  {
    id: "camioneta-19",
    categoria: "Camioneta / Auto",
    nombre: "Perno de enganche — Camioneta / Auto",
    medida: "Ø 19 mm × 100 mm",
    precio: 37000,
    imagen: "/img/camioneta-19.png",
    url: "https://www.mercadolibre.com.ar/perno-enganche-autocamioneta-19mm-x-100mm-de-largo/up/MLAU3338978599",
  },
  {
    id: "camioneta-22",
    categoria: "Camioneta / Auto",
    nombre: "Perno de enganche — Camioneta / Auto",
    medida: "Ø 22 mm × 125 mm",
    precio: 38000,
    imagen: "/img/camioneta-22.png",
    url: "https://www.mercadolibre.com.ar/perno-enganche-camioneta-22mm-x-125mm-de-largo/up/MLAU933910398",
  },
  {
    id: "camioneta-25",
    categoria: "Camioneta",
    nombre: "Perno de enganche — Camioneta",
    medida: "Ø 25 mm × 125 mm",
    precio: 41000,
    imagen: "/img/camioneta-25.png",
    url: "https://www.mercadolibre.com.ar/perno-enganche-camioneta-254mm-x-125mm-de-largo/up/MLAU787781196",
  },
  {
    id: "tractor-22",
    categoria: "Tractor",
    nombre: "Perno de enganche — Tractor",
    medida: "Ø 22 mm × 200 mm",
    precio: 38000,
    imagen: "/img/tractor-22.png",
    url: "https://www.mercadolibre.com.ar/perno-enganche-tractor-22mm-x-20cm/up/MLAU4052085123",
  },
  {
    id: "tractor-25",
    categoria: "Tractor",
    nombre: "Perno de enganche — Tractor",
    medida: "Ø 25 mm × 200 mm",
    precio: 42000,
    imagen: "/img/tractor-25.png",
    url: "https://www.mercadolibre.com.ar/perno-de-enganche-tractor-25mm-x-200mm-de-largo/up/MLAU5416537150",
  },
  {
    id: "tractor-28",
    categoria: "Tractor",
    nombre: "Perno de enganche — Tractor",
    medida: "Ø 28 mm × 200 mm",
    precio: 43000,
    imagen: "/img/tractor-28.png",
    url: "https://www.mercadolibre.com.ar/perno-enganche-tractor-28mm-x-200mm/up/MLAU4034876875",
  },
  {
    id: "tractor-32",
    categoria: "Tractor",
    nombre: "Perno de enganche — Tractor",
    medida: "Ø 32 mm × 200 mm",
    precio: 45000,
    imagen: "/img/tractor-32.png",
    url: "https://www.mercadolibre.com.ar/perno-enganche-tractor-32mm-x-200mm-de-largo/up/MLAU4048867192",
  },
];
