import React from "react";
import JF from "../../assets/images/JesusFdz.jpg";
import { Title } from "../../components/Title";

export const ContactPage = () => {
  return (
    <>
      <Title clases="text-center" name="Contact" />
      <section className="row">
        <article className="col">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-3">
                <img src={JF} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h2 className="card-title">Jesus Fernandez</h2>
                  <div class="container">
                    <div className="row">
                      <div className="col-2">
                        <p>
                          <strong>Telefono: </strong>
                        </p>
                        <p>
                          <strong>Correo: </strong>
                        </p>
                      </div>
                      <div className="col">
                        <p>+52 (899) 122-70-12</p>
                        <p>jesus_fdz93@hotmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
