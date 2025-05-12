import axios from "axios";

const api = axios.create({
  baseURL: "http://10.89.240.99:5000/api/v1/",
  headers: {
    accept: "application/json",
  },
});

const sheets = {
  postCadastro: (user) => api.post("user/", user),
  postLogin: (user) => api.post("login/", user),
  postOrganizador: (organizador) => api.post("org/", organizador),
  postEvento: (evento) => api.post("evento/", evento),
  getIngressosPorEvento: (idEvento) => api.get(`ingresso/evento/${idEvento}`),
  postIngresso: (ingresso) => api.post("ingresso/", ingresso),
  postOrganizador: (organizador) => api.post("org/", organizador),
  getEventos:()=> api.get("evento/")
};

export default sheets;
