import axios from "axios";
const baseURL = process.env.REACT_APP_DATAC5

const service = axios.create({ baseURL });

const MAP_CCINCO = {
  map: async () => {
    return await service.get();
  }
};

export default MAP_CCINCO;
