import React from "react";
import ReactDom from "react-dom";

const Modal = ({open, children, onClose}) => {
        if (!open) return null;
        return ReactDom.createPortal(
                <>
                        <div className="overlay" onClick={onClose}></div>
                        <div className="modal">
                                {children}
                        </div>
                </>,
                document.getElementById("portal")
        );
}

export default Modal;
