import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Auth/Login/Login";
import Registration from "../../Pages/Auth/Registration/Registration";
import NotFound from "../../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : '/contact',
                element : <Contact></Contact>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/registration',
                element : <Registration></Registration>
            },
        ]
    },
    {
        path : '*',
        element : <NotFound></NotFound>
    },
])