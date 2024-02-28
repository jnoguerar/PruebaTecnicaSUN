import logo from './img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import './App.css';
import axiosInstance from './config/axios-config';


function App() {
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editando, setEditando] = useState(false);
  const [notas, setNotas] = useState([]);
  const [recargar, setRecargar] = useState(false);

  const [titulo, settitulo] = useState("");
  const [nota, setnota] = useState("");
  const [idActual, setidActual] = useState(0);
  const [fechaAnterior, setfechaAnterior] = useState("");

  useEffect(() => {
    const ObtenerNotas = async () => {
      axiosInstance.get("notas")
        .then(function (response) {
          setNotas(response.data.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    ObtenerNotas();
  }, [recargar])

  useEffect(() => {
    setIsLoading(false);
  }, [notas])

  useEffect(() => {
    console.log("Titulo cambiado...");
  }, [titulo])

  useEffect(() => {
    console.log("Nota cambiada...");
  }, [nota])

  const CrearNota = async () => {
    if (editando === true) {
      const resultado = axiosInstance.post("notas/modificar", {
        titulo: titulo,
        nota: nota,
        fecha: fechaAnterior,
        id: idActual
      }).then(function (response) {
        setRecargar(false);
        setidActual(0)
        setfechaAnterior("")
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } else {
      const resultado = axiosInstance.post("notas/agregar", {
        titulo: titulo,
        nota: nota,
        fecha: new Date().toDateString()
      }).then(function (response) {
        setRecargar(false);
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={4} md={2}>
            <Image src={logo} thumbnail />
          </Col>
          <Col xs={4} md={6}>
            <Card.Body>
              <Card.Title>Nombre completo del profesional.</Card.Title>
              <Card.Text>
                Prueba Técnica "Profesional de Sistemas de Computación" SUN USAC.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Row>
        <Card style={{ width: '30%' }}>
          <Card.Header className="text-center">Crear Nota</Card.Header>
          <Card.Body>
            <Card.Title>Ingrese los datos de la Nota.</Card.Title>
            <hr></hr>
            <Form noValidate validated={validated} onSubmit={CrearNota}>
              <Col className="mb-3">
                <Form.Group as={Col} md="15" controlId="tituloNota">
                  <Stack direction="horizontal" gap={2}>
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Título"
                      defaultValue={titulo}
                      onChange={(e) => settitulo(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese el título de la Nota
                    </Form.Control.Feedback>
                  </Stack>

                </Form.Group>
                <br>
                </br>
                <Form.Group as={Col} md="15" controlId="nota">
                  <Stack direction="horizontal" gap={2}>
                    <Form.Label>Nota</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      placeholder="Nota"
                      defaultValue={nota}
                      onChange={(e) => setnota(e.target.value)}
                    />
                  </Stack>
                  <Form.Control.Feedback type="invalid">
                    Ingrese el contenido de la Nota
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Button className='float-end' type='submit' variant="primary" >Guardar</Button>
            </Form>
          </Card.Body>
        </Card>

        <Card style={{ width: '70%' }}>
          <Card.Header className="text-center">Listado de Notas</Card.Header>
          <Card.Body>
            {
              isLoading ? (<h2>Cargando Notas...</h2>)
                :
                (
                  notas.map(ele => (
                    <>
                      <Card>
                        <Card.Title>{ele.titulo}</Card.Title>
                        <Card.Text>{ele.nota}</Card.Text>
                        <Row>
                          <Col className='inline'>
                            <Card.Text>{ele.fecha}</Card.Text>
                            <Stack direction="horizontal" gap={2} className='float-end'>
                              <Button variant="primary" type='button' onClick={(e) => {
                                settitulo(ele.titulo);
                                setnota(ele.nota);
                                setEditando(true);
                                setidActual(ele.id);
                                setfechaAnterior(ele.fecha);
                              }}>Editar</Button>
                              <Button variant="danger" type='button' onClick={(e) => {
                                const resultado = axiosInstance.post("notas/eliminar", {
                                  id: ele.id
                                }).then(function (response) {
                                  setRecargar(true);
                                  setIsLoading(true);
                                })
                                  .catch(function (error) {
                                    // handle error
                                    console.log(error);
                                  });
                              }}>Eliminar</Button>
                              <br></br>
                              <br></br>
                              <br></br>
                            </Stack>
                          </Col>
                        </Row>
                      </Card>
                      <br></br>
                    </>

                  ))
                )
            }
          </Card.Body>
        </Card>

      </Row>
    </>
  );
}

export default App;
