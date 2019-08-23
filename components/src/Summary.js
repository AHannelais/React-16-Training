import React from "react";
//import { CallbackButton } from "./CallBackButton";
import { SimpleButton } from "./SimpleButton";
export function Summary(props) {
  return (
    <>
      <td>{props.index + 1}</td>
      <td>{props.name}</td>
      <td>{props.name.length}</td>
      <td>
        <SimpleButton
          className="btn-warning btn-sm m-1"
          callback={props.reverseCallback}
          text={`Reverse (${props.name})`}
        />
        <SimpleButton
          className="btn-info btn-sm m-1"
          callback={() => props.promoteCallback(props.name)}
          text={`Promote (${props.name})`}
        />
      </td>
    </>
  );
}
