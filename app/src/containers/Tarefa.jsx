import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as tarefasActions from '../store/tarefas/actions';
import Header from '../components/Header';
import FotoTarefa from '../components/FotoTarefa';
import TarefaTitle from '../components/TarefaTitle';
import ActionBox from '../components/ActionBox';
import Button from '../components/Button';
import Icon from '../components/Icon';
import InfoText from '../components/InfoText';
import Map from '../components/Map';
import CommentBox from '../components/CommentBox';
import Comment from '../components/Comment';
import AddressRow from '../components/AddressRow';

class Tarefa extends Component {

  constructor(props) {
    super(props);
    this.showAddress = this.showAddress.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(tarefasActions.getTarefaById(this.props.match.params.id));
  }

  showAddress() {
    alert(this.props.tarefa.endereco);
  }

  showComments() {
    document.getElementById("comments").scrollIntoView();
  }

  render() {
    const comentarios = this.props.tarefa.comentarios || [];
    return (
      <div>
        <Header cidade={this.props.tarefa.cidade} bairro={this.props.tarefa.bairro}/>
        <div className="wrapper">
          <FotoTarefa url={this.props.tarefa.urlFoto}></FotoTarefa>
          <TarefaTitle title={this.props.tarefa.titulo}/>
          <ActionBox>
            <Button href={"tel:" + this.props.tarefa.telefone}> <Icon name="icon-call"/> Ligar</Button> 
            <Link to={'/servicos'}> <Button> <Icon name="icon-services" /> Serviços</Button> </Link>
            <Button click={this.showAddress}> <Icon name="icon-local" /> Endereço</Button>
            <Button click={this.showComments}> <Icon name="icon-comments"/> Comentários</Button>
            <Button> <Icon name="icon-favorites"/> Favoritos</Button>
          </ActionBox>
          <InfoText>
            {this.props.tarefa.texto}
          </InfoText>
          <Map latitude={this.props.tarefa.latitude} longitude={this.props.tarefa.longitude}/>
          <AddressRow endereco={this.props.tarefa.endereco}/>
          <CommentBox> 
            {
              comentarios.map((comentario, index) => {
                return (
                <Comment key={index}
                  urlFoto={comentario.urlFoto}
                  nome={comentario.nome}
                  nota={comentario.nota}
                  titulo={comentario.titulo}
                  comentario={comentario.comentario} >
                </Comment>
                )
              })
            }
          </CommentBox>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tarefa: state.tarefas.tarefa
  }
};

export default withRouter(connect(mapStateToProps)(Tarefa));