import React, { Component } from "react";
function handleClick(){
      console.log("I was Clicked");
}
function MyApp(){
      return(
            <div>
                  <img onMouseOver={() => console.log("Hovered")} src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
                  <br/><br/>
                  <button onClick={handleClick}>Click me</button>
            </div>
      )
}
export default MyApp;
