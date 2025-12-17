import { Link } from "react-router-dom"
import {useCartContext}from"../../context/CartContext/useCartContext"
import "./Cart.css"
import { Item } from "../Item/Item"
export const Cart = () => {
    const {cart, clearCart, deleteItem, total, checkOut} = useCartContext()
return <section className="item-list-container">
    <h2>carrito de compras</h2>

    {cart.length? cart.map((prod) => <Item key={prod.id}{...prod}>
        <span>cantidad: {prod.quantity}</span>
        <button className="btn" onClick={()=>deleteItem(prod.id)}>
            Eliminar
        </button>
    </Item>):(<p>El carrito está vacio</p>)}


{cart.length? (<div className="btn-container">
    <div className="total-pagar">
       <p> total a pagar: {total()}</p>
    </div>
    <button className="btn" onClick={checkOut}>
        Finalizar compra.
    </button>
    <button className="btn" onClick={clearCart}>
        Vaciar carrito.
    </button>
</div>):(<Link className="btn" to="/">Volver al Inicio</Link>)}
 


</section>
}


