import React from "react"
import "../style.css"
class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"",
            allMemeImage : []
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const{memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImage : memes})
            })
    }
    handleChange(event){
        const {name,value} = event.target
        this.setState({ [name] : value})
    }
    handleSubmit(event){
        event.preventDefault()

        const randNum= Math.floor(Math.random ()* this.state.allMemeImage.length)
        const randMemeImg = this.state.allMemeImage[randNum].url
        this.setState({ randomImg : randMemeImg})
    }
    render(){
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                  
                    <button>Generator</button>
                </form>
                <div className="container">
                    <img src={this.state.randomImg} alt="" size="100%"/>
                    <div className="top-left">{this.state.topText}</div>
                    <div className="bottom-right">{this.state.bottomText}</div>
                   
                    
                </div>
               
            </div>
            
        )
    }
}
export default MemeGenerator;