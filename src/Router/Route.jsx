



import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from "../Pages/Home/Home";
import AddToCut from "../Pages/AddToCut/AddToCut";
import Details from '../Pages/Details/Details'


const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element : <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/add-to-cut',
                element: <AddToCut/>
            },
            {
                path: '/:id',
                element: <Details/>
            },
        ]
    }
])





export default myCreateRoute;