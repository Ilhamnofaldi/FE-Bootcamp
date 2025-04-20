function Article (props) {

    return (
        <>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <p>{props.date}</p>
        </>
    )
}
export default Article;