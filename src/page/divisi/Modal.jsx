/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, {
  useState,
  useContext,
  cloneElement,
  createContext,
} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import "./modal.scss";
// import "./App.css";
// import "./fonts/Proxima Nova Alt Bold.otf";
// import "./fonts/Proxima Nova Alt Thin.otf";
import { ImCancelCircle } from "react-icons/im";

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

const ModalContext = createContext();

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
}

function ModalDismissButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext);

  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  });
}

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext);

  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  });
}

function ModalContentsBase(props) {
  const [isOpen, setIsOpen] = useContext(ModalContext);
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} {...props}>
      {props.children}
    </Dialog>
  );
}

function ModalContents({ title, children, img, link, ...props }) {
  return (
    <ModalContentsBase {...props}>
      <div className="modal-container">
        <div css={{ display: "flex", justifyContent: "flex-end" }}>
          <ModalDismissButton>
            <i
              style={{
                position: "absolute",
                top: "30px",
                right: "30px",
                cursor: "pointer",
                color: "#005683",
                fontSize: "24px",
                fontFamily: "sans-serif",
                fontStyle: "normal",
                zIndex: "1",
              }}>
              <ImCancelCircle />
            </i>
          </ModalDismissButton>
        </div>
        <div className="modal-content">
          <img
            src={img}
            width="225px"
            alt="logo divisi"
            className="logo-modal"
          />
          <div className="modal-kanan">
            <DialogTitle className="judul">{title}</DialogTitle>
            <p className="isi">{children}</p>
          </div>
        </div>

        {/* <div className="button">
          <a href={link}>
            <button className="buttondaftar"  target="_blank">
              CEK HASIL WAWANCARA
            </button>
          </a>
        </div> */}
      </div>
    </ModalContentsBase>
  );
}

export { Modal, ModalDismissButton, ModalOpenButton, ModalContents };
