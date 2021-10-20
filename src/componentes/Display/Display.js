import PropTypes from "prop-types";
import { useState } from "react";

const Display = ({ number, className }) => {
  const [telephone, setTelephone] = useState([]);

  if (telephone.length < 9) {
    setTelephone(telephone + number);
  }
  return <span className={className}>{telephone}</span>;
};

Display.propTypes = {
  number: PropTypes.string,
  className: PropTypes.string,
};

export default Display;
