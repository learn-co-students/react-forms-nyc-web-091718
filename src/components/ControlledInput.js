import React from 'react';
import ReactDOM from 'react-dom';


class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    // this.sendFormDataSomewhere(this.state)
  }

render(){
  return(
    <form onSubmit={event => this.handleSubmit(event)}>
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    </form>
  );
}


} //end class


export default ControlledInput;
