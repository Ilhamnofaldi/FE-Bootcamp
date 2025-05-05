import {Link, Outlet} from 'react-router-dom';

function FirstLayout() {
    return (
        <>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/setting">Setting</Link> | <Link to = "/blog">Blogs</Link> <br />
        <br />
        <Outlet />
        </>
    )
}
export default FirstLayout;