import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (!this.state.name|| !this.state.email) {
      alert('Please submit name and email address, to enable us to get in touch with you. Thanks!');
    } else {
      alert(`Hello ${this.state.name} (${this.state.email})
      you submitted the following message:
      ${this.state.message}`);

      this.setState({
        name: "",
        email: "",
        message: ""
      });
    }

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="row justify-content-center">
        <form className="form col-11 col-lg-6">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Your Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="abc@example.com"
          />
          <textarea
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            placeholder="Your Message:"
          ></textarea>
          <button className="btn btn-dark m-2" type="submit" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
