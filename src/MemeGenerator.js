import React, { Component } from 'react';


class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this) //binds method
  }
  
  componentDidMount() { //ensures that data is fetched at the begining
    fetch("https://api.imgflip.com/get_memes") //Call for Url
      .then(response => response.json()) //turn promise into a JS object
      .then(response => {
        const { memes } = response.data //pull memes array from response.data
        console.log(memes[0]) //check data is present
        this.setState({ allMemeImgs: memes }) //set allMemeImgs state      
      })
  }
    handleChange(event) {
    console.log("Working!")
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

 render() {
        return (
            <div>
                <form className="meme-form">
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
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
                
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}
export default MemeGenerator;
