import React, { Component, createContext } from "react";
import { withRouter } from "react-router-dom";
import AUTH_SERVICE from "./services/index";

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 19.4326018,
      longitude: -99.1353989,
      zoom: 11
    },
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
    formSafePlace: {
      geometry: null,
      properties: null,
      name: "",
      description: ""
    },
    loggedUser: null,
    isLogged: false,
    contacts: null,
    places: null
  };

  handleHelpRequest = async center => {
    return await AUTH_SERVICE.sendSMS(center);
  };

  handleDeletePlace = async e => {
    return await AUTH_SERVICE.deletePlace(e);
  };

  handleUpdatePlaces = async () => {
    const { places } = await AUTH_SERVICE.getPlaces();
    this.setState({ places });
  };

  updateViewPort = newViewPort => {
    this.setState({ viewport: newViewPort });
  };

  handleSafePlaceSubmit = async e => {
    e.preventDefault();
    const form = this.state.formSafePlace;
    this.setState({
      formSafePlace: {
        name: "",
        description: "",
        geometry: null,
        properties: null
      }
    });
    return await AUTH_SERVICE.createPlace(form);
  };

  handleSafePlaceInput = e => {
    const { formSafePlace } = this.state;
    const { name, value } = e.target;
    formSafePlace[name] = value;
    this.setState({ formSafePlace });
  };

  handleOnSelectMap = (viewport, item) => {
    this.setState({ viewport });
    const { properties, geometry } = item;
    this.setState({ formSafePlace: { properties, geometry } });
  };

  handleLogOut = async () => {
    await AUTH_SERVICE.logOut();
    this.props.history.push("/");
    this.setState({ loggedUser: null, isLogged: false });
  };

  handleDeleteContact = async e => {
    return await AUTH_SERVICE.deleteContact(e);
  };

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

  handleUpdateContacts = async () => {
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
        const { places } = await AUTH_SERVICE.getPlaces();
        this.setState({ places });
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
      handleHelpRequest,
      handleDeletePlace,
      handleUpdatePlaces,
      handleSafePlaceSubmit,
      handleSafePlaceInput,
      updateViewPort,
      handleOnSelectMap,
      handleLogOut,
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
          handleHelpRequest,
          handleDeletePlace,
          handleUpdatePlaces,
          handleSafePlaceSubmit,
          handleSafePlaceInput,
          updateViewPort,
          handleLogOut,
          handleOnSelectMap,
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
