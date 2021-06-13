import React, { Component } from "react";
import "./Form.css"; 
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideA: "",
      sideB: "",
      sideC: "",
      triangleAnswer:"",
    };
  }

  handleSideAChange = (event) => {
    this.setState({
      sideA: event.target.value,
    });
  };
  handleSideBChange = (event) => {
    this.setState({
      sideB: event.target.value,
    });
  };
  handleSideCChange = (event) => {
    this.setState({
      sideC: event.target.value,
    });
  };

  handleCalcButton = (event) => {
    const a = parseFloat(this.state.sideA)
    const b = parseFloat(this.state.sideB)
    const c = parseFloat(this.state.sideC)
    console.log(`${this.state.sideA} ${this.state.sideB} ${this.state.sideC}`);
    
    
        if ((a+b > c || a+c>b || b+c>a) && (a>0 && b>0 && c>0)){
    
            if ((a===b && b!==c) || (b===c && c!==a ) || (a===c && c!==b)){
                this.setState({
                  triangleAnswer:"Isosceles triangle"
                })
            }else if(a===b && b===c && a===c){
                this.setState({
                  triangleAnswer: "Equilateral triangle"
                })
            }else if (a!==b && b!==c && a!==c){
              this.setState({
                triangleAnswer: "Scalene triangle"
              })
            }
        }else{
          this.setState({
            triangleAnswer: "Triangle not possible"
          })
        }
    event.preventDefault();
  };

  render() {
    const { sideA, sideB, sideC } = this.state;
    return (
      <div id="interactive">
        <div id="answerWindow">
          <div id="answerDrawing">Triangle drawing</div>
          <br/>
          <div id="answerText">The triangle is: {this.state.triangleAnswer}</div>
        </div>
        <form onSubmit={this.handleCalcButton} >
          <div className="formFields">
            <label htmlFor="a" >A side</label>
            <input
            id="a"
              className="field"
              name="sideA"
              type="text"
              value={sideA}
              onChange={this.handleSideAChange}
            />
          </div>
          <div className="formFields">
            <label htmlFor="b">B side</label>
            <input
              id="b"
              className="field"
              name="sideB"
              type="text"
              value={sideB}
              onChange={this.handleSideBChange}
            />
          </div>
          <div className="formFields">
            <label htmlFor="c">C side</label>
            <input
              id="c"
              className="field"
              name="sideC"
              type="text"
              value={sideC}
              onChange={this.handleSideCChange}
            />
          </div>
          <button id="button">Calculate</button>
        </form>
      </div>
    );
  }
}

export default Form;
