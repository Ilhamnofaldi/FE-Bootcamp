import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../layouts/FirstLayout.jsx";
import Home from "../pages/index.jsx";
import About from "../pages/about.jsx";
import Blogs from "../pages/blogs/";
import Setting from "../pages/setting.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <FirstLayout />,
        children : [
            {
                path: '/',
                element : <Home />,
            },
            {
                path : '/about',
                element : <About />,
            },
            {
                path : '/setting',
                element : <Setting />,
            },
            {
                path : '/blog',
                element : <Blogs />,
            },
            
        ]
    }
]);