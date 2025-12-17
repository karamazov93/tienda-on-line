import { Link } from "react-router-dom"
import {useCartContext} from "../../context/CartContext/useCartContext"
export const Nav = () => {
    const  {getTotalItems} = useCartContext()
    return <nav>
        <ul>
            <li>
               <Link to={"/category/fuerte"}>caballero de la noche</Link>
            </li>
             <li>
               <Link to={"/category/dulce"}>antonio</Link>
            </li>
             <li>
               <Link to={"/category/time"}> time</Link>
            </li>
            <li>
                <Link to={"/carrito"}>carrito</Link>
                {getTotalItems() > 0 && (<span className="in-cart">{getTotalItems()}</span>)}                
            </li>
        </ul> 
    </nav>
}