import { useState } from 'react';

function Search (props)
{
    const [search, setSearch] = useState("");


    const changeSearch = () => {
        props.Searching(search);
    }

    return (
        <>
        <div>
        Cari Artikel : <input onChange={(e)=>setSearch(e.target.value)}></input>
        <button onClick={changeSearch}> Cari </button>
        </div>

        <small> Ditemukan <b>{props.find}</b> Data dengan pencarian kata <b>{search}</b></small>
        </>
    )
}

export default Search;