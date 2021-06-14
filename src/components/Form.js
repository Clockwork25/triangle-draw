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
      a:0.0,
      b:0.0,
      c:0.0,
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
    const a = parseFloat(this.state.sideA);
    const b = parseFloat(this.state.sideB);
    const c = parseFloat(this.state.sideC);

    this.setState({
      a: event.target.value,
      b: event.target.value,
      c: event.target.value,
    });

    console.log(`${this.state.sideA} ${this.state.sideB} ${this.state.sideC}`);

    if ((a + b > c || a + c > b || b + c > a) && a > 0 && b > 0 && c > 0) {
      if (
        (a === b && b !== c) ||
        (b === c && c !== a) ||
        (a === c && c !== b)
      ) {
        this.setState({
          triangleAnswer: "Isosceles triangle",
        });
      } else if (a === b && b === c && a === c) {
        this.setState({
          triangleAnswer: "Equilateral triangle",
        });
      } else if (a !== b && b !== c && a !== c) {
        this.setState({
          triangleAnswer: "Scalene triangle",
        });
      }
    } else {
      this.setState({
        triangleAnswer: "Triangle not possible",
      });
    }
    event.preventDefault();
  };

  render() {
    const { sideA, sideB, sideC } = this.state;
    return (
      <div className="interactive">
        <div id="answerWindow">
          <div id="answerTriangle">
          </div>
          <br />
          <div id="answerText">{this.state.triangleAnswer}</div>
        </div>
        <form onSubmit={this.handleCalcButton} id="formFieldsWrapper">
          <div className="formFields">
            <label htmlFor="a" className="label">
              A side
            </label>
            <input
              id="a"
              className="field"
              name="sideA"
              type="text"npm
              value={sideA}
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
              type="text"
              value={sideB}
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
