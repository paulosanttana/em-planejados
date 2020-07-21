import React from 'react';
import './App.css';

import {FaWhatsappSquare, FaFacebookSquare, FaWhatsapp} from 'react-icons/fa';

import {Button, Navbar, Nav, Form, NavDropdown, Carousel } from 'react-bootstrap';


function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">EM-Planejados</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#servico">Serviço</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <Carousel id="home">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/img/kitchen.png'}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Móveis Para Cozinha</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="btn-orcamento">
              {/* <a href="https://wa.me/5561996365507">Faça um ORÇAMENTO!</a> */}
              <a href="https://web.whatsapp.com/send?phone=5561982441341&amp;text=Quero fazer um orçamento..." target="_blank">Faça um ORÇAMENTO!</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/img/kitchen.png'}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>Casa com seu Estilo</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="btn-orcamento">ORÇAMENTO</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/img/kitchen.png'}
            alt="kitchen slide"
          />

          <Carousel.Caption>
            <h2>Third slide label</h2>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <button className="btn-orcamento">ORÇAMENTO</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <button id="btn-orcamento">Orçamento</button>

      <section className="txt-template">
        <h3>Compromisso</h3>
        <div className="line"></div>
      </section>

      <section className="cards-compromise">
        <div className="card-compromise">
          <img src={process.env.PUBLIC_URL + '/img/engineers.svg'} alt="engineers"/>
          <h3>Profissional</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur consectetur.</p>
        </div>
        <div className="card-compromise">
          <img src={process.env.PUBLIC_URL + '/img/specs.svg'} alt="specs"/>
          <h3>Orçamento</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur consectetur.</p>
        </div>
        <div className="card-compromise">
          <img src={process.env.PUBLIC_URL + '/img/contract.svg'} alt="contract"/>
          <h3>Contrato</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur consectetur.</p>
        </div>
      </section>

      <section className="conte-nos" id="sobre">
        <div className="conte-nos-contato">
          <h3>Conte-nos o seu sonho que nós realizaremos!</h3>
          <p>Serviço de QUALIDADE, Entrega no PRAZO e Satisfação GARANTIDA. é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos</p>
          <div className="btn-conte-nos">
            <div className="btn-social">
              <a href="https://web.whatsapp.com/send?phone=5561982441341&amp;text=Quero fazer um orçamento..." target="_blank">
                <FaWhatsappSquare /> 
                <span>Whatsapp</span>
              </a>
            </div>
            <div className="btn-social">
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebookSquare />
                 <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <img src={process.env.PUBLIC_URL + '/img/light-man.svg'} alt="luz"/>
      </section>

      <section className="txt-template" id="servico">
        <h3>Serviços</h3>
        <div className="line"></div>
      </section>

      {/* <section className="slider-servicos"> */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/img/kitchen.png'}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/img/kitchen.png'}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/img/kitchen.png'}
              alt="kitchen slide"
            />
          </Carousel.Item>
        </Carousel>
      {/* </section>             */}

     <section className="contato">
       <img src={process.env.PUBLIC_URL + '/img/contact_us_1.svg'} alt="contact"/>
       <Form>
          <Form.Group controlId="formBaseicText">
            <Form.Control type="text" placeholder="Nome Completo"/>
          </Form.Group>
          
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>

          <Form.Group controlId="formBaseicText">
            <Form.Control type="text" placeholder="Telefone (99) 99999-9999"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
     </section>

     <section className="footer"></section>
    </>
  );
}

export default App;
