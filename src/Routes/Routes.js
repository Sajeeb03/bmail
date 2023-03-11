import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Pages/Layouts/AuthLayout/AuthLayout";
import Layout from "../Pages/Layouts/Layout/Layout";


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
                path: "/contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "/user/",
        element: <AuthLayout />,
        children: [
            {
                path: "/user/signin",
                element: <SignIn />
            },
            {
                path: "/user/signup",
                element: <SignUp />
            }
        ]
    }
])