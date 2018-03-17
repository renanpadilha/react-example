import axios from 'axios';

export default class TarefasService {

  static async getTarefas() {
    try {
      const response = await axios.get('http://dev.4all.com:3003/tarefa');
      console.log('LISTA API TAREFAS', response.data.lista);
      return response.data.lista;
    } catch (error) {
      console.error('ERRO AO BUSCAR LISTA DE TAREFAS', error);
    }
  }

  static async getTarefaById(id) {
    try {
      const response = await axios.get('http://dev.4all.com:3003/tarefa/' + id);
      console.log('API TAREFAS', response.data);
      return response.data;
    } catch (error) {
      console.error('ERRO AO BUSCAR TAREFA', error);
    }
  }
};