import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import ErrorPage from "../components/pages/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import AddProducts from "../components/AddProducts/AddProducts";
import Mycart from "../components/Mycart/Mycart";
import PrivetRouter from "./PrivetRouter";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import Shop from "../components/Shop/Shop";
import Details from "../components/pages/Details/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-product',
                element: <PrivetRouter><AddProducts></AddProducts></PrivetRouter>
            },
            {
                path: '/mycart',
                element: <PrivetRouter><Mycart></Mycart></PrivetRouter>
            },
            {
                path: '/update-product/:id',
                element: <PrivetRouter><UpdateProduct></UpdateProduct></PrivetRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/product/:brand',
                element: <Shop></Shop>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path:'/details/:id',
                element: <PrivetRouter><Details></Details></PrivetRouter>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])

export default router;