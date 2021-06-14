import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideA: "",
      sideB: "",
      sideC: "",
      triangleAnswer: "",
      a: 0.0,
      b: 0.0,
      c: 0.0,
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
    const a = this.state.sideA;
    const b = this.state.sideB;
    const c = this.state.sideC;

    this.setState({
      a: event.target.value,
      b: event.target.value,
      c: event.target.value,
    });

    console.log(`${this.state.sideA} ${this.state.sideB} ${this.state.sideC}`);

    if((a==b && b==c && a==c) && (!(a + b <= c || a + c <= b || b + c <= a))){
      this.setState({
        triangleAnswer: "Triangle is equilateral",
      });
    } else if ((a !== b && b !== c && a !== c) && (a + b <= c || a + c <= b || b + c <= a) ) {
      this.setState({
        triangleAnswer: "Triangle is scalene",
      });
    } else if ((a==b || b==c || a==c) && !(a + b <= c || a + c <= b || b + c <= a)){
      this.setState({
        triangleAnswer: "Triangle is isosceles",
      });
    } else {
      this.setState({
        triangleAnswer: "Is not possible to calculate this kind of triangle",
      });
    }

{/* if ((a + b <= c || a + c <= b || b + c <= a) && !(a==b || b==c || a==c)) {
      if (
        (a == b && b !== c) ||
        (b == c && c !== a) ||
        (a == c && c !== b)
      ) {
        this.setState({
          triangleAnswer: "Triangle is isosceles",
        });
      } else if (a === b && b === c && a === c) {
        this.setState({
          triangleAnswer: "Triangle is equilateral",
        });
      } else if (a !== b && b !== c && a !== c) {
        this.setState({
          triangleAnswer: "Triangle is scalene",
        });
      }
    } else {
      this.setState({
        triangleAnswer: "Is not possible to calculate this kind of triangle",
      });
    }*/}   
    event.preventDefault();
  };

  render() {
    const { sideA, sideB, sideC } = this.state;
    return (
      <div className="interactive">
        <div id="answerWindow">
          <div id="answerTriangle"></div>
          <div id="answerText">{this.state.triangleAnswer}</div>
        </div>
        <div>
          <form onSubmit={this.handleCalcButton}>
            <div className="formFields">
              <label htmlFor="a" className="label">
                A side
              </label>
              <input
                id="a"
                className="field"
                name="sideA"
                type="number"
                value={sideA}
                min="0"
                max="2147483647"
                onChange={this.handleSideAChange}
              />
            </div>
            <div className="formFields">
              <label htmlFor="b" className="label">
                B side
              </label>
              <input
                id="b"
                className="field"
                name="sideB"
                type="number"
                value={sideB}
                min="0"
                max="2147483647"
                onChange={this.handleSideBChange}
              />
            </div>
            <div className="formFields">
              <label htmlFor="c" className="label">
                C side
              </label>
              <input
                id="c"
                className="field"
                name="sideC"
                type="number"
                value={sideC}
                min="0"
                max="2147483647"
                onChange={this.handleSideCChange}
              />
            </div>
            <button id="button">Calculate</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
