import hero from '../assets/Hero.jpg';
import logo from '../assets/logo.svg'; // ← tu archivo logo.svg en /src/assets

export default function Encabezado() {
  return (
    <header className="bg-light border-bottom">
      <div className="container py-5">
        <div className="row align-items-center g-4">

          {/* Columna de TEXTO (izquierda en desktop) */}
          <div className="col-lg-6 order-2 order-lg-1">

            {/* Logo + nombre */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <a href="#" className="brand-logo" aria-label="Ir al inicio" title="Inicio">
                <img
                  src={logo}
                  alt="PixelWave Studio logo"
                  style={{ height: '48px', width: '48px' }}
                />
              </a>
              <h1 className="display-6 fw-bold m-0">PixelWave Studio</h1>
            </div>

            <p className="lead text-secondary">
              Diseño web, identidad visual y marketing digital para impulsar tu marca.
            </p>

            <div className="d-flex gap-2">
              <a href="#contacto" className="btn btn-primary btn-lg">Contáctanos</a>
              <a href="#portafolio" className="btn btn-outline-primary btn-lg">Ver Portafolio</a>
            </div>
          </div>

          {/* Columna de IMAGEN (derecha en desktop) */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="ratio ratio-16x9 bg-body-secondary rounded-3 shadow">
              <img
                src={hero}
                alt="Equipo creativo trabajando"
                className="w-100 h-100 rounded-3"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
