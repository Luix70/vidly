import axios from "axios";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status === 404 &&
    error.response.status < 500;
  //   … rutina global para tratar errores
  if (!expectedError) {
    console.log("Logging the error");
    alert("Ha ocurrido un error inesperado");
  }

  return Promise.reject(error); // devuelve el control al bloque catch
});

export default {
  get: axios.get,
  put: axios.put,
  update: axios.update,
  delete: axios.delete
};
