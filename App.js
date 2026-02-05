import React from "react";
import ReactDOM from "react-dom/client";

//react.createlement=>object =.when we rendered this to dom then it becoems html element

//inside core react
// const heading = React.createElement("h1", { id: "heading" }, "Namaste react");
// console.log(heading);

//inside jsx(transpiled before it reaches the js engine) - transpilation by parcel by the help of babel

//jsx=> React.createElement => ReactElement-jS object =>

//jsx is not html in javascript -it is html like syntax


//component composition= react element+functional component
//React Element
const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React
  </h1>
);

//React  Functional component
const HeadingComponent2 = () => (
  <div id="container">
    
    {/* <h2>{100+200}</h2> */}
    <h1 className="heading">Namaste React functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
