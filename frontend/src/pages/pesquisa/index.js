import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from './styles';
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  Container,
  Table,
  InputGroup,
} from 'reactstrap';

import api from '../../services/api';
import InputMask from 'react-input-mask';
import ViewClientModal from './components/Clients/view';
import './filter';

import NavBar from './components/NavBar';

const Clientes = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [account, setAccount] = useState('');
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function carregaClientes() {
      const response = await api.get('/client');

      setClientes(response.data);
    }

    carregaClientes();
  }, []);

  async function handleSubmit(event) {
  

    try {
      await api.post('/client', {
        name,
        cpf,
        account,
      });
    } catch (error) {
      alert(error);
    }
  }

  const cliente = clientes.map((pessoas) => {
    return (
      <tr id="myTable" key={pessoas.id}>
        <th scope="row">{pessoas.id}</th>
        <td>{pessoas.name}</td>
        <td>{pessoas.cpf}</td>
        <td>{pessoas.account}</td>
        <td />
        <td className="table-content">
          <ViewClientModal
            class="btn button-editar btn-success"
            className="modal-lg"
            buttonLabel="Visualizar"
            clientId={pessoas.account}
          />

      
        </td>
      </tr>
    );
  });

  return (
    <>
      <NavBar />
      <Container fluid>
        <Card className="card-body shadow border-0">
          <h4> Cadastro</h4>
          <Form onSubmit={handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Nome</Label>
                  <Input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Ex. João André"
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col md={3}>
                <FormGroup>
                  <Label for="cpf">CPF</Label>
                  <Input
                    type="text"
                    name="cpf"
                    id="cpf"
                    mask="999.999.999-99"
                    tag={InputMask}
                    placeholder="Digitar Somente Números"
                    value={cpf}
                    required
                    onChange={(event) => setCpf(event.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={9}>
                <FormGroup>
                  <Label for="account">Número da Conta</Label>
                  <Input
                    type="number"
                    name="account"
                    value={account}
                    required
                    onChange={(event) => setAccount(event.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Button type="submit" color="success">
              Salvar
            </Button>
          </Form>
        </Card>

        <InputGroup className="input-search">
          <Input
            type="search"
            className="light-table-filter"
            data-table="order-table"
            placeholder="Pesquisar"
          />
        </InputGroup>

        <Table id="example" className="order-table" responsive hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Número da Conta</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>{cliente}</tbody>
        </Table>
      </Container>
    </>
  );
};
export default Clientes;
