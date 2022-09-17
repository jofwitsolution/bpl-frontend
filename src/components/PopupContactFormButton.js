import React from "react";

const PopupContactFormButton = ({ handleOpenForm }) => {
  return (
    <span className="jof-contact-button" onClick={() => handleOpenForm()}>
      <i className="bi bi-envelope-open-fill jof-contact-button__icon"></i>
      {/* <i className="fa-solid fa-message jof-contact-button__icon"></i> */}
    </span>
  );
};

export default PopupContactFormButton;
