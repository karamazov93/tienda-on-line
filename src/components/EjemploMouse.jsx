import { useState } from "react"

export default function Mouse(){
    const [hover, setHover]= useState(false)
return (
    <div
    onMouseOver={()=>setHover(true)}
    onMouseOut={()=>setHover(false)}
    style={{
            width: "200px",
            height: "200px",
            backgroundColor: hover ? "red" : "blue",
            textAlign:"center",
            lineHeight: "100px"
         }}
    >
    {hover ? "hover!": "sin hover"}    
    </div>
    
)
}