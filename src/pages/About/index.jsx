import React from "react";
import { Title } from "../../components/Title";
import JF from "../../assets/images/JesusFdz.jpg";
import cronograma from "../../assets/images/cronograma.png";

export const AboutPage = () => {
  return (
    <>
      <Title clases="text-center" name="About" />
      <section className="row">
        <article className="col">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-3">
                <img src={JF} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">Jesus Fernandez</h5>
                  <p className="card-text">
                    Hola, mi nombre es Jesus Fernandez, soy de Reynosa
                    Tamaulipas Mexico.
                  </p>
                  <p className="card-text">
                    Soy Fullstack developer. Trabajo como desarrollador de
                    aplicaciones para una empresa llamada Mega desde el 2013.
                  </p>
                  <p className="card-text">
                    He estado trabajando en esta empresa por 9 años y a lo largo
                    de mi estancia he aprendido y convivido con muchas personas
                    cuyas historias son muy interesantes.
                  </p>
                  <p className="card-text">
                    Dentro de las tecnologias aprendidas puedo destacar:
                    ASP.net, C#, SQL, IIS, HTML, CSS, Javascript, React, Node
                    JS, etc.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="row pt-4">
        <article className="col">
          <header>
            <h2>Experiencia laboral</h2>
          </header>
        </article>
      </section>
      <section className="row">
        <article className="col">
          <h4>Hitos mas importantes</h4>
          <img src={cronograma} alt="" className="img-fluid" />
        </article>
      </section>
      <section className="row pt-4">
        <article className="col">
          <header>
            <h2>Tecnologias utilizadas</h2>
          </header>
        </article>
      </section>
      <section className="row pb-4">
        <article className="col-md-4">
          <h4>Lenguajes de programacion</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">C</li>
            <li className="list-group-item">C++</li>
            <li className="list-group-item">C#</li>
            <li className="list-group-item">Python</li>
            <li className="list-group-item">JavaScript</li>
          </ul>
        </article>
        <article className="col-md-4">
          <h4>Tecnologias WEB</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">Fire Base</li>
          </ul>
        </article>
        <article className="col-md-4">
          <h4>Bases de datos</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">SQL</li>
            <li className="list-group-item">Mongo DB</li>
            <li className="list-group-item">My SQL</li>
          </ul>
        </article>
        <article className="col-md-4">
          <h4>Repositorios y almacenamiento</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">GitHub</li>
            <li className="list-group-item">Azure DevOps</li>
            <li className="list-group-item">Google Drive</li>
            <li className="list-group-item">Cloudinary</li>
          </ul>
        </article>
        <article className="col-md-4">
          <h4>Deploys</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Heroku</li>
            <li className="list-group-item">GitHub Pages</li>
            <li className="list-group-item">IIS</li>
            <li className="list-group-item">PM2</li>
          </ul>
        </article>
        <article className="col-md-4">
          <h4>Librerias</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">React JS</li>
            <li className="list-group-item">React Native</li>
            <li className="list-group-item">Node JS</li>
          </ul>
        </article>
      </section>
      <section className="row pt-4">
        <article className="col">
          <header>
            <h2>Librerias consumidas</h2>
            <p>
              A lo largo de mis trabajos he consumido librerias diversas
              fuentes, dependiendo del proposito del proyecto.
            </p>
          </header>
        </article>
      </section>
      <section className="row pb-4">
        <article className="col-md-6">
          <h5>Front End</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>bootstrap</strong>: Para el diseño de la aplicacion
            </li>
            <li className="list-group-item">
              <strong>bootstrap-icons</strong>: Se usa para poner iconos de
              bootstrap
            </li>
            <li className="list-group-item">
              react: Framework utilizado para hacer el frontend
            </li>
            <li className="list-group-item">
              react-hook-form: Libreria para el manejo de formularios
            </li>
            <li className="list-group-item">
              react-hot-toast: Libreria para las alertas tipo toast
            </li>
            <li className="list-group-item">
              react-redux: Integra hooks de redux para react
            </li>
            <li className="list-group-item">
              react-router-dom: Para el manejo de las rutas
            </li>
            <li className="list-group-item">
              redux: Se utiliza para el manejo global del estado
            </li>
            <li className="list-group-item">
              redux-thunk: Para crear el store o fuente unica de la informacion
            </li>
            <li className="list-group-item">
              stripe: Funciona para la pasarela de pagos
            </li>
            <li className="list-group-item">
              sweetalert2: Genera alertas agradables al ojo humano
            </li>
            <li className="list-group-item">
              crypto-js: Libreria para ecriptar y desencriptar informacion
              enviada al backend
            </li>
            <li className="list-group-item">flag-icons: Iconos de banderas</li>
            <li className="list-group-item">
              graphql: Metodo de conexion alterna a REST
            </li>
            <li className="list-group-item">i18next: Para cambiar el idioma</li>
            <li className="list-group-item">
              socket.io-client: Cliente de sockets para aplicacion en tiempo
              real
            </li>
            <li className="list-group-item">
              sweetalert2: Mensajes estilizados tipo alertas
            </li>
            <li className="list-group-item">
              uuid: Para la generacion de ID's unicos
            </li>
            <li className="list-group-item">
              yup: Para la validacion de formularios
            </li>
          </ul>
        </article>
        <article className="col">
          <h5>Back End</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              bcrypt: Para encriptar y comparar contraseñas
            </li>
            <li className="list-group-item">
              cloudinary: Para subir y consumir fotos en la nube de cloudinary
            </li>
            <li className="list-group-item">
              cors: Sirve para comunicar por http diferentes dominios
            </li>
            <li className="list-group-item">
              dotenv: Manejo de informacion mediante variables de entorno
            </li>
            <li className="list-group-item">
              express: Libreria para el manejo de las rutas endpoints
            </li>
            <li className="list-group-item">
              express-fileupload: Libreria para subir archivos mediante express
            </li>
            <li className="list-group-item">
              express-validator: Libreria para hacer validaciones mediante
              express
            </li>
            <li className="list-group-item">
              jsonwebtoken: Para generar el token a usuarios autenticados
            </li>
            <li className="list-group-item">
              mongoose: Comunicar con la base de datos Mongo DB
            </li>
            <li className="list-group-item">
              stripe: Se utiliza como pasarela de pago del lado de backend
            </li>
            <li className="list-group-item">
              uuid: Para la generacion de ID's unicos
            </li>
            <li className="list-group-item">
              apollo-server-express: Para crear un servidor y usar
            </li>
            <li className="list-group-item">qrcode: descripcion</li>
            <li className="list-group-item">socket.io: descripcion</li>
            <li className="list-group-item">speakeasy: descripcion</li>
            <li className="list-group-item">stripe: descripcion</li>
            <li className="list-group-item">uuid: descripcion</li>
          </ul>
        </article>
      </section>
    </>
  );
};
