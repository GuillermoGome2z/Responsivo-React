# 🌐 PixelWave Studio – Proyecto de Diseño Responsivo en React + TypeScript + Bootstrap  

## 📸 Capturas de Pantalla  

| Vista Móvil (≤600px) | Vista Tableta (601px – 1024px) | Vista Escritorio (>1024px) |
|----------------------|--------------------------------|----------------------------|
| ![Móvil](ruta-captura-movil.png) | ![Tableta](ruta-captura-tablet.png) | ![Escritorio](ruta-captura-escritorio.png) |

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

**Ejemplo de grid responsivo:**
```jsx
<div className="col-12 col-sm-6 col-lg-4">
