import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "here should be your production endpoint")
  : (baseURL = "http://192.168.18.94:3000");

const SERVICE = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await SERVICE.get("/");
  },
  signup: async user => {
    return await SERVICE.post("/auth/signup", user);
  },
  login: async user => {
    return await SERVICE.post("/auth/login", user);
  },
  logOut: async () => {
    return await SERVICE.get("/auth/logout");
  },
  createContact: async contact => {
    return await SERVICE.post("/contacts/create", contact);
  },
  deleteContact: async id => {
    return await SERVICE.delete(`/contacts/delete/${id}`);
  },
  getContacts: async () => {
    const { data } = await SERVICE.get("/contacts/getContacts");
    return data;
  }
};

export default MY_SERVICE;
