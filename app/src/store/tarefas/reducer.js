// import { List } from 'immutable';
import * as types from './actionTypes';

const INITIAL_STATE = { tarefa: {}, tarefas: [] }

export default function reduce(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.FETCH_TAREFAS:
      return { ...state, tarefas: action.tarefas };
    case types.FETCH_TAREFA:
      return { ...state, tarefa: action.tarefa };
    default:
      return state;
  }
}

export function getTarefas(state) {
  return state.tarefas;
}

export function getTarefaById(state) {
  return state;
}