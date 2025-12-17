export const Item2 = ({item}) =>{
    return (
        <article>
            <p>item 2</p>
            <p>{item.nombre}</p>
            <p>precio $ {item.precio}</p>
        </article>
    )
}