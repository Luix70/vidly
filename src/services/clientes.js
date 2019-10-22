import _ from "lodash";
import axios from "axios";

const apiEndPoint =
  "http://indesan.ddns.net:52608/JData.asmx/JOps?user=Luis&password=140670";

export default async function getClientes(repre) {
  var result = await getData(repre);

  var fclientes = { ...result };

  fclientes.representantes = [
    ...result.representantes.filter(
      item => repre.codrep === item.codrep || repre.codrep === 0
    )
  ];

  // console.log(repre.codrep);
  return fclientes;
}

export async function getRepres() {
  // TODO :  invocar a un metodo que devuelva solamente los representantes
  var result = await getData({ codrep: 0 });
  //console.log("resultRepres", result);
  return result.representantes.map(repre => {
    return _.pick(repre, ["codrep", "nombre", "totalClientes"]);
  });
}

async function getData(repre) {
  const nEndPoint =
    apiEndPoint + (repre.codrep === 0 ? "" : "?cr=" + repre.codrep);

  const cachedData = JSON.parse(sessionStorage.getItem("cachedData"));

  // If cache is older than 20 min we retrieve another batch
  if (
    cachedData !== null &&
    Math.abs(new Date(cachedData.FechaCache) - Date.now()) / (1000 * 60) < 25
  ) {
    //console.log("cached " + new Date(cachedData.FechaCache));
    return cachedData;
  } else {
    const { data: liveData } = await axios.get(nEndPoint);
    liveData.FechaCache = Date.now();
    sessionStorage.setItem("cachedData", JSON.stringify(liveData));

    console.log("retrieved", new Date(liveData.FechaCache));

    return liveData;
  }
}
