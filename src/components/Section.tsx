import portafolio1 from '../assets/portafolio1.jpg';
import portafolio2 from '../assets/portafolio2.jpg';
import portafolio3 from '../assets/portafolio3.jpg';
import portafolio4 from '../assets/portafolio4.jpg';
import portafolio5 from '../assets/portafolio5.jpg';
import portafolio6 from '../assets/portafolio6.jpg';

type Proyecto = { img: string; title: string; desc: string; link?: string };

const projects: Proyecto[] = [
  { 
    img: portafolio1, 
    title: 'Reunión Ejecutiva',   
    desc: 'Diseño de oficina minimalista y reuniones estratégicas para negocios modernos.' 
  },
  { 
    img: portafolio2, 
    title: 'Trabajo Remoto',  
    desc: 'Espacio acogedor para trabajo desde casa, con enfoque en productividad y bienestar.' 
  },
  { 
    img: portafolio3, 
    title: 'Branding Creativo',  
    desc: 'Propuesta de identidad visual minimalista y profesional para marcas digitales.' 
  },
  { 
    img: portafolio4, 
    title: 'Producción Multimedia', 
    desc: 'Equipo creativo desarrollando contenido audiovisual y estrategias digitales.' 
  },
  { 
    img: portafolio5, 
    title: 'Desarrollo Freelance',   
    desc: 'Proyecto de desarrollo web personalizado realizado por programador independiente.' 
  },
  { 
    img: portafolio6, 
    title: 'Consultoría Profesional',    
    desc: 'Asesoría personalizada para empresas y proyectos tecnológicos innovadores.' 
  },
];


export default function Section() {
  return (
    <>
      {/* ================= SERVICIOS ================= */}
      <section id="servicios" className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Servicios</h2>
          <p className="text-center text-secondary mb-5">
            Soluciones integrales: diseño web, branding y marketing digital.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Diseño Web</h5>
                  <p className="card-text">
                    Sitios modernos, responsivos y optimizados con las mejores prácticas.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Identidad Visual</h5>
                  <p className="card-text">
                    Logotipos, paletas de color y sistemas visuales coherentes para tu marca.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Marketing Digital</h5>
                  <p className="card-text">
                    Campañas en redes, contenidos y SEO para crecer de forma sostenible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Grid responsiva: 
    - xs: 1 col (col-12)
    - sm: 2 col (col-sm-6)
    - lg: 3 col (col-lg-4)
   Las imágenes se recortan con object-fit: cover y altura fija (200px). */}

      {/* ================= PORTAFOLIO ================= */}
   <section id="portafolio" className="py-5 bg-light border-top">
  <div className="container">
    <h2 className="mb-4 text-center">Portafolio</h2>
    <div className="row g-4">
      {projects.map((proyecto, i) => (
        <div className="col-12 col-sm-6 col-lg-4" key={i}>
          <div className="card h-100 shadow-sm">
            <img
              src={proyecto.img}
              alt={proyecto.title}
              className="card-img-top"
              style={{ objectFit: 'cover', height: '200px' }}
            />
            <div className="card-body">
              <h5 className="card-title">{proyecto.title}</h5>
              <p className="card-text text-secondary">{proyecto.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );
}
