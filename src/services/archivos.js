import httpService from "./httpService";

const apiEndPoint = "http://indesan.ddns.net:52608/JData.asmx";

export default async function getScans(tipodoc, codigodoc, tipoScan) {
  var result = await getData(tipodoc, codigodoc, tipoScan);

  var fclientes = { ...result };

  return fclientes.Scanners;
}

async function getData(tipodoc, codigodoc, tipoScan) {
  const nEndPoint = `${apiEndPoint}/JScans?cd=${codigodoc}&td=${tipodoc}`;
  console.log(nEndPoint);
  const { data: liveData } = await httpService.get(nEndPoint);

  return liveData;
}
