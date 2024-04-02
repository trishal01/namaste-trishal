import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";

// To lazy import component
const Grocery = lazy(() => import('./components/Grocery'));

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
            { path: '/restraunt/:resId', element: <RestroMenu /> },

            // Suspense component's fallback attribute data is used to show the data for the time lazy load the files
            { path: '/grocery', element: <Suspense fallback={<h1>Loading... </h1>}> <Grocery /></Suspense> }],
        errorElement: <Error />,
    },

    // {path: '/contact', element: }

])

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);

console.log(reactH1);
