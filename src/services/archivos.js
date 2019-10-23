import _ from "lodash";
import axios from "axios";

const apiEndPoint = "http://indesan.ddns.net:52608/JData.asmx/JScans";

export default async function getScans(tipodoc, codigodoc, tipoScan) {
  var result = await getData(tipodoc, codigodoc, tipoScan);

  var fclientes = { ...result };

  // console.log(repre.codrep);
  return fclientes.Scanners;
}

async function getData(tipodoc, codigodoc, tipoScan) {
  const nEndPoint = apiEndPoint + ("?cd=" + codigodoc + " &td=" + tipodoc);

  const { data: liveData } = await axios.get(nEndPoint);

  console.log("retrieved", new Date(liveData));

  return liveData;
}
