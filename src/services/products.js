const BASE_URL= "https://6906168eee3d0d14c134c633.mockapi.io/products"

export const createProducts= async (product) => {
    // ... (Esta función ya estaba correcta)
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers:{"Content-type": "application/json"},
        body:JSON.stringify(product)
    })

    if(!res.ok){
        throw new Error("¡No se puede crear el producto!")
    }
    const result= await res.json()
    return result
}

export const getProducts= async(category) =>  {
    let url= BASE_URL
    if (category){
        // Usamos la URL correcta sin espacios
        url= `${BASE_URL}?category=${category}` 
    }
    const res= await fetch(url)
    
    // 🏆 CORRECCIÓN CRUCIAL: Verificamos si la respuesta fue exitosa (200-299)
    if(!res.ok){ 
        throw new Error(`¡Error al listar productos! Estado HTTP: ${res.status}`)
    }
    
    const results= await res.json()
    return results
}

export const getProductsbyId= async (id) => {
    const res= await fetch(`${BASE_URL}/${id}`)
    
    // 🏆 CORRECCIÓN (Verificación de 'ok' ya implementada)
    if(!res.ok){ 
        throw new Error("¡Error al obtener el producto!") // Se corrige el mensaje por si faltaba la 'k'
    }
    
    const detail= await res.json()
    return detail
}