// // Code ControlledInput Component Here

import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    )
  }

}

export default ControlledInput

// import React, { Component } from 'react'
//
// export default class Form extends Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry"
//   }
//
//   handleFirstNameChange = event => {
//     this.setState({
//       firstName: event.target.value
//     })
//   }
//
//   handleLastNameChange = event => {
//     this.setState({
//       lastName: event.target.value
//     })
//   }
//
  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }
//
//   render() {
//     return (
//       <form onSubmit={event => this.handleSubmit(event)} >
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={this.state.firstName}
//           onChange={event => this.handleFirstNameChange(event)}
//         />
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={this.state.lastName}
//           onChange={event => this.handleLastNameChange(event)}
//         />
//       </form>
//     )
//   }
//
// }
