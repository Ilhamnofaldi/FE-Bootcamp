import {useContext} from 'react';
import {AllContext} from '../context'

const ArticleStatus = ({isNew}) => {
    return isNew ? <span><b>--Konten Baruu</b> </span> : <span> <b>-Konten Lama</b>-</span>
}

function Article (props) {
    const user = useContext(AllContext)

    return (
        <>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <p>{props.date}</p>
        <ArticleStatus isNew={props.isNew} /> <br/>
        <p>Ditulis Oleh : {user.username}</p>
        </>
    )
}
export default Article;