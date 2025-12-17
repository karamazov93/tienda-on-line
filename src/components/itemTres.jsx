export const Item3 = ({nombre, precio, descripcion}) => {
return(
    <article>
        <p>Item 3</p>
        <p>{nombre}</p>
        <p>precio $ {precio}</p>
        <p>descripcion: {descripcion}</p>
    </article>
)
}