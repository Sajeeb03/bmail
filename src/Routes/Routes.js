import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Layout from "../Pages/Layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
])