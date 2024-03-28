import React from "react";
import ReactDOM from "react-dom/client";

const reactH1 = React.createElement(
    "div",
    { id: "heading", abc: "testing attr" },
    React.createElement("h1", { id: "child", abc: "testing attr" }, "Hello India")
);

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1711644550~exp=1711645150~hmac=adb2ac5aa73e8afa057ec57f0b79045a71ed487abebb66b27ab2598e40827b56"
                />
            </div>
            <div className="nav-icon">
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const restroApiResponse = {
    status: 200,
    data: [
        {
            id: 1,
            name: "KFC",
            price: 200,
            ratings: 3.5,
            status: "open",
        },
        {
            id: 2,
            name: "BG",
            price: 330,
            ratings: 4.5,
            status: "open",
        },
        {
            id: 3,
            name: "Tikka",
            price: 44,
            ratings: 1.5,
            status: "open",
        },
        {
            id: 4,
            name: "Qwals",
            price: 594,
            ratings: 5.0,
            status: "closed",
        },
        {
            id: 5,
            name: "KFC",
            price: 200,
            ratings: 3.5,
            status: "open",
        },
        {
            id: 6,
            name: "KFC",
            price: 200,
            ratings: 3.5,
            status: "open",
        },
        {
            id: 7,
            name: "KFC",
            price: 200,
            ratings: 3.5,
            status: "open",
        },
    ],
};

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" />
                <button type="submit">Search </button>
            </div>

            <div className="restro-container">
                {console.log('11 ', restroApiResponse.data)}
                {restroApiResponse.data.map((restro) => (
                    <RestroCard key={restro.id} restroData={restro} />
                ))}
            </div>
        </div>
    );
};

const RestroCard = ({ restroData }) => {
    console.log({ restroData })
    const { name, price, ratings, status } = restroData;
    return (
        <div className="restro-card" style={styleCard}>
            <img
                alt="item-image"
                className="item-image"
                src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1711644550~exp=1711645150~hmac=adb2ac5aa73e8afa057ec57f0b79045a71ed487abebb66b27ab2598e40827b56"
            />
            {console.log(name)}
            <h4>{name}</h4>

            <div className="cart-detail">
                <h5>{price}</h5>
                <h5>{ratings}</h5>
                <h5>{status}</h5>
            </div>
        </div>
    );
};

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
