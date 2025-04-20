import Article from '../components/article.jsx';
import Contents from '../contents.json'
import { useState } from 'react';

function Home () {
    const [search, setSearch] = useState("");

    const changeSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <>
        <h1>React Blog</h1>
        <div>
            Cari Artikel : <input onChange={changeSearch}></input>
        </div>
        <small> Ditemukan 0 Data dengan pencarian kata {search}</small>
        {Contents.map(({title,content,date},index)=>(
            <Article {...{title,content,date}} key ={index}/>
        )
        )}
        </>
    )
}

export default Home;