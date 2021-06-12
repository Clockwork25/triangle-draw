import React, { Component } from "react";
import Check from "./Check";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideA: "",
      sideB: "",
      sideC: "",
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
    const a_conv = parseFloat(this.state.sideA)
    const b_conv = parseFloat(this.state.sideB)
    const c_conv = parseFloat(this.state.sideC)
    console.log(`${this.state.sideA} ${this.state.sideB} ${this.state.sideC}`);

    <Check sideA_num={a_conv} sideB_num={b_conv} sideC_num={c_conv} />
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
      </div>
    );
  }
}

export default Form;
