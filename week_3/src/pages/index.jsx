import Article from '../components/article.jsx';
import Contents from '../contents.json'
import { useState, useEffect } from 'react';
import Search from '../components/search.jsx';

function Home () {
const [Data, setData] = useState(Contents);
const [find, setFind] = useState(0)
const [externalContents, setExternalContents] = useState([]);

    const filtering = (value) => {
    const filteredData = Contents.filter((item)=> item.title.includes(value))
    setData(filteredData);
    setFind(filteredData.length)
}

useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setExternalContents(json))
    
},[])

    return (
        <>
        <h1>React Blog</h1>
        <Search Searching={filtering} find={find} />
        {Data.map((props,index)=>(
            <Article {...props} key ={index}/>
        )
        )}
        <hr/>
        <h1>Data dari API</h1>
        {externalContents.map((item,index)=>
            <div key={index}> - {item.title}</div>)}
        </>
    )
}

export default Home;