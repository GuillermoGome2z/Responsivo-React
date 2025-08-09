🌐 PixelWave Studio – Proyecto de Diseño Responsivo en React + TypeScript + Bootstrap
📸 Capturas de Pantalla
Vista Móvil (≤600px)
(Aquí insertas la captura)

Vista Tableta (601px – 1024px)
(Aquí insertas la captura)

Vista Escritorio (>1024px)
(Aquí insertas la captura)

🎯 Descripción del Proyecto
Este proyecto es una aplicación web desarrollada en React con TypeScript y el framework de estilos Bootstrap.
El objetivo es implementar un diseño responsivo que se adapte de forma óptima a dispositivos móviles, tabletas y computadoras de escritorio.

La aplicación incluye:

Encabezado (Header) con logotipo y menú de navegación.

Contenido principal (Main) con título y párrafo descriptivo.

Sección (Section) con al menos tres tarjetas (cards) para mostrar servicios/proyectos.

Pie de página (Footer) con enlaces a redes sociales.

📱💻 Estrategia de Diseño Responsivo
El diseño responsivo se logra combinando clases utilitarias de Bootstrap y media queries personalizadas:

Móviles (≤600px):

Menú convertido en menú hamburguesa con navbar-expand-lg.

Tarjetas apiladas en 1 columna usando col-12.

Fuentes y márgenes ajustados con clamp() y clases py-*, my-*.

Tabletas (601px – 1024px):

Tarjetas en 2 columnas usando col-sm-6.

Espaciado optimizado con g-4 y clases responsivas.

Escritorio (>1024px):

Tarjetas en 3 columnas con col-lg-4.

Diseño optimizado con proporciones fluidas y ratio-16x9 para imágenes.

Ejemplo de grid responsivo usado en las tarjetas:

jsx
Copiar
Editar
<div className="col-12 col-sm-6 col-lg-4">
Ejemplo de media query personalizada en CSS:

css
Copiar
Editar
@media (max-width: 600px) {
  h1 { font-size: 1.5rem; }
}
🛠️ Stack Tecnológico
React (Vite)

TypeScript

Bootstrap 5

CSS personalizado para micro-interacciones y media queries adicionales

🚀 Despliegue
La aplicación está desplegada en Netlify:
🔗 https://tu-enlace-aqui.netlify.app

Repositorio en GitHub:
🔗 https://github.com/TuUsuario/TuRepositorio

