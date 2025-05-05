import { useState, useEffect } from 'react';

function Blogs() {
    const [Data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('ini data 1');
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=62d9484dce154315bf37f1858d9bf01c')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!Data || !Data.articles) return <div>No data available</div>;

    return (
        <>
            <h1>Data dari API</h1>
            {Data.articles.map((article, index) => (
                <div key={index}> - {article.title}</div>
            ))}
        </>
    );
}

export default Blogs;