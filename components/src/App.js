import React from "react";
//import { Message } from "./Message";
import ReactDOM from "react-dom";
import { Summary } from "./Summary";
let names = ["Bob", "Alice", "Dora"];

function reverseNames() {
  names.reverse();
  ReactDOM.render(<App />, document.getElementById("root"));
}
function promoteName(name) {
  names = [name, ...names.filter(val => val !== name)];
  ReactDOM.render(<App />, document.getElementById("root"));
}
export const App = () => {
  return (
    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Letters</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => (
          <tr key={name}>
            <Summary
              index={index}
              name={name}
              reverseCallback={reverseNames}
              promoteCallback={promoteName}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default App;
/*<Message greeting="Hello" name="Bob" />
<Message greeting="Hola" name={"Alice" + "Smith"} />
<Message greeting="Hi there" name="Dora" />*/
