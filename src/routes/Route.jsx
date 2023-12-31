import { createBrowserRouter } from "react-router-dom"
import Root from "../layouts/Root"
import Error from "../pages/Error"
import Home from "../pages/Home"
import About from "../pages/About"
import Detail from "../pages/Details"
import Register from "../pages/Register"
import Login from "../pages/Login"
import PrivateRoute from "./PrivateRoute"
import ContactUs from "../pages/ContactUs"
import PrivacyPolicy from "../pages/PrivacyPolicy"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/data.json")
            },
            {
                path: '/contactUs',
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Detail></Detail></PrivateRoute>,
                loader: () => fetch("/data.json")
            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: '/privacyPolicy',
                element: <PrivateRoute><PrivacyPolicy></PrivacyPolicy></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router