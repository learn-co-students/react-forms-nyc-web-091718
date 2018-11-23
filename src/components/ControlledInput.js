// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    }, ()=> console.log('updated state', this.state));
  } // end handleChange fn

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
    // normally submitting a form would require sending a request to a server somewhere online - this is only an example so this won't work since we don't have a sendFormDataSomewhere fn.
  } // end handleSubmit fn

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </form>
    );
  } // end render fn
} // end ControlledInput class

export default ControlledInput;
