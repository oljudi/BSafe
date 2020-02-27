import React, { Component, createContext } from "react";
import { withRouter } from "react-router-dom";
import AUTH_SERVICE from './services/auth'

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    formSignup:{
      name: '',
      email: '',
      password: '',
      genre: '',
      age: 18
    }
  };

  handleSignupInput = e => {
    const {formSignup} = this.state
    const {name, value} = e.target
    formSignup[name] = value
    this.setState({formSignup})
  }

  handleInputNumber = value => {
    const {formSignup} = this.state
    formSignup['age'] = value
    this.setState({formSignup})
  }
  handleSignupSubmit = async e => {
    e.preventDefault()
    const form = this.state.formSignup
    this.setState({formSignup: {name: '', email: '', password: '', genre: '', age: 0}})
    return await AUTH_SERVICE.signup(form)
  }

  render() {
    const {
      state,
      handleSignupInput,
      handleSignupSubmit,
      handleInputNumber
    } = this;
    return (
      <MyContext.Provider
        value={{
          state,
          handleSignupInput,
          handleSignupSubmit,
          handleInputNumber
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default withRouter(MyProvider);
