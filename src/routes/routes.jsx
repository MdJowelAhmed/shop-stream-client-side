import { createBrowserRouter } from "react-router-dom"
import Root from "../root/Root"
import Home from "../pages/home/Home"
import Products from "../pages/products/Products"
import Login from "../components/authentication/Login"
import Register from "../components/authentication/Register"

const router= createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/products",
                element: <Products/>,
               
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register/>
            },
        ]
    }
])

export default router