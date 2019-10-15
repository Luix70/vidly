import _ from "lodash";
import axios from "axios";

const apiEndPoint = "http://servidor2:52608/JData.asmx/JPedidos";

export default async function getClientes(repre) {
  const nEndPoint =
    apiEndPoint + (repre.codrep === 0 ? "" : "?cr=" + repre.codrep);

  const { data: result } = await axios.get(nEndPoint);

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
  const { data: result } = await axios.get(apiEndPoint);
  //console.log(result);
  return result.representantes.map(repre => {
    return _.pick(repre, ["codrep", "nombre", "totalClientes"]);
  });
}
