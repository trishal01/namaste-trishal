import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// To lazy import component
const Grocery = lazy(() => import('./components/Grocery'));

const reactH1 = React.createElement(
    "div",
    { id: "heading", abc: "testing attr" },
    React.createElement("h1", { id: "child", abc: "testing attr" }, "Hello India")
);

const AppLayout = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Imagine 'Walia' is coming from API response and we want to use it as Logged in User name
        const user = {
            name: 'Walia'
        }
        setUserName(user.name);
    })
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/', element: <AppLayout />, children: [
            { path: '/', element: <Body /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: '/restraunt/:resId', element: <RestroMenu /> },
            { path: '/cart', element: <Cart /> },

            // Suspense component's fallback attribute data is used to show the data for the time lazy load the files
            { path: '/grocery', element: <Suspense fallback={<h1>Loading... </h1>}> <Grocery /></Suspense> }],
        errorElement: <Error />,
    },

    // {path: '/contact', element: }

])

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);

console.log(reactH1);
