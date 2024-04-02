import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";

const reactH1 = React.createElement(
    "div",
    { id: "heading", abc: "testing attr" },
    React.createElement("h1", { id: "child", abc: "testing attr" }, "Hello India")
);

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/', element: <AppLayout />, children: [
            { path: '/', element: <Body /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            {
                path: '/restraunt/:resId', element: <RestroMenu />
            }],
        errorElement: <Error />,
    },

    // {path: '/contact', element: }

])

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);

console.log(reactH1);
