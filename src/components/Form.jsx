/* import { useState } from "react"

export const Form = () => {
const [user, setUser]= useState({
    name: "",
    email: "",
    pass: ""
})
const handleChange = (e) => {
const {name, value}= e.target
setUser((prevUser)=> ({...prevUser, [name]: value}))
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log("formulario enviado");
    
    alert(`ingresó su nombre ; ${user.name}`)
setUser({name: "", email: "", pass: ""})
}
    return (
        <form onSubmit={handleSubmit} >
            <input type="text" 
            name= "name"
             placeholder="ingrese nombre"
              value={user.name}
              onChange={handleChange}
              />
                

            <input type="password"
             name= "pass" 
             placeholder="ingrese constraseña" 
             value={user.pass}
             onChange={handleChange}
             required
             />


            <input type="email"
             name= "email" 
             placeholder="ingrese email"
              value={user.email}
              onChange={handleChange}
              />


            <input type="submit" value={"enviar"} />

        </form>
    )
} */