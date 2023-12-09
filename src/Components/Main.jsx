
import Product from "./Product"
import productsData from "../Data"
import { useState } from "react";


const Main = ({inputValue , setInputValue}) => {
  
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  let categories = ["All", "Watch" , "Headphone", "Speaker" ]
  

 
  
  return (
  <div className="Main">
  
<div className="filter">
    {categories.map((val,i)=>{
      

  
       return (
         
         <div className={`item ${activeCategory == val ? "active" : ""}`}
         key={i} onClick={()=>{ 
           
           setInputValue("");
           setActiveCategory(val); 
          }}
         > {val}</div>
      )
  })}

  </div> 
   
  
  <div className="Products">
  
  
{productsData.map((item,i)=>{
  
  if(inputValue !== ""){
    try{
   if(item.title.toLowerCase().includes(inputValue.toLowerCase())){
    return  <Product key={i} item={item}
  />
   }}catch(err){console.log(err)}
   
  }else{
    if(item.category == activeCategory  ){
  return <Product key={i} item={item}
  />
  }
  
  if(activeCategory == "All"){ 
    return  <Product key={i} item={item}
  />
  }
  }
  

  
})}
  </div>
  
  </div>
  )
}

export default Main;