import React, { Component } from "react";

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
    alert(`${this.state.sideA} ${this.state.sideB} ${this.state.sideC}`);
    event.preventDefault();
  };

  render() {
    const { sideA, sideB, sideC } = this.state;
    return (
      <div>
        <form onSubmit={this.handleCalcButton}>
          <div className="inputFields">
            <label for="a">side a</label>
            <input
              id="a"
              name="sideA"
              type="text"
              value={sideA}
              onChange={this.handleSideAChange}
            />
          </div>
          <div>
            <label for="b">side b</label>
            <input
              id="b"
              name="sideB"
              type="text"
              value={sideB}
              onChange={this.handleSideBChange}
            />
          </div>
          <div>
            <label for="c">side c</label>
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
