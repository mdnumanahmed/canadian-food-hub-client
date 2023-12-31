import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Login/Register";
import Login from "../pages/Login/Login";
import ChefRecipes from "../pages/Home/ChefRecipes";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";
import AllChef from "../pages/AllChef/AllChef";
import Foods from "../pages/Foods/Foods";
import Blogs from "../pages/Blogs/Blogs";
import Services from "../pages/Services/Services";

// https://canadian-food-hub-server.vercel.app
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children : [
            {
                path: '/',
                element: <Home />,
                loader: ()=>fetch('https://canadian-food-hub-server.vercel.app/chef')
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'chef/:id',
                element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
                loader: ({params})=> fetch(`https://canadian-food-hub-server.vercel.app/chef/${params.id}`)
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'chefs',
                element: <AllChef />
            },
            {
                path: 'foods',
                element: <Foods />
            },
            {
                path: 'blogs',
                element: <Blogs />
            }
        ]
    }
])

export default router;