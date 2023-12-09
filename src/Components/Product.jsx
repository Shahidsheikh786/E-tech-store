

const Product = ({item}) => {
  return (
  <div className="Product">
    <img src={item.imgSrc}/> 
   <div className="contant">
   <h1>{item.title}</h1>
   <p>{item.discription}</p>
   
   <div className="price">${item.price}</div>
   </div>
  
  </div>
  )
}

export default Product 