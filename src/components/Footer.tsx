export default function Footer() {
  return (
    <footer id="contacto" className="mt-auto py-4 bg-dark text-white-50">
      <div className="container">
        <div className="row g-3 align-items-center">
          <div className="col-lg-6">
            <h5 className="text-white mb-1">¿Listo para trabajar juntos?</h5>
            <small>Escríbenos a: gomezguille391@gmail.com</small>
          </div>
          <div className="col-lg-6 text-lg-end">
            {/* Botón GitHub */}
            <a
              href="https://github.com/GuillermoGome2z" // Cambia por tu enlace real
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light me-2"
            >
              <i className="bi bi-github me-1"></i> GitHub
            </a>

            {/* Botón Instagram */}
            <a
              href="https://instagram.com/guille_gomezzz2" // Cambia por tu enlace real
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ backgroundColor: "#E1306C", borderColor: "#E1306C" }}
            >
              <i className="bi bi-instagram me-1"></i> Instagram
            </a>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <p className="m-0 text-center">
          © {new Date().getFullYear()} PixelWave Studio · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
