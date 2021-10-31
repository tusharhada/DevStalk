import React, { useState } from "react";
import Modal from "Components/Utilities/OverlayModal";
import UploadProject from "Components/Project/UploadProject";

const PostProject = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="nav__el">
      <button
        className="primary_button primary_button--dark"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Upload
      </button>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <UploadProject />
      </Modal>
    </div>
  );
};

export default PostProject;
