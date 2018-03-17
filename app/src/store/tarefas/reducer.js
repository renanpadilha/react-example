import { List } from 'immutable';
import * as types from './actionTypes';

export default function reduce(state = new List(), action = {}) {
  switch (action.type) {
    case types.FETCH_TAREFAS:
      return new List(action.tarefas);
    case types.FETCH_TAREFA:
      console.log('REDUCER', action.tarefa);
      return action.tarefa;
    default:
      return state;
  }
}

export function getTarefas(state) {
  return state.tarefas;
}

export function getTarefaById(state) {
  console.log('REDUCER2', state.tarefas);
  return state.tarefas;
}