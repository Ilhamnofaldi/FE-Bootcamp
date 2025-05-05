import Article from '../components/article.jsx';
import Contents from '../contents.json'
import { useState } from 'react';
import Search from '../components/search.jsx';

function Home () {
const [Data, setData] = useState(Contents);
const [find, setFind] = useState(0)

    const filtering = (value) => {
    const filteredData = Contents.filter((item)=> item.title.includes(value))
    setData(filteredData);
    setFind(filteredData.length)
}

    return (
        <>
        <h1>React Blog</h1>
        <Search Searching={filtering} find={find} />
        {Data.map((props,index)=>(
            <Article {...props} key ={index}/>
        )
        )}
        </>
    )
}

export default Home;