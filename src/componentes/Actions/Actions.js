import Action from "../Action/Action";

import Display from "../Display/Display";

const Actions = ({ number, callActive, className, numberOK }) => {
  return (
    <div className={className}>
      <Display number={number} className="number" />
      <Action
        className={className}
        callActive={callActive}
        numberOK={numberOK}
      />
    </div>
  );
};

export default Actions;
