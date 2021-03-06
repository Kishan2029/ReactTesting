import React from "react";
import FormComponent from "./FormComponent"
class Form extends React.Component {
      constructor() {
        super();
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            destination:"",
            
               isVegan:false,
               isKoshar:false,
               isLactosefree:false   
            
      };
    
        this.handleChange = this.handleChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
            const {name,value, type, checked} = event.target
            type === "checkbox"? this.setState({
                  [name]:checked     
            })
            :
            this.setState({
                  [name]:value
            })
      }
    
     
    
      render() {
            return(
                  <FormComponent
                  handleChange={this.handleChange}
                  data={this.state}
            />
            )
       
           
        
      }
    }
export default Form;
