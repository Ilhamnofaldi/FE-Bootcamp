import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    return <div><h1 className="text-3xl text-red-800">Oopss, ada Error!!</h1></div>
    
}

export default ErrorPage;