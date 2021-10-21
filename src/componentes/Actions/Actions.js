import { useState } from "react";
import Action from "../Action/Action";

import Display from "../Display/Display";

const Actions = ({ number, className }) => {
  return (
    <div className={className}>
      <Display number={number} className="number">
        <Action className="call" />
      </Display>
    </div>
  );
};

export default Actions;
