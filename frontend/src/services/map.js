import axios from "axios";
const baseURL =
  "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=carpetas-de-investigacion-pgj-de-la-ciudad-de-mexico&rows=200&facet=ao_hechos&facet=mes_hechos&facet=delito&facet=categoria_delito&facet=fiscalia&facet=alcaldia_hechos&facet=colonia_hechos&facet=ao_inicio&facet=mes_inicio&format=geojson";

const service = axios.create({ baseURL });


const MAP_SERVICE = {
  heatmap: async () => {
    return await service.get();
  }
};

export default MAP_SERVICE;