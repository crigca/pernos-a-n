// Los 7 modelos de Pernos A-N (catálogo).
// `media` es la lista de fotos/videos del perno (archivos en public/media/).
// El primero es la foto principal; sumá más ítems para armar el carrusel:
//   { tipo: "imagen", src: "/media/camioneta-19-2.jpg" }
//   { tipo: "video",  src: "/media/camioneta-19.mp4" }
// `url` es la publicación de Mercado Libre de ese modelo.
// El título, subtítulo y las viñetas se arman por código según `categoria` (ver main.ts).

export interface MediaItem {
  tipo: "imagen" | "video";
  src: string;
}

export interface Producto {
  id: string;
  categoria: "Camioneta / Auto" | "Camioneta" | "Tractor";
  medida: string;
  precio: number;
  media: MediaItem[];
  url: string;
}

export const productos: Producto[] = [
  {
    id: "camioneta-19",
    categoria: "Camioneta / Auto",
    medida: "Ø 19 mm × 100 mm",
    precio: 37000,
    media: [{ tipo: "imagen", src: "/media/camioneta-19-1.png" }],
    url: "https://www.mercadolibre.com.ar/perno-enganche-autocamioneta-19mm-x-100mm-de-largo/up/MLAU3338978599",
  },
  {
    id: "camioneta-22",
    categoria: "Camioneta / Auto",
    medida: "Ø 22 mm × 125 mm",
    precio: 38000,
    media: [{ tipo: "imagen", src: "/media/camioneta-22-1.png" }],
    url: "https://www.mercadolibre.com.ar/perno-enganche-camioneta-22mm-x-125mm-de-largo/up/MLAU933910398",
  },
  {
    id: "camioneta-25",
    categoria: "Camioneta",
    medida: "Ø 25 mm × 125 mm",
    precio: 41000,
    media: [{ tipo: "imagen", src: "/media/camioneta-25-1.png" }],
    url: "https://www.mercadolibre.com.ar/perno-enganche-camioneta-254mm-x-125mm-de-largo/up/MLAU787781196",
  },
  {
    id: "tractor-22",
    categoria: "Tractor",
    medida: "Ø 22 mm × 200 mm",
    precio: 38000,
    media: [{ tipo: "imagen", src: "/media/tractor-22-1.png" }],
    url: "https://www.mercadolibre.com.ar/perno-enganche-tractor-22mm-x-20cm/up/MLAU4052085123",
  },
  {
    id: "tractor-25",
    categoria: "Tractor",
    medida: "Ø 25 mm × 200 mm",
    precio: 42000,
    media: [{ tipo: "imagen", src: "/media/tractor-25-1.png" }],
    url: "https://www.mercadolibre.com.ar/perno-de-enganche-tractor-25mm-x-200mm-de-largo/up/MLAU5416537150",
  },
  {
    id: "tractor-28",
    categoria: "Tractor",
    medida: "Ø 28 mm × 200 mm",
    precio: 43000,
    media: [{ tipo: "imagen", src: "/media/tractor-28-1.png" }],
    url: "https://www.mercadolibre.com.ar/perno-enganche-tractor-28mm-x-200mm/up/MLAU4034876875",
  },
  {
    id: "tractor-32",
    categoria: "Tractor",
    medida: "Ø 32 mm × 200 mm",
    precio: 45000,
    media: [{ tipo: "imagen", src: "/media/tractor-32-1.png" }],
    url: "https://www.mercadolibre.com.ar/perno-enganche-tractor-32mm-x-200mm-de-largo/up/MLAU4048867192",
  },
];
