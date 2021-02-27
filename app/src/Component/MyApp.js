import React from "react";
import "../style.css"
import ContactCard from "./ContactCard";
function MyApp()
{
  return(
      <div className="contacts"> 
            <ContactCard 
            name="Kishan"
            imagUrl="app\src\Image\dog1.jpg"
            phone="12156"
            email="kishan@gmail.com"/>

            <ContactCard 
            name="Rohan"
            imagUrl="app\src\Image\dog2.jpg"
            phone="51616"
            email="rohann@gmail.com"/>

            <ContactCard 
            name="Rahul"
            imagUrl="app\src\Image\dog3.jpg"
            phone="161651"
            email="rahul@gmail.com"/>

            <ContactCard 
            name="Bhavya"
            imagUrl="app\src\Image\dog4.jpg"
            phone="15163456"
            email="rutvik@gmail.com"/>
      </div>

      
      
   )
}
export default MyApp