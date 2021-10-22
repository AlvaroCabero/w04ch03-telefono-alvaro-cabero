// import PropTypes from "prop-types";
import { useContext } from "react";
import ComponentContext from "../Context/Context";

const Action = ({ callActive, numberOK }) => {
  const { calling } = useContext(ComponentContext);

  const onCalling = (event) => {
    event.preventDefault();
    calling();
  };

  return (
    <>
      <a
        href="a"
        className={callActive ? "call off" : numberOK ? "call active" : "call"}
        onClick={onCalling}
      >
        Call
      </a>
      <a
        href="b"
        className={callActive ? "hang active" : "hang off"}
        onClick={onCalling}
      >
        Hang
      </a>
    </>
  );
};

// Display.propTypes = {
//   number: PropTypes.array,
//   className: PropTypes.string,
// };

export default Action;
