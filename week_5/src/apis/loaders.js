export const data = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts');
}

export const postId = ({params}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
}