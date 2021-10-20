import PropTypes from "prop-types";
import { useState } from "react";

const Display = ({ number, className }) => {
  const [telephone, setTelephone] = useState([]);

  if (telephone.length < 9) {
    setTelephone(telephone.push(number));
  }
  return <span className={className}>{telephone.join("")}</span>;
};

Display.propTypes = {
  number: PropTypes.string,
  className: PropTypes.string,
};

export default Display;
