export const Item4 = ({nombre, precio, destacado}) => {
    return (
        <article style={{border: destacado ? " 5px solid gold" : "solid grey"}}>
            <p>Item 4</p>
            <p>{nombre}</p>
            <p>{precio}</p>
        </article>
    )
}