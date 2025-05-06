import {Link, Outlet} from 'react-router-dom';

function FirstLayout() {
    return (
        <>
        <div className="min-h-screen flex flex-col">
            <header className='bg-white shadow-sm p-4' >
                <nav className='max-w-screen-lg mx-auto flex flex-wrap justify-center gap-4'>
                    <Link className="text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors" to="/">Home</Link>
                    <span className='text-gray-300 self-center'>|</span>
                    <Link className="text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors" to="/about">About</Link>
                    <span className='text-gray-300 self-center'>|</span>
                    <Link className="text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors" to="/setting">Setting</Link>
                    <span className='text-gray-300 self-center'>|</span>
                    <Link className="text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors" to="/blog">Blog</Link>
                </nav>
            </header>

            <main className="flex-grow p-4 max-w-screen-lg mx-auto w-full p-4">
                <Outlet />
            </main>

            <footer className="bg-white shadow-sm p-3">
                <div className="bg-gray-100 text-center py-3">
                    <p className="text-gray-600">© 2025 Blog</p>
                </div>
            </footer>

        </div>
        </>
    )
}
export default FirstLayout;