import {Link} from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function Blogs() {
    const data = useLoaderData();

    return (
        <div>
            <h1>Articles</h1>
            {data.map((article, index) => (
                <div key={index}>
                    <Link to={`/blog/${article.id}`}>- {article.title}</Link>
                </div>
            ))}
        </div>
    );
}

export default Blogs;