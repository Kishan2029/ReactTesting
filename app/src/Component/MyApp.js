import React from "react";
//import Conditional from "./Conditional"
class MyApp extends React.Component {
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
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
      handleSubmit(event) {
       
      }
    
      render() {
        return (
            <main>
            <form onSubmit={this.handleSubmit}>
                  <input name="firstName" 
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"/>
                        <br/>

                  <input name="lastName"
                        value={this.state.lastName} 
                        onChange={this.handleChange}
                        placeholder="Last Name"/><br/>

                  <input name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"/> <br/>
                  <label>
                        <input type="radio"
                               name="gender"
                              value="male"
                              checked={this.state.gender === "male"}
                              onChange={this.handleChange}
                              />Male
                  </label>
                  <br/>
                  <label>
                        <input type="radio"
                               name="gender"
                              value="female"
                              checked={this.state.gender === "female"}
                              onChange={this.handleChange}
                              />Female
                  </label>
                  <br/>
                  <select value={this.state.destination}
                  onChange={this.handleChange} 
                   name="destination">
                        <option value="india">India</option>
                        <option value="germany">Germany</option>
                        <option value="usa">Usa</option>
                        <option value="norway">Norway</option>
                        
                  </select>
                  <br/>
                  <h4>Dietry Plan:</h4>
                  <label>
                        <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        checked={this.state.isVegan}/>
                         isVegan
                  </label>
                  <br/>
                  <label>
                        <input 
                        type="checkbox"
                        name="isLactosefree"
                        onChange={this.handleChange}
                        checked={this.state.isLactosefree}/>
                         isLactoseFree
                  </label>
                  <br/>
                  <label>
                        <input 
                        type="checkbox"
                        name="isKoshar"
                        onChange={this.handleChange}
                        checked={this.state.isKoshar}/>
                         isKoshan
                  </label>
                  <br/>
                  <input type="submit" value="Submit" />
            </form>

            <hr/>
            <h2>Entered Information</h2>
            <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
            <p>Your age: {this.state.age}</p>
            <p>your gender: {this.state.gender}</p>
            <p>YOur destination : {this.state.destination}</p>
            <p>Vegan:{this.state.isVegan ? "Yes": "NO"}</p>
            <p>Koshar:{this.state.isKoshar ?"Yes": "NO"}</p>
            <p>Lactose free:{this.state.isLactosefree ?"Yes": "NO"}</p>
            </main>

        );
      }
    }
export default MyApp;
