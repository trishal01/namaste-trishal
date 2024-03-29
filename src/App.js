import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const reactH1 = React.createElement(
    "div",
    { id: "heading", abc: "testing attr" },
    React.createElement("h1", { id: "child", abc: "testing attr" }, "Hello India")
);



const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
};

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<AppLayout />);

console.log(reactH1);
