import React from "react";
import "./Caroussel.css";
import Carousel from "react-bootstrap/Carousel";

const Caroussel = () => {
  return (
    <div className="Caroussel">
      <Carousel style={{ width: "500px", height: "350px" }} variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bassett-wainwright.tricare.mil/portals/105/Images/OralSurgery.jpg?ver=2020-08-10-173712-273"
            alt="Medecine et chirurgie buccale"
          />
          <Carousel.Caption>
            <h5>Medecine et chirurgie buccale</h5>
            <p>Définition</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1620775997780-a01e050a9db4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Orthodontie et orthopédie dentofaciale</h5>
            <p>Définition</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/dentists-with-a-patient-during-a-dental-intervention-to-boy-picture-id675727438?k=20&m=675727438&s=612x612&w=0&h=P4-r4E0jWm9BpFAsIv6dvcRLNZ5PFb8fS_WbFxQsSxQ="
            alt="fourthslide"
          />
          <Carousel.Caption>
            <h5>Dentisterie pédiatrique</h5>
            <p>Traitement des enfants</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dentiste-st-hyacinthe.com/wp-content/uploads/2013/06/parodontie.jpg"
            alt="fifthslide"
          />
          <Carousel.Caption>
            <h5>Parodontie</h5>
            <p>Traitement des maladies touchant la gencive</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.turcountry.com/wp-content/uploads/2020/02/root-canal-about.jpg"
            alt="Endodontie"
          />
          <Carousel.Caption>
            <h5>Endodontie</h5>
            <p>Définition </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.clinique-medespoir-tunisie.com/bib/2020/12/hollywood-smile-photo-avant-apres-768x477.jpg"
            alt="six"
          />
          <Carousel.Caption>
            <h5>Specialiste en prothèse fixée</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cedarcreeksmiles.com/wp-content/uploads/2021/04/depositphotos_310525048-stock-photo-dentist-holding-dentures-his-hands.jpg"
            alt="seven"
          />
          <Carousel.Caption>
            <h5>Specialiste en prothèse totale</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://centresdentairesviva.com/wp-content/uploads/2015/07/prothese-image-02.jpg"
            alt="eight"
          />
          <Carousel.Caption>
            <h5>Specialiste en prothèse partielle amovible</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caroussel;
