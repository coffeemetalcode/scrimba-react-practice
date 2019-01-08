import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log("this works");
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    }) 
  }

  render() {
    let buttonText = 
      this.state.isLoggedIn
        ? 'Log Out'
        : 'Log In'
    
    return (
      <div>
        <button onClick={this.handleClick}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default App;
