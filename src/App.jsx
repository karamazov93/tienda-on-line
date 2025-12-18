

import { Footer } from "./components/Footer/Footer";
import {MainLayout} from "./layouts/MainLayout"
import {AdminLayout} from "./layouts/AdminLayout"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"
import {CartProvider} from "./context/CartContext/CartProvider"
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <>
    
<BrowserRouter> 
  <CartProvider>
  <div>

  <Routes>
    <Route element={<MainLayout/>}>

    <Route path="/" element={<ItemListContainer titulo={"trabajo practico"}/>} />
    <Route path="/category/:category" element={<ItemListContainer titulo={"trabajo practico"}/>} />
    <Route path="/detail/:id"  element={<ItemDetailContainer/> } />
    <Route path="/carrito" element={<Cart/>}/>  

    </Route>
    <Route path="/admin" element={<AdminLayout/>} >
    
    <Route index element={<Login/>}/>
    <Route path="alta-productos" element={<RutaProtegida>
    <ProductFormContainer/>
    </RutaProtegida>}/>
    </Route>
    {/*  <Route path="/admin" element={<ProductFormContainer/>}/>   */} 
  </Routes>
  <Footer />
  </div>
</CartProvider>
 </BrowserRouter>
    </>
  )
}

export default App