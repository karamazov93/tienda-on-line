import { useContext } from "react"
import {CartContext} from "./CartContext"


//exporto el contexto creado porque lo uso en el hook (usecartcontext)
export const useCartContext = () => {
  return  useContext(CartContext)
}