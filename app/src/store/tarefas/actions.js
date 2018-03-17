import TarefasService from '../../services/tarefas';
import * as types from './actionTypes';

export function getTarefas() {
  return async (dispatch, getState) => {
    try {
      const tarefas = await TarefasService.getTarefas();
      dispatch({ type: types.FETCH_TAREFAS, tarefas });
    } catch (error) {
      console.error(error);
    }
  }
}

export function getTarefaById(id) {
  return async (dispatch, getState) => {
    try {
      const tarefa = await TarefasService.getTarefaById(id);
      console.log('TAREFA ACTION', tarefa)
      dispatch({ type: types.FETCH_TAREFA, tarefa });
    } catch (error) {
      console.error(error);
    }
  }
}