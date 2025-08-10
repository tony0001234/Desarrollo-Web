function mostrarTabla(tipoItinerario) {
            // Ocultar todas las tablas
            const todasLasTablas = document.querySelectorAll('.tabla-container');
            todasLasTablas.forEach(tabla => {
                tabla.classList.remove('active');
            });

            // Mostrar solo la tabla seleccionada
            const tablaSeleccionada = document.getElementById('tabla-' + tipoItinerario);
            if (tablaSeleccionada) {
                tablaSeleccionada.classList.add('active');
            }

            // Actualizar el estado activo de los botones
            const todosLosBotones = document.querySelectorAll('.btn-custom');
            todosLosBotones.forEach(boton => {
                boton.classList.remove('active');
            });

            // Agregar clase active al botón seleccionado
            event.target.classList.add('active');
        }

        // Mostrar la primera tabla por defecto al cargar la página
        document.addEventListener('DOMContentLoaded', function() {
            mostrarTabla('montana');
        });



// Arreglo de nombres (12 registros)
        const nombres = [
            "María González",
            "Carlos Rodríguez",
            "Ana Martínez",
            "Luis Fernández",
            "Carmen López",
            "Diego Herrera",
            "Sofia Vargas",
            "Miguel Castillo",
            "Isabel Morales",
            "Roberto Silva",
            "Gabriela Jiménez",
            "Fernando Ruiz"
        ];

        // Arreglo de comentarios (12 registros)
        const comentarios = [
            "¡Excelente servicio! Superó todas mis expectativas. Definitivamente lo recomiendo a todos mis amigos.",
            "La atención al cliente es excepcional. Me ayudaron en todo momento y resolvieron todas mis dudas.",
            "Una experiencia increíble de principio a fin. La calidad es insuperable y el precio muy justo.",
            "Estoy muy satisfecho con mi compra. El producto llegó en perfectas condiciones y muy rápido.",
            "El mejor lugar para encontrar lo que necesitas. Personal muy amable y profesional.",
            "Calidad premium a precios accesibles. Ya he comprado varias veces y siempre quedo encantado.",
            "Servicio rápido y eficiente. La entrega fue puntual y el empaque perfecto.",
            "Una empresa confiable que cumple lo que promete. Volveré a comprar sin dudarlo.",
            "Atención personalizada y productos de primera calidad. Me siento muy valorado como cliente.",
            "Innovación y excelencia en cada detalle. Han transformado mi forma de ver este tipo de servicios.",
            "Precios competitivos y calidad garantizada. El proceso de compra fue muy sencillo.",
            "Un equipo profesional que realmente se preocupa por la satisfacción del cliente. ¡Fantástico!"
        ];

// Función para mezclar un arreglo (algoritmo Fisher-Yates)
function mezclarArreglo(arreglo) {
    const arregloMezclado = [...arreglo]; // Crear una copia
    for (let i = arregloMezclado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arregloMezclado[i], arregloMezclado[j]] = [arregloMezclado[j], arregloMezclado[i]];
    }
    return arregloMezclado;
}

// Función para generar avatar con iniciales
function generarAvatar(nombre) {
    const iniciales = nombre.split(' ').map(palabra => palabra[0]).join('');
    return iniciales.toUpperCase();
}

// Función para generar estrellas aleatorias (4-5 estrellas)
function generarEstrellas() {
    const numEstrellas = Math.random() > 0.3 ? 5 : 4;
    let estrellas = '';
    for (let i = 0; i < numEstrellas; i++) {
        estrellas += '<i class="fas fa-star"></i>';
    }
    if (numEstrellas === 4) {
        estrellas += '<i class="far fa-star"></i>';
    }
    return estrellas;
}

// Función principal para generar comentarios
function generarComentarios() {
    // Mezclar ambos arreglos
    const nombresMezclados = mezclarArreglo(nombres);
    const comentariosMezclados = mezclarArreglo(comentarios);
    
    // Seleccionar los primeros 3 de cada arreglo mezclado
    const nombresSeleccionados = nombresMezclados.slice(0, 3);
    const comentariosSeleccionados = comentariosMezclados.slice(0, 3);
    
    // Obtener el contenedor
    const contenedor = document.getElementById('contenedor-comentarios');
    
    // Limpiar contenedor
    contenedor.innerHTML = '';
    
    // Crear las tarjetas de comentarios
    for (let i = 0; i < 3; i++) {
        const nombre = nombresSeleccionados[i];
        const comentario = comentariosSeleccionados[i];
        const avatar = generarAvatar(nombre);
        const estrellas = generarEstrellas();
        
        const tarjetaHTML = `
            <div class="col-lg-4 col-md-6 col-12">
                <div class="comentario-card p-4 fade-in" style="animation-delay: ${i * 0.2}s">
                    <div class="d-flex align-items-start">
                        <div class="avatar">
                            ${avatar}
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="nombre-usuario">${nombre}</h5>
                            <div class="estrellas mb-2">
                                ${estrellas}
                            </div>
                        </div>
                    </div>
                    <p class="comentario-texto mt-3">
                        <i class="fas fa-quote-left me-2"></i>
                        ${comentario}
                        <i class="fas fa-quote-right ms-2"></i>
                    </p>
                    <div class="text-end">
                        <small class="text-muted">
                            <i class="fas fa-calendar-alt"></i> 
                            ${new Date().toLocaleDateString('es-ES')}
                        </small>
                    </div>
                </div>
            </div>
        `;
        
        contenedor.innerHTML += tarjetaHTML;
    }
}

