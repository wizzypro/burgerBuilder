import React from "react";
import buildControls from "../BuildControls";
import classes from "./BuildControl.module.css";
// import Aux from '../../../../hoc/Aux';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>

    <button className={classes.More} onClick={props.added}>
      Add
    </button>
  </div>
);

export default buildControl;
