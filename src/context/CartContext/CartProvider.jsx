import { useState } from "react"
import { CartContext } from "./CartContext"
export const CartProvider = ({children})=>{
const  [cart, setCart] = useState([])  


const exists = (id) => {
    const exist = cart.some((p)=> p.id === id)
    return exist
}

const addItem = (item) => {
   if (exists(item.id)){
    //map, cuido mutacion a nivel array
    const updatedCart= cart.map((prod)=>{
        if(prod.id=== item.id){
            // cuido mutacion a nivel objeto!
        return {...prod, quantity:prod.quantity  + item.quantity}
        }else{
            return prod;
        }
    })
   setCart(updatedCart) 
   alert("itemes agregados!")
   }else{
     setCart([...cart, item])
    alert(`${item.name} agregado`)
   }
}


const deleteItem= (id) => {
    const filtered= cart.filter((p)=> p.id !== id)
    setCart(filtered)
    alert("producto eliminado")
}
    

const total= () => {
    const total = cart.reduce((acc, p)=>acc + p.price * p.quantity,0)
    return Math.round(total * 100)/100
}

const getTotalItems =() => {
   const totalItems = cart.reduce((acc, p)=> acc + p.quantity, 0)
   return totalItems
}

const clearCart = () => {
    setCart([])
}

const checkOut= () => {
    const ok= confirm("¿Seguro que quiere finalizar la compra?")
if(ok){
    alert("Felicidades, compra realizada!")
clearCart()
}
}
const values= {cart, addItem, clearCart, getTotalItems, deleteItem, total, checkOut}
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}