import React from "react";
function Product(props)
{
    console.log(props)
    return(
      
        <div className="Contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone : {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
  
    )
}
export default Product;