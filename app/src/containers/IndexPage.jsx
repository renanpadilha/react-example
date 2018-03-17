import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as tarefasActions from '../store/tarefas/actions';
import * as tarefasSelectors from '../store/tarefas/reducer';

class IndexPage extends Component {

  componentDidMount() {
    this.props.dispatch(tarefasActions.getTarefas());
  }

  render() {
    const tarefas = this.props.tarefas || [];
    console.log('as',tarefas);
    return (
      <div>
        <ul>
          {
            tarefas.map((tarefa, index) => {
              return(
                <li key={index}>
                  <Link to={"/tarefa/" + tarefa}>{tarefa}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tarefas: tarefasSelectors.getTarefas(state)
  }
};

export default withRouter(connect(mapStateToProps)(IndexPage));