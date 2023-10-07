import { createBrowserRouter } from "react-router-dom"
import Root from "../layouts/Root"
import Error from "../pages/Error"
import Home from "../pages/Home"
import About from "../pages/About"
import Detail from "../pages/Details"


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
                path: '/details/:id',
                element: <Detail></Detail>,
                loader: () => fetch("/data.json")
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default router