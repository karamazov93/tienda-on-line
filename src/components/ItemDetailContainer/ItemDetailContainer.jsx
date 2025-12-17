import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProductsbyId } from "../../services/products"

export const ItemDetailContainer = () => {
    const [detail, setDetail]= useState({})
    const {id} = useParams()
useEffect(() => {
 getProductsbyId(id).then((data) => {
    setDetail(data)
 }).catch((err) => {
console.log(err)    
   })
},[id])


return <main>
{Object.keys(detail).length ?(<ItemDetail detail={detail}/>):(<p>no se encontró nada</p>)}
 
 </main>   
}


