import React from "react";
import propTypes from "prop-types";

import "./index.css";

const Button = (props) => {
  const { disabled, subtitle, title, onButtonClick, value } = props;

  const handleClick = () => {
    disabled || onButtonClick(value);
  };

  return (
    <div
      className={`button ${disabled && "button-disabled"}`}
      onClick={handleClick}
    >
      <span className="button-title">{title}</span>
      <span className="button-subtitle">{subtitle}</span>
    </div>
  );
};

Button.propTypes = {
  disabled: propTypes.bool.isRequired,
  subtitle: propTypes.string,
  title: propTypes.string.isRequired,
  onButtonClick: propTypes.func.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

export default Button;
