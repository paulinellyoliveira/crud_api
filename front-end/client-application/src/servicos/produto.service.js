import http from "../http-common";

class ProdutoDataService {
  getAll() {
    return http.get("/v1/listarProdutos");
  }

  get(id) {
    return http.get(`/v1/obterProduto/${id}`);
  }

  create(data) {
    return http.post("/v1/novoProduto", data);
  }

  update(id, data) {
    return http.put(`/v1/atualizarProduto/${id}`, data);
  }

  delete(id) {
    return http.delete(`/v1/excluirProduto/${id}`);
  }
}

export default new ProdutoDataService();