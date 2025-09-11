export default function Pagina3() {
    return (

    <div>
        <h1 className="text-center text-success">Fisica 1</h1>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
            <p className="lead text-justify mb-4">Este curso introduce los principios fundamentales de la física, incluyendo mecánica, termodinámica y electromagnetismo, esenciales para comprender fenómenos naturales y aplicaciones tecnológicas.</p>
            </div>
        </div>
        </div>

        <div className="container my-4">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
            <figure className="figure text-center">
                <img 
                className="img-fluid rounded shadow" 
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=734x10000:format=jpg/path/s5080262fae55b3d2/image/i16a934f2a68799f4/version/1528053631/image.jpg" 
                alt="Imagen representativa del curso"
                loading="lazy"
                style={{ maxWidth: '600px', height: 'auto' }}
                />
                <figcaption className="figure-caption mt-2 text-muted">
                <small>Fundamentos de la física para la ingeniería</small>
                </figcaption>
            </figure>
            </div>
        </div>
        </div>

        <div className="container my-5">
        <div className="row">
            <div className="col-lg-6 mb-4">
            <h2 className="text-center mb-4 text-primary">
                <i className="bi bi-calculator me-2"></i>
                Contenido del curso
            </h2>
            <div className="bg-light p-4 rounded shadow-sm">
                <ul className="list-unstyled">
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-primary me-2">1</span>
                    <strong>Mecánica clásica</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Estudio del movimiento y las fuerzas que actúan sobre los objetos
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-primary me-2">2</span>
                    <strong>Termodinámica</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Análisis de la energía térmica y sus transformaciones
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-primary me-2">3</span>
                    <strong>Electromagnetismo</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Principios de electricidad, magnetismo y ondas electromagnéticas
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-primary me-2">4</span>
                    <strong>Óptica</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Comportamiento de la luz y formación de imágenes
                    </p>
                </li>
                </ul>
            </div>
            </div>

            <div className="col-lg-6 mb-4">
            <h2 className="text-center mb-4 text-success">
                <i className="bi bi-gear me-2"></i>
                Puntos clave del curso
            </h2>
            <div className="bg-light p-4 rounded shadow-sm">
                <ul className="list-unstyled">
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-success me-2">⚡</span>
                    <strong>Leyes de Newton y movimiento</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Fundamentos de la dinámica y cinemática de partículas
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-success me-2">🔋</span>
                    <strong>Principios de conservación de energía y momento</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Leyes fundamentales que rigen los sistemas físicos
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-success me-2">🧲</span>
                    <strong>Conceptos básicos de electricidad y magnetismo</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Campos eléctricos, magnéticos y sus interacciones
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-success me-2">💡</span>
                    <strong>Propiedades de la luz y óptica geométrica</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Reflexión, refracción y formación de imágenes
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
            Tabla de conceptos clave
        </h2>
        <div className="row justify-content-center">
            <div className="col-lg-10">
            <div className="table-responsive shadow rounded">
                <table className="table table-striped table-bordered mb-0">
                <thead className="table-success">
                    <tr>
                    <th scope="col" className="text-center">
                        <i className="bi bi-lightbulb me-2"></i>
                        Concepto
                    </th>
                    <th scope="col" className="text-center">
                        <i className="bi bi-journal-text me-2"></i>
                        Descripción
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        <span className="badge bg-primary me-2">1</span>
                        <strong>Ley de Newton</strong>
                    </td>
                    <td>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Describe el movimiento de los cuerpos bajo fuerzas externas
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="badge bg-primary me-2">2</span>
                        <strong>Termodinámica</strong>
                    </td>
                    <td>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Estudia las relaciones entre calor, trabajo y energía
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="badge bg-primary me-2">3</span>
                        <strong>Electromagnetismo</strong>
                    </td>
                    <td>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Analiza las interacciones entre cargas eléctricas y campos magnéticos
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="badge bg-primary me-2">4</span>
                        <strong>Óptica</strong>
                    </td>
                    <td>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Estudia el comportamiento de la luz y sus interacciones con la materia
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
            <p className="lead text-justify mb-4">El curso incluye experimentos prácticos, simulaciones y problemas para resolver, fomentando una comprensión profunda de los conceptos físicos.</p>
        </div>
        </div>
        </div>
        
    </div>
    );
}