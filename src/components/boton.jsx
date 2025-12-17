export function Button ({texto, color}){
    const estilos={
        backgroundColor:color,
        color:"white"
    }
    const saludar = () => {
        alert("button is clicked")
    }
    return <button style={estilos} onClick={saludar}>{texto}</button>
}