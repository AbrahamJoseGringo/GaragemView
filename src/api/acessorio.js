import axios from "axios";

export default class AcessorioApi {
  async buscarTodasOsAcessorios() {
    try {
      const { data } = await axios.get("/acessorios/");
      return data.results;
    } catch (error) {
      console.error("Erro ao buscar acessórios:", error);
      throw error;
    }
  }

  async adicionarAcessorio(acessorio) {
    try {
      const { data } = await axios.post("/acessorios/", acessorio);
      return data; // Garantindo que a resposta completa seja retornada
    } catch (error) {
      console.error("Erro ao adicionar acessório:", error);
      throw error;
    }
  }

  async atualizarAcessorio(acessorio) {
    try {
      const { data } = await axios.put(`/acessorios/${acessorio.id}/`, acessorio);
      return data.results;
    } catch (error) {
      console.error("Erro ao atualizar acessório:", error);
      throw error;
    }
  }

  async excluirAcessorio(id) {
    try {
      const { data } = await axios.delete(`/acessorios/${id}/`);
      return data; // Garantindo que a resposta completa seja retornada
    } catch (error) {
      console.error("Erro ao excluir acessório:", error);
      throw error;
    }
  }
}
