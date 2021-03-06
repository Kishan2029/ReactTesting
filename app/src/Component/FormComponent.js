function FormComponent(props){
    return (
        <main>
            <form >
                <input name="firstName" 
                        value={props.data.firstName}
                        onChange={props.handleChange}
                        placeholder="First Name"/>
                        <br/>

                <input name="lastName"
                        value={props.data.lastName} 
                        onChange={props.handleChange}
                        placeholder="Last Name"/><br/>

                <input name="age"
                        value={props.data.age}
                        onChange={props.handleChange}
                        placeholder="Age"/> <br/>
                <label>
                        <input type="radio"
                            name="gender"
                            value="male"
                            checked={props.data.gender === "male"}
                            onChange={props.handleChange}
                            />Male
                </label>
                <br/>
                <label>
                        <input type="radio"
                            name="gender"
                            value="female"
                            checked={props.data.gender === "female"}
                            onChange={props.handleChange}
                            />Female
                </label>
                <br/>
                <select value={props.data.destination}
                onChange={props.handleChange} 
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
                        onChange={props.handleChange}
                        checked={props.data.isVegan}/>
                        isVegan
                </label>
                <br/>
                <label>
                        <input 
                        type="checkbox"
                        name="isLactosefree"
                        onChange={props.handleChange}
                        checked={props.data.isLactosefree}/>
                        isLactoseFree
                </label>
                <br/>
                <label>
                        <input 
                        type="checkbox"
                        name="isKoshar"
                        onChange={props.handleChange}
                        checked={props.data.isKoshar}/>
                        isKoshan
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>

            <hr/>
            <h2>Entered Information</h2>
            <p>Your Name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>your gender: {props.data.gender}</p>
            <p>YOur destination : {props.data.destination}</p>
            <p>Vegan:{props.data.isVegan ? "Yes": "NO"}</p>
            <p>Koshar:{props.data.isKoshprops ?"Yes": "NO"}</p>
            <p>Lactose free:{props.data.isLactosefree ?"Yes": "NO"}</p>
        </main>
    )
}
export default FormComponent;