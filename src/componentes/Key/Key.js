const Key = ({ number, className, actionOnClick }) => {
  return (
    <li>
      <button
        className={number === "delete" ? `${className} big` : className}
        onClick={actionOnClick}
      >
        {number}
      </button>
    </li>
  );
};

export default Key;
