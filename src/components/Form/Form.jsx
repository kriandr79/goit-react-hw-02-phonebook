import { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
 

    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
            required
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInput}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
