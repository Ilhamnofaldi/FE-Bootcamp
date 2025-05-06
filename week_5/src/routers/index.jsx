import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../layouts/FirstLayout.jsx";
import Home from "../pages/index.jsx";
import About from "../pages/about.jsx";
import Blogs from "../pages/blogs/";
import Setting from "../pages/setting.jsx";
import Post from "../pages/blogs/_id.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import { data, postId } from "../apis/loaders.js";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <FirstLayout />,
        errorElement: <ErrorPage />,
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
                path : '/blog/:id',
                element : <Post />,
                loader : postId,
            },
            {
                path : '/blog',
                element : <Blogs />,
                loader : data,
            },
            
        ]
    }
]);