import axios from "axios";
const baseURL =
  "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=ubicacion-acceso-gratuito-internet-wifi-c5&rows=200&facet=colonia&facet=alcaldia&facet=boton&facet=altavoz&facet=tipo_de_poste&refine.boton=CON+BOTON&format=geojson";

const service = axios.create({ baseURL });

const MAP_CCINCO = {
  map: async () => {
    return await service.get();
  }
};

export default MAP_CCINCO;
