import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Col,
  Container,
} from 'reactstrap';

// import "./styles.css";

// import { format } from 'date-fns';

import api from '../../../../../services/api';

const ViewClientModal = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const [client, setClient] = useState([]);

  const toggle = () => setModal(!modal);

  async function loadClients() {
    setModal(!modal);

    const responseClient = await api.get(`/client/${props.clientId}`);
    setClient(responseClient.data);
  }

  return (
    <>
      <Button className={props.class} onClick={() => loadClients()}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} className={className} centered>
        <ModalHeader toggle={toggle}>Detalhes do Cliente</ModalHeader>
        <ModalBody>
          <Col sm="12">
            <Container fluid>
              <section>
                <br />
                <strong>Nome:</strong> {client.name}
                <br />
                <strong>CPF:</strong> {client.cpf}
                <br />
                <strong>Número da Conta:</strong> {client.account}
                <br />
              </section>
            </Container>
          </Col>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Sair
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ViewClientModal;
