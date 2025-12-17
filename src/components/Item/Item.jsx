

import "./Item.css"
export const Item = ({name, price, description,imageUrl, children}) => {

return(

<article className="product-item">
    <img src={imageUrl} alt="description" />
<h2 className="product-tittle">{name}</h2>
<p> precio:  ${price}</p>
 <p>descripcion: {description}</p>
 {children}
 </article>
    
)

   
    
}


