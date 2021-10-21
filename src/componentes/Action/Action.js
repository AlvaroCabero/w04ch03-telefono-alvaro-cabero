// import PropTypes from "prop-types";

const Action = ({ number, className }) => {
  return (
    <>
      <a href="a" className="call">
        Call
      </a>
      <a href="b" className="hang active">
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
