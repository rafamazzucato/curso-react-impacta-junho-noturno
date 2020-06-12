import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setData,
    setNome,
    setEmail,
    setAssunto,
    limparFormContato,
    adicionarContato
} from '../../actions/contato';

const ContatoFormulario = (props) => {

    const { data, nome, email, assunto, curso, msgSucesso, msgErro,
        setData, setNome, setEmail, setAssunto,
        limparFormContato, adicionarContato, cursos
    } = props;

    const adicionar = async (e) => {
        e.preventDefault();
        await adicionarContato(data, nome, email, assunto, curso);
    }

    const limpar = e => {
        e.preventDefault();
        limparFormContato();
    }

    return (
        <div>
            <h3 className="border-bottom">Formulário</h3>

            {msgSucesso ?
                <div className="alert alert-success" role="alert">
                    <strong>Parabéns</strong> {msgSucesso}
                </div>
                : null
            }

            {msgErro ?
                <div className="alert alert-danger" role="alert">
                    <strong>Ops!</strong> {msgErro}
                </div>
                : null
            }

            <form>
                <div className="form-group row">
                    <label htmlFor="data"
                        className="col-sm-3 col-form-label">Data:</label>
                    <div className="col-sm-5 col-6">
                        <input type="date"
                            className="form-control" id="data"
                            value={data}
                            onChange={setData} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="nome"
                        className="col-sm-3 col-form-label">Nome:</label>
                    <div className="col-sm-9">
                        <input type="text"
                            className="form-control" id="nome"
                            value={nome}
                            onChange={setNome} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email"
                        className="col-sm-3 col-form-label">Email:</label>
                    <div className="col-sm-9">
                        <input type="email"
                            className="form-control" id="email"
                            value={email}
                            onChange={setEmail} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email"
                        className="col-sm-3 col-form-label">Curso:</label>
                    <div className="col-sm-9">
                        <select className="form-control" id="curso">
                            <option value='-1'>Selecione o curso</option>
                            {cursos ? cursos.map(i =>(
                                <option value={i}>{i.descricao}</option>
                            )) : null}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="assunto"
                        className="col-sm-3 col-form-label">Assunto:</label>
                    <div className="col-sm-9">
                        <textarea className="form-control"
                            id="assunto" rows="5"
                            value={assunto}
                            onChange={setAssunto} />
                    </div>
                </div>
                <div className="form-group row">
                    <button className="btn btn-primary ml-3 mb-3"
                        onClick={adicionar}>
                        Adicionar
                    </button>
                    <button className="btn btn-secondary ml-3 mb-3"
                        onClick={limpar}>
                        Limpar
                    </button>
                </div>
            </form>
        </div>
    )
}

const mapStoreToProps = store => ({
    data: store.contato.data,
    nome: store.contato.nome,
    email: store.contato.email,
    assunto: store.contato.assunto,
    curso: store.contato.curso,
    msgSucesso: store.contato.msgSucesso,
    msgErro: store.contato.msgErro,
    cursos: store.cursos.lista
});

const mapActionsToProps = dispatch => (bindActionCreators({
    setData,
    setNome,
    setEmail,
    setAssunto,
    limparFormContato,
    adicionarContato
}, dispatch));

const conectado = connect(mapStoreToProps, mapActionsToProps)(ContatoFormulario);
export { conectado as ContatoFormulario }