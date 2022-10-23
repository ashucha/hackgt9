import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import "./index.css";

function IntroModal(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>
      <FontAwesomeIcon icon={faInfoCircle} size={50} />
      </Button>
      <Modal className="text-light" isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader className="bg-dark" toggle={toggle}>How to Play</ModalHeader>
        <ModalBody className="bg-dark">
          We give you different pieces of a song, you have 6 guesses to guess the name of the song.
        <div>
        <Badge color="dark">1. Extreme</Badge> Just the percussion and base
        </div>
        <div>
        <Badge color="danger">2. Challenging</Badge> Distorted pitch and speed
        </div>
        <div>
        <Badge color="warning">3. Hard</Badge> Main Instrumentals and Melody
        </div>
        <div>
        <Badge color="info">4. Moderate</Badge> Leading Vocals
        </div>
        <div>
        <Badge color="primary">5. Easy</Badge> All of the pieces, just jumbled a little
        </div>
        <div>
        <Badge color="success">6. Very Easy</Badge> Full Chorus!
        </div>
        <div>Time to see if you have the ear to pick out some of these classic songs!</div>
        </ModalBody>
        <ModalFooter className="bg-dark">
          <Button color="primary" onClick={toggle}>
            Let's Play!
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default IntroModal;