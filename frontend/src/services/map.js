import axios from "axios";
const baseURL =
  //   "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=victimas-en-carpetas-de-investigacion-pgj&facet=ano_inicio&facet=mes_inicio&facet=delito&facet=sexo&format=geojson";
  "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=carpetas-de-investigacion-pgj-cdmx&facet=ao_hechos&facet=mes_hechos&facet=delito&facet=categoria_delito&facet=fiscalia&facet=colonia_hechos&facet=alcaldia_hechos&facet=ao_inicio&format=geojson";

const service = axios.create({ baseURL });

const MAP_SERVICE = {
  heatmap: async () => {
    return await service.get();
  }
};

export default MAP_SERVICE;