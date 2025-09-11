import { Link } from "react-router-dom";

export default function Home() {
    return (
    <div >

        <h1 className="text-center text-success">Cursos clave hasta octavo ciclo</h1>

        <div className="container my-4">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
            <figure className="figure text-center">
                <img 
                className="img-fluid rounded shadow" 
                src="https://ascenty.com/wp-content/uploads/2022/04/tecnologia-na-educa%C3%A7%C3%A3o.png" 
                alt="Tecnología aplicada en la educación moderna - estudiantes usando dispositivos digitales"
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

        <div className="container mt-4">
            <h2 className="mb-4 text-center text-primary">
                <i className="bi bi-list-ul me-2 "></i>
                Índice de Materias
            </h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <ul className="list-group">
                    <li className="list-group-item">
                    <Link to="/pagina2" className="text-decoration-none">
                        <i className="bi bi-arrow-right-circle me-2"></i>
                        Desarrollo Humano y Profesional
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/pagina3" className="text-decoration-none">
                        <i className="bi bi-arrow-right-circle me-2"></i>
                        Física I
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/pagina4" className="text-decoration-none">
                        <i className="bi bi-arrow-right-circle me-2"></i>
                        Programación III
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/pagina5" className="text-decoration-none">
                        <i className="bi bi-arrow-right-circle me-2"></i>
                        Electrónica Digital
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/pagina6" className="text-decoration-none">
                        <i className="bi bi-arrow-right-circle me-2"></i>
                        Base de Datos
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </div>

        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
            <p className="lead text-justify mb-4">Esta página tiene como objetivo presentar un resumen de los cursos fundamentales
            de la carrera de Ingeniería de Sistemas hasta el octavo ciclo, proporcionando
            una breve descripción de cada uno para orientar a los estudiantes en su formación académica.</p>
                </div>
        </div>
        </div>
        
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
            <p className="lead text-justify mb-4">Los cursos seleccionados abarcan áreas clave como desarrollo humano, programación, física,
            electrónica digital y bases de datos, esenciales para el desarrollo profesional en el campo de la ingeniería.</p>
            </div>
        </div>
        </div>
        
        <br/>
        <a className="text-decoration-none " href="https://github.com/tony0001234">Anthony Fabian Ramirez Orellana. Carnet: 9490-22-958</a>
        
    </div>
  );
}