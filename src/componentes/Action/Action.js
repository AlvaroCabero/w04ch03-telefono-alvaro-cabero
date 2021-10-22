// import PropTypes from "prop-types";

const Action = ({ callActive, numberOK }) => {
  return (
    <>
      <a
        href="a"
        className={callActive ? "call off" : numberOK ? "call active" : "call"}
      >
        Call
      </a>
      <a href="b" className={callActive ? "hang active" : "hang off"}>
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
