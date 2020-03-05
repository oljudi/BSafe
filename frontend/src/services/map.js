import axios from "axios";
const baseURL = process.env.REACT_APP_DATA;

const service = axios.create({ baseURL });


const MAP_SERVICE = {
  heatmap: async () => {
    return await service.get();
  }
};

export default MAP_SERVICE;