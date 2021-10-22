// import PropTypes from "prop-types";
import { useContext } from "react";
import ComponentContext from "../Context/Context";

const Action = ({ callActive, numberOK }) => {
  const { calling, hangUp } = useContext(ComponentContext);

  const onCalling = (event) => {
    event.preventDefault();
    calling();
  };
  const onHangUp = (event) => {
    event.preventDefault();
    hangUp();
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
        onClick={onHangUp}
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
