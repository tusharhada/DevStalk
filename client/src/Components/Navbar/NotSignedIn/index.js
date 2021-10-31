import React, { useState } from "react";
import Modal from "Components/Utilities/OverlayModal";
import Form from "Components/AuthForm";

const NotSignedIn = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formType, setFormType] = useState("");

  return (
    <>
      <button
        className="nav__el primary_button primary_button--light"
        onClick={() => {
          setOpenModal(true);
          setFormType("signin");
        }}
        href="#"
      >
        Sign in
      </button>
      <button
        className="nav__el primary_button primary_button--dark"
        onClick={() => {
          setOpenModal(true);
          setFormType("register");
        }}
      >
        Sign up
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Form formType={formType} />
      </Modal>
    </>
  );
};

export default NotSignedIn;
