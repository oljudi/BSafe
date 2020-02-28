import React, { Component, createContext } from "react";
import { withRouter } from "react-router-dom";
import AUTH_SERVICE from "./services/index";

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    formSignup: {
      name: "",
      email: "",
      password: "",
      genre: "",
      age: 18
    },
    formLogin: {
      email: "",
      password: ""
    },
    formContact: {
      name: "",
      email: "",
      phone: ""
    },
    loggedUser: null,
    isLogged: false,
    contacts: null
  };

  handleDeleteContact = async e => {
    return await AUTH_SERVICE.deleteContact(e)
  }

  handleContactInput = e => {
    const { formContact } = this.state;
    const { name, value } = e.target;
    formContact[name] = value;
    this.setState({ formContact });
  };

  handleContactSubmit = async e => {
    e.preventDefault();
    const form = this.state.formContact;
    this.setState({ formContact: { name: "", email: "", phone: "" } });
    return await AUTH_SERVICE.createContact(form);
  };

  handleLoginInput = e => {
    const { formLogin } = this.state;
    const { name, value } = e.target;
    formLogin[name] = value;
    this.setState({ formLogin });
  };

  handleUpdateContacts = async e => {
    const { contacts } = await AUTH_SERVICE.getContacts();
    this.setState({ contacts });
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    const form = this.state.formLogin;
    return AUTH_SERVICE.login(form)
      .then(async ({ data: { user } }) => {
        const { contacts } = await AUTH_SERVICE.getContacts();
        this.setState({ contacts });
        this.setState({
          loggedUser: user,
          isLogged: true
        });
        return { user, msg: "logged" };
      })
      .catch(err => {
        this.setState({
          loggedUser: null,
          isLogged: false,
          formLogin: { email: "", password: "" }
        });
        return { user: null, msg: "Invalid username/password." };
      })
      .finally(() => this.setState({ formLogin: { email: "", password: "" } }));
  };

  handleSignupInput = e => {
    const { formSignup } = this.state;
    const { name, value } = e.target;
    formSignup[name] = value;
    this.setState({ formSignup });
  };

  handleInputNumber = value => {
    const { formSignup } = this.state;
    formSignup["age"] = value;
    this.setState({ formSignup });
  };
  handleSignupSubmit = async e => {
    e.preventDefault();
    const form = this.state.formSignup;
    this.setState({
      formSignup: { name: "", email: "", password: "", genre: "", age: 0 }
    });
    return await AUTH_SERVICE.signup(form);
  };

  render() {
    const {
      state,
      handleDeleteContact,
      handleUpdateContacts,
      handleContactSubmit,
      handleContactInput,
      handleSignupInput,
      handleSignupSubmit,
      handleInputNumber,
      handleLoginInput,
      handleLoginSubmit
    } = this;
    return (
      <MyContext.Provider
        value={{
          state,
          handleDeleteContact,
          handleUpdateContacts,
          handleContactSubmit,
          handleContactInput,
          handleSignupInput,
          handleSignupSubmit,
          handleInputNumber,
          handleLoginInput,
          handleLoginSubmit
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default withRouter(MyProvider);
