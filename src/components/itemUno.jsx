export const ItemUno= ({nombre, precio, children}) =>{
    return(
        <article>
            <p>Item 1</p>
            <p>{nombre}</p>
            <p>Precio:$ {precio}</p>
            {children}
        </article>
    )
}