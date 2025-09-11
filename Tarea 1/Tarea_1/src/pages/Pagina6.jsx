export default function Pagina6() {
    return (
    <div>
        <h1 className="text-center text-success">Base de datos</h1>

        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
            <p className="lead text-justify mb-4">Este curso se enfoca en el diseño, implementación y gestión de bases de datos, utilizando sistemas de gestión de bases de datos relacionales y no relacionales, esenciales para el manejo eficiente de grandes volúmenes de información.</p>
            </div>
        </div>
        </div>

        <div className="container my-4">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
            <figure className="figure text-center">
                <img 
                className="img-fluid rounded shadow" 
                src="https://definicion.de/wp-content/uploads/2016/03/base-de-datos.webp" 
                alt="Imagen representativa del curso"
                loading="lazy"
                style={{ maxWidth: '600px', height: 'auto' }}
                />
                <figcaption className="figure-caption mt-2 text-muted">
                <small>La tecnología transformando el proceso educativo</small>
                </figcaption>
            </figure>
            </div>
        </div>
        </div>

        <div className="container my-5">
        <div className="row">
            <div className="col-lg-6 mb-4">
            <h2 className="text-center mb-4 text-primary">
                <i className="bi bi-database me-2"></i>
                Contenido del curso
            </h2>
            <div className="bg-light p-4 rounded shadow-sm">
                <ul className="list-unstyled">
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-primary me-2">1</span>
                    <strong>Modelado de datos</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Diseño conceptual, lógico y físico de bases de datos relacionales
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-primary me-2">2</span>
                    <strong>SQL y consultas avanzadas</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Lenguaje SQL, joins complejos, subconsultas y funciones analíticas
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-primary me-2">3</span>
                    <strong>Gestión de bases de datos relacionales</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Administración de SGBD, índices, vistas y procedimientos almacenados
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-primary me-2">4</span>
                    <strong>Introducción a bases de datos no relacionales</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Paradigmas NoSQL, documentos, grafos y almacenes clave-valor
                    </p>
                </li>
                </ul>
            </div>
            </div>

            <div className="col-lg-6 mb-4">
            <h2 className="text-center mb-4 text-success">
                <i className="bi bi-server me-2"></i>
                Puntos clave del curso
            </h2>
            <div className="bg-light p-4 rounded shadow-sm">
                <ul className="list-unstyled">
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-success me-2">🗂️</span>
                    <strong>Diseño de esquemas de bases de datos eficientes</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Normalización, integridad referencial y optimización de estructuras
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-success me-2">⚡</span>
                    <strong>Optimización de consultas SQL</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Análisis de planes de ejecución, índices y técnicas de rendimiento
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-success me-2">🔒</span>
                    <strong>Implementación de transacciones y seguridad en bases de datos</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Control de concurrencia, ACID, autenticación y autorización
                    </p>
                </li>
                <li className="mb-3 p-3 bg-white rounded shadow-sm">
                    <span className="badge bg-success me-2">🚀</span>
                    <strong>Exploración de tecnologías no relacionales como MongoDB y Redis</strong>
                    <p className="mb-0 mt-2 text-muted small">
                    Implementación práctica de bases de datos documentales y en memoria
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
                        <i className="bi bi-database-fill me-2"></i>
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
                        <strong>Modelado de datos</strong>
                    </td>
                    <td>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Proceso de definir la estructura y relaciones de los datos en una base de datos
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="badge bg-primary me-2">2</span>
                        <strong>SQL</strong>
                    </td>
                    <td>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Lenguaje de consulta estructurado utilizado para interactuar con bases de datos relacionales
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="badge bg-primary me-2">3</span>
                        <strong>Bases de datos relacionales</strong>
                    </td>
                    <td>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Sistemas que almacenan datos en tablas relacionadas entre sí
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="badge bg-primary me-2">4</span>
                        <strong>Bases de datos no relacionales</strong>
                    </td>
                    <td>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Sistemas que manejan datos sin un esquema fijo, ideales para grandes volúmenes de información no estructurada
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>

        <h2 className="text-center text-success">Contenido adicional</h2>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
            <p className="lead text-justify mb-4">El curso incluye prácticas de diseño de bases de datos, ejercicios de optimización de consultas y proyectos de implementación. Se enfatiza la importancia de la integridad y seguridad de los datos en aplicaciones reales.</p>
            </div>
        </div>
        </div>
    </div>
    );
}
