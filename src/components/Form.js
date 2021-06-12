import React, { Component } from "react";

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
    
    
        if (a+b > c || a+c>b || b+c>a){
    
            if (a===b || b===c || a===c){
                this.setState({
                  triangleAnswer:"Isosceles"
                })
            }else if(a===b===c){
                this.setState({
                  triangleAnswer: "Equilateral"
                })
            }else if (a!==b && b!==c && a!==c){
              this.setState({
                triangleAnswer: "Scalene"
              })
            }
        }else{
          this.setState({
            triangleAnswer: "Not Possible"
          })
        }
    event.preventDefault();
  };

  render() {
    const { sideA, sideB, sideC } = this.state;
    return (
      <div>
        <form onSubmit={this.handleCalcButton}>
          <div className="inputFields">
            <label htmlFor="a">side a</label>
            <input
              id="a"
              name="sideA"
              type="text"
              value={sideA}
              onChange={this.handleSideAChange}
            />
          </div>
          <div>
            <label htmlFor="b">side b</label>
            <input
              id="b"
              name="sideB"
              type="text"
              value={sideB}
              onChange={this.handleSideBChange}
            />
          </div>
          <div>
            <label htmlFor="c">side c</label>
            <input
              id="c"
              name="sideC"
              type="text"
              value={sideC}
              onChange={this.handleSideCChange}
            />
          </div>
          <button>Calculate</button>
        </form>

        <div>
          The triangle is: {this.state.triangleAnswer}
        </div>
      </div>
    );
  }
}

export default Form;
