import React from "react";
import { createPortal } from "react-dom";
const modalPortal = document.getElementById("portal");
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  componentDidMount() {
    modalPortal.appendChild(this.el);
  }
  componentWillUnmount() {
    modalPortal.removeChild(this.el);
  }
  render() {
    return createPortal(this.props.children, this.el);
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleCLick = this.handleCLick.bind(this);
  }
  handleCLick() {
    this.setState((state) => ({
      clicks: state.clicks + 1
    }));
  }
  render() {
    return (
      <div onClick={this.handleCLick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the brwser DevTools to observe that the button is not a child of the div with
          onclick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  return (
    <div>
      <button>Click</button>
    </div>
  );
}

export default Parent;
