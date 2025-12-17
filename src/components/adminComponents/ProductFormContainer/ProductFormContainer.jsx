import { useState } from "react"
import { ProductFormUI } from "../productFormUI/ProductFormUI";
import { validateProduct } from "../../../utils/validateProducts";
import {uploadToImgbb} from "../../../services/uploadImage"
import { createProducts } from "../../../services/products";
import "./ProductFormContainer.css"

export const ProductFormContainer = () => {
    const [loading, setLoading] = useState();
    const [errors, setErrors]= useState("")
    const [file, setFile] = useState(null);
    const [products, setProducts]= useState({
        name:"",
        price:"",
        category:"",
        description:"",
    })

const handleChange = (e) => {
    const {name, value}= e.target
    setProducts({...products, [name]:value})
}
const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    setLoading(true)
    const newErrors=validateProduct({...products, file})
    if(Object.keys(newErrors).length > 0){
        setErrors(newErrors)
        setLoading(false)
        return;
    }
    try{
        const imageUrl= await uploadToImgbb(file)
        const productData={
            ...products,price: Number(products.price), imageUrl
        }
    await createProducts(productData)
        alert("¡producto cargado con éxito!")
    setProducts({name:"", price:"", description:"", category:""})
    setFile(null)

    }
    catch(error){
        setErrors({general: error.message});
    }finally{
        setLoading(false)
    }}

return <ProductFormUI product={products} errors={errors} onChange={handleChange} onFileChange={setFile} loading={loading} onSubmit={handleSubmit}/>
}