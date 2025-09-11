export default function Pagina2() {
    return (
    <div>
        <h1 className="text-center text-success">Desarrollo Humano y profesional</h1>
        
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
            <p className="lead text-justify mb-4">Este curso se centra en el desarrollo de habilidades 
                interpersonales, liderazgo y ética profesional, fundamentales para el éxito en el ámbito
                 laboral.</p>
                </div>
        </div>
        </div>

        <div className="container my-4">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
            <figure className="figure text-center"></figure>
                <img 
                className="img-fluid rounded shadow" 
                src="https://didactic.uaslp.mx/pluginfile.php/578294/course/overviewfiles/desarrollo%20humano.jpg" 
                alt="Imagen representativa del curso"
                loading="lazy"
                style={{ maxWidth: '600px', height: 'auto' }}
                />
                <figcaption className="figure-caption mt-2 text-muted">
                <small>Desarrollo de habilidades para el éxito profesional</small>
                </figcaption>
            </div>
        </div>
        </div>

        <div className="container my-5">
        <div className="row">
            <div className="col-lg-6 mb-4">
            <h2 className="text-center mb-4 text-primary">
                <i className="bi bi-book-half me-2"></i>
                Contenido del curso
            </h2>
            <div className="bg-light p-4 rounded shadow-sm">
                <ul className="list-unstyled">
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-primary me-2">1</span>
                    <strong>Habilidades de comunicación</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Desarrollo de técnicas de comunicación asertiva y efectiva
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-primary me-2">2</span>
                    <strong>Liderazgo y trabajo en equipo</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Competencias para liderar equipos de alto rendimiento
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-primary me-2">3</span>
                    <strong>Ética profesional</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Principios éticos en el ejercicio profesional
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-primary me-2">4</span>
                    <strong>Gestión del tiempo</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Técnicas de productividad y organización personal
                    </p>
                </li>
                </ul>
            </div>
            </div>

            <div className="col-lg-6 mb-4">
            <h2 className="text-center mb-4 text-success">
                <i className="bi bi-lightbulb me-2"></i>
                Puntos clave del curso
            </h2>
            <div className="bg-light p-4 rounded shadow-sm">
                <ul className="list-unstyled">
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-success me-2">★</span>
                    <strong>Desarrollo de la inteligencia emocional</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Autoconocimiento y manejo emocional efectivo
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-success me-2">★</span>
                    <strong>Resolución de conflictos en el entorno laboral</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Estrategias de mediación y resolución pacífica
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-success me-2">★</span>
                    <strong>Importancia de la ética y los valores</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Construcción de integridad personal y profesional
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-success me-2">★</span>
                    <strong>Planificación y establecimiento de metas personales</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Metodologías para el logro de objetivos
                    </p>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>


        <div className="container my-5">
        <h2 className="text-center mb-4 text-primary">
            <i className="bi bi-clipboard-data me-2"></i>
            Tabla de habilidades y beneficios
        </h2>
        <div className="row justify-content-center">
            <div className="col-lg-10">
            <div className="table-responsive shadow rounded">
                <table className="table table-striped table-bordered mb-0">
                <thead className="table-success">
                    <tr>
                    <th scope="col" className="text-center">
                        <i className="bi bi-tools me-2"></i>
                        Habilidad
                    </th>
                    <th scope="col" className="text-center">
                        <i className="bi bi-trophy me-2"></i>
                        Beneficio
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        <span className="badge bg-primary me-2">1</span>
                        <strong>Comunicación efectiva</strong>
                    </td>
                    <td>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Mejora la colaboración y reduce malentendidos
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="badge bg-primary me-2">2</span>
                        <strong>Liderazgo</strong>
                    </td>
                    <td>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Facilita la gestión de equipos y proyectos
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="badge bg-primary me-2">3</span>
                        <strong>Ética profesional</strong>
                    </td>
                    <td>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Fomenta la confianza y la reputación
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="badge bg-primary me-2">4</span>
                        <strong>Gestión del tiempo</strong>
                    </td>
                    <td>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Aumenta la productividad y reduce el estrés
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>

        <h2 className="text-center mb-4 text-success">Contenido adicional</h2>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
            <p className="lead text-justify mb-4">
            El curso incluye actividades prácticas, estudios de caso y autoevaluaciones para reforzar el aprendizaje. Se recomienda la participación activa y la reflexión personal para aprovechar al máximo los contenidos.
        </p></div>
        </div>
        </div>

    </div>
    );
}