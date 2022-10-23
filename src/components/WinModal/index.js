import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./index.css";

const WinModal = (args) => {
	const [showModal, setShowModal] = useState(true);

	const dismissModal = () => {
		setShowModal(false);
		window.location.reload();
	};

	return (
		<div>
			<Modal
				className="text-light"
				isOpen={showModal}
				toggle={showModal}
				{...args}
			>
				<ModalHeader className="bg-dark" toggle={showModal}>
					Congratulations!
				</ModalHeader>
				<ModalBody className="bg-dark">
					<p>You won!</p>
				</ModalBody>
				<ModalFooter className="bg-dark">
					<Button color="primary" onClick={dismissModal}>
						Dismiss
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default WinModal;
