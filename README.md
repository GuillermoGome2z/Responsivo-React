# 🌐 PixelWave Studio – Proyecto de Diseño Responsivo en React + TypeScript + Bootstrap  

## 📸 Capturas de Pantalla

| Vista Móvil (≤600px) | Vista Tableta (601px – 1024px) | Vista Escritorio (>1024px) |
|----------------------|--------------------------------|----------------------------|
| ![Móvil](./assets/mobile.png) | ![Tableta](./assets/tableta.png) | ![Escritorio](./assets/computadora.png) |


---

## 📝 Descripción del Proyecto  

Este proyecto es una aplicación web desarrollada con **React**, **TypeScript** y **Bootstrap**, diseñada para ofrecer una experiencia **responsiva** que se adapta a dispositivos móviles, tabletas y computadoras de escritorio.  

### Características principales:  
- **Encabezado (Header)** con logotipo y menú de navegación.  
- **Contenido principal (Main)** con título y párrafo descriptivo.  
- **Sección (Section)** con tres tarjetas (cards) mostrando servicios o proyectos.  
- **Pie de página (Footer)** con enlaces a redes sociales.  

---

## 📱💻 Estrategia de Diseño Responsivo  

La adaptación de la interfaz se realiza mediante una combinación de **clases utilitarias de Bootstrap** y **media queries personalizadas**:  

### Móviles (≤600px)  
- Menú hamburguesa (`navbar-expand-lg`).
- Tarjetas en **1 columna** (`col-12`).
- Fuentes y márgenes adaptados con `clamp()` y clases `py-*`, `my-*`.

### Tabletas (601px – 1024px)  
- Tarjetas en **2 columnas** (`col-sm-6`).
- Espaciado optimizado con `g-4`.

### Escritorio (>1024px)  
- Tarjetas en **3 columnas** (`col-lg-4`).
- Proporciones fluidas con `ratio-16x9` para imágenes.

## 📱💻 Estrategia de Responsividad

Se usaron **clases responsivas de Bootstrap** y **CSS propio**:
**Ejemplo de grid:**
<div className="col-12 col-sm-6 col-lg-4">

- **Móviles (≤600px)**
  - Navegación colapsada (hamburguesa) mediante `navbar-expand-lg`.
  - Tarjetas en **1 columna**: `col-12`.
  - Tipografía fluida con `clamp()` y ajustes de espacios con `py-*`, `my-*`.

- **Tabletas (601px–1024px)**
  - Tarjetas en **2 columnas**: `col-sm-6`.
  - Espaciado con `g-4`.

- **Escritorio (>1024px)**
  - Tarjetas en **3 columnas**: `col-lg-4`.
  - Proporciones de imagen estables con `ratio-16x9` o `object-fit: cover`.

**Ejemplo de grid:**
```jsx
<div className="row g-4">
  <div className="col-12 col-sm-6 col-lg-4">
    {/* Card */}
  </div>
</div>
```


##Ejemplo de media query documentada en CSS:**

css
Copiar
Editar
/* ≤600px: mejora legibilidad en móvil */
@media (max-width: 600px) {
  h1.display-5 { font-size: 1.8rem; }
  .navbar-brand span { font-size: 1rem; }
}
🧰 Stack
React (Vite)

TypeScript

Bootstrap 5

CSS (micro-interacciones y ajustes de responsividad)

🚀 Despliegue
Demo en Netlify: https://TU-SITIO-NETLIFY.netlify.app

Repositorio: https://github.com/GuillermoGome2z/Responsivo-React

Para desplegar en Netlify (con Git): Build: npm run build • Publish directory: dist/.

▶️ Desarrollo local
bash
Copiar
Editar
# instalar dependencias
npm install

# entorno de desarrollo
npm run dev

# compilar para producción
npm run build

# servir build local (opcional)
npm run preview