// Generar comentarios al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    generarComentarios();
});


////////////////////////////////////////

// Variables globales
        const formulario = document.getElementById('formularioContacto');
        const modal = new bootstrap.Modal(document.getElementById('modalConfirmacion'));

        // Función para validar email
        function validarEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        // Función para validar fecha (no puede ser futura y debe ser mayor de edad)
        function validarFecha(fecha) {
            const hoy = new Date();
            const fechaNacimiento = new Date(fecha);
            const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
            const mesActual = hoy.getMonth();
            const mesNacimiento = fechaNacimiento.getMonth();
            
            if (fechaNacimiento > hoy) {
                return { valido: false, mensaje: "La fecha no puede ser futura" };
            }
            
            if (edad < 13 || (edad === 13 && mesActual < mesNacimiento)) {
                return { valido: false, mensaje: "Debes tener al menos 13 años" };
            }
            
            return { valido: true, mensaje: "" };
        }

        // Función para mostrar error en un campo
        function mostrarError(campo, mensaje) {
            campo.classList.remove('is-valid');
            campo.classList.add('is-invalid');
            const feedbackElement = campo.parentNode.querySelector('.invalid-feedback');
            if (feedbackElement) {
                feedbackElement.textContent = mensaje;
            }
        }

        // Función para mostrar éxito en un campo
        function mostrarExito(campo) {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        }

        // Función para limpiar validaciones
        function limpiarValidacion(campo) {
            campo.classList.remove('is-valid', 'is-invalid');
        }

        // Validación en tiempo real
        document.getElementById('nombre').addEventListener('input', function() {
            const valor = this.value.trim();
            if (valor.length === 0) {
                limpiarValidacion(this);
            } else if (valor.length < 2) {
                mostrarError(this, 'El nombre debe tener al menos 2 caracteres');
            } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(valor)) {
                mostrarError(this, 'El nombre solo puede contener letras y espacios');
            } else {
                mostrarExito(this);
            }
        });

        document.getElementById('fechaNacimiento').addEventListener('change', function() {
            const valor = this.value;
            if (valor === '') {
                limpiarValidacion(this);
            } else {
                const validacion = validarFecha(valor);
                if (validacion.valido) {
                    mostrarExito(this);
                } else {
                    mostrarError(this, validacion.mensaje);
                }
            }
        });

        document.getElementById('email').addEventListener('input', function() {
            const valor = this.value.trim();
            if (valor.length === 0) {
                limpiarValidacion(this);
            } else if (!validarEmail(valor)) {
                mostrarError(this, 'Por favor ingresa un email válido');
            } else {
                mostrarExito(this);
            }
        });

        document.getElementById('mensaje').addEventListener('input', function() {
            const valor = this.value.trim();
            if (valor.length === 0) {
                limpiarValidacion(this);
            } else if (valor.length < 10) {
                mostrarError(this, 'El mensaje debe tener al menos 10 caracteres');
            } else {
                mostrarExito(this);
            }
        });

        // Función principal de validación
        function validarFormulario() {
            let formularioValido = true;
            
            // Validar nombre
            const nombre = document.getElementById('nombre');
            const nombreValor = nombre.value.trim();
            if (nombreValor === '') {
                mostrarError(nombre, 'El nombre es obligatorio');
                formularioValido = false;
            } else if (nombreValor.length < 2) {
                mostrarError(nombre, 'El nombre debe tener al menos 2 caracteres');
                formularioValido = false;
            } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nombreValor)) {
                mostrarError(nombre, 'El nombre solo puede contener letras y espacios');
                formularioValido = false;
            } else {
                mostrarExito(nombre);
            }

            // Validar fecha
            const fechaNacimiento = document.getElementById('fechaNacimiento');
            const fechaValor = fechaNacimiento.value;
            if (fechaValor === '') {
                mostrarError(fechaNacimiento, 'La fecha de nacimiento es obligatoria');
                formularioValido = false;
            } else {
                const validacion = validarFecha(fechaValor);
                if (validacion.valido) {
                    mostrarExito(fechaNacimiento);
                } else {
                    mostrarError(fechaNacimiento, validacion.mensaje);
                    formularioValido = false;
                }
            }

            // Validar email
            const email = document.getElementById('email');
            const emailValor = email.value.trim();
            if (emailValor === '') {
                mostrarError(email, 'El correo electrónico es obligatorio');
                formularioValido = false;
            } else if (!validarEmail(emailValor)) {
                mostrarError(email, 'Por favor ingresa un email válido');
                formularioValido = false;
            } else {
                mostrarExito(email);
            }

            // Validar mensaje
            const mensaje = document.getElementById('mensaje');
            const mensajeValor = mensaje.value.trim();
            if (mensajeValor === '') {
                mostrarError(mensaje, 'El mensaje es obligatorio');
                formularioValido = false;
            } else if (mensajeValor.length < 10) {
                mostrarError(mensaje, 'El mensaje debe tener al menos 10 caracteres');
                formularioValido = false;
            } else {
                mostrarExito(mensaje);
            }

            return formularioValido;
        }

        // Función para mostrar loading
        function mostrarLoading(mostrar) {
            const btnText = document.querySelector('.btn-text');
            const spinner = document.querySelector('.loading-spinner');
            const btnEnviar = document.querySelector('.btn-enviar');
            
            if (mostrar) {
                btnText.style.display = 'none';
                spinner.style.display = 'inline';
                btnEnviar.disabled = true;
            } else {
                btnText.style.display = 'inline';
                spinner.style.display = 'none';
                btnEnviar.disabled = false;
            }
        }

        // Manejar envío del formulario
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validarFormulario()) {
                // Mostrar loading
                mostrarLoading(true);
                
                // Simular envío (retraso de 1 segundo)
                setTimeout(() => {
                    // Recopilar datos
                    const datosFormulario = {
                        nombre: document.getElementById('nombre').value.trim(),
                        fechaNacimiento: document.getElementById('fechaNacimiento').value,
                        email: document.getElementById('email').value.trim(),
                        mensaje: document.getElementById('mensaje').value.trim()
                    };

                    // Mostrar en consola
                    console.log('=== DATOS DEL FORMULARIO ===');
                    console.log('Nombre:', datosFormulario.nombre);
                    console.log('Fecha de Nacimiento:', datosFormulario.fechaNacimiento);
                    console.log('Email:', datosFormulario.email);
                    console.log('Mensaje:', datosFormulario.mensaje);
                    console.log('Fecha de Envío:', new Date().toLocaleString('es-ES'));
                    console.log('===============================');

                    // Mostrar datos en el modal
                    const datosEnviados = document.getElementById('datosEnviados');
                    datosEnviados.innerHTML = `
                        <div class="row">
                            <div class="col-md-6">
                                <strong><i class="fas fa-user me-1"></i> Nombre:</strong><br>
                                <span class="text-primary">${datosFormulario.nombre}</span>
                            </div>
                            <div class="col-md-6">
                                <strong><i class="fas fa-calendar me-1"></i> Fecha de Nacimiento:</strong><br>
                                <span class="text-primary">${new Date(datosFormulario.fechaNacimiento).toLocaleDateString('es-ES')}</span>
                            </div>
                            <div class="col-12 mt-2">
                                <strong><i class="fas fa-envelope me-1"></i> Email:</strong><br>
                                <span class="text-primary">${datosFormulario.email}</span>
                            </div>
                            <div class="col-12 mt-2">
                                <strong><i class="fas fa-comment me-1"></i> Mensaje:</strong><br>
                                <span class="text-muted">${datosFormulario.mensaje}</span>
                            </div>
                        </div>
                    `;

                    // Ocultar loading y mostrar modal
                    mostrarLoading(false);
                    modal.show();
                }, 1000);
            }
        });

        // Función para enviar otro mensaje
        function enviarOtroMensaje() {
            modal.hide();
            formulario.reset();
            
            // Limpiar todas las validaciones
            const campos = formulario.querySelectorAll('.form-control');
            campos.forEach(campo => limpiarValidacion(campo));
            
            // Enfocar en el primer campo
            document.getElementById('nombre').focus();
        }

        // Establecer fecha máxima en el input de fecha (hoy)
        document.addEventListener('DOMContentLoaded', function() {
            const hoy = new Date().toISOString().split('T')[0];
            document.getElementById('fechaNacimiento').setAttribute('max', hoy);
        });