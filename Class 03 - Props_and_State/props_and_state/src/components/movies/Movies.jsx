import React, { Component } from "react";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
    };
  }

  handleMovieName = (event) => {
    console.log(event.target.value);
    // With event.target.value we get the value from the input below
    // so we can save it in the state =)

    this.setState({
      movieName: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleMovieName} />
        <br />
        <span>{this.state.movieName}</span>
      </div>
    );
  }
}

export default Movies;
