import logo from './logo.svg';
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
  const [notas, setNotas] = useState([]);

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
  }, [])

  useEffect(() => {
    setIsLoading(false);
  }, [notas])

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    // setValidated(true);
  };

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
                Título del Proyecto.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Stack direction="horizontal" gap={2} className="">
        <Card style={{ width: '30%' }} className='overflow-auto'>
          <Card.Header className="text-center">Crear Nota</Card.Header>
          <Card.Body>
            <Card.Title>Ingrese los datos de la Nota.</Card.Title>
            <hr></hr>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Col className="mb-3">
                <Form.Group as={Col} md="15" controlId="tituloNota">
                  <Stack direction="horizontal" gap={2}>
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Título"
                      defaultValue=""
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
                      defaultValue=""
                    />
                  </Stack>
                  <Form.Control.Feedback type="invalid">
                    Ingrese el contenido de la Nota
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Button className='float-end' variant="primary">Guardar</Button>
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
                              <Button variant="primary">Editar</Button>
                              <Button variant="primary">Eliminar</Button>
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

      </Stack>
    </>
  );
}

export default App;
