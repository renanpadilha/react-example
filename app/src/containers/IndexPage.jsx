import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as tarefasActions from '../store/tarefas/actions';

class IndexPage extends Component {

  componentDidMount() {
    this.props.dispatch(tarefasActions.getTarefas());
  }

  render() {
    const tarefas = this.props.tarefas || [];
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
    tarefas: state.tarefas.tarefas
  }
};

export default withRouter(connect(mapStateToProps)(IndexPage));