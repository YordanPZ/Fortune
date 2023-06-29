
const Author = ({data}) => {
    
    let index = data[15] || 0

    return(
        <p className="autor">{data[index].author}</p>
    )
}

export default Author