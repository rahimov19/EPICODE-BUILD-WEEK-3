import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { Modal } from "@mui/material";

//<button onClick={() => setModalIsOpen(false)}>Close Modal</button>

function HeaderWork({ title }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleButtonClick = () => {
    setModalIsOpen(true);
  };
  return (
    <>
      {/* Display a button that opens the modal when clicked */}
      <div onClick={handleButtonClick} className="headerOption">
        <AppsIcon />
        <h3 className="headerOption__title">
          {title}
          <ArrowDropDownIcon />
        </h3>
      </div>

      {/* Render the modal if the modal state is true */}
      {modalIsOpen && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p>This is the modal content.</p>
          <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
        </div>
      )}
    </>
  );
}

export default HeaderWork;
