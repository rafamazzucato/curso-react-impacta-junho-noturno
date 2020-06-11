import React from 'react';
import { Cabecalho } from '../components/Cabecalho';
import { CursoFormulario } from '../components/cursos/Formulario';
import { CursoLista } from '../components/cursos/Lista';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export class CursoPage extends React.Component {

    constructor(props){
        super(props);

        this.setCodigo = this.setCodigo.bind(this);
        this.setDescricao = this.setDescricao.bind(this);
        this.setCargaHoraria = this.setCargaHoraria.bind(this);
        this.setPreco = this.setPreco.bind(this);
        this.setCategoria = this.setCategoria.bind(this);
        this.salvar = this.salvar.bind(this);
        this.excluir = this.excluir.bind(this);
        this.selecionar = this.selecionar.bind(this);
    }

    initialState = {
        // CAMPO A SEREM DELEGADOS PARA O FORMULARIO
        _id: null,
        codigo: 0,
        descricao: '',
        cargaHoraria: 0,
        preco: 0,
        categoria: 'INFORMATICA',

        // CAMPO A SER DELEGADO PARA A LISTA
        lista : []
    }

    state = this.initialState

    componentDidMount(){
        this.getLista();
    }

    async getLista(){
        try{
            const result = await axios.get(URL);
            this.setState({lista: result.data})
        }catch(e){
            console.log(e);
        }
    }

    setCodigo(e){
        this.setState({codigo: e.target.value});
    }

    setDescricao(e){
        this.setState({descricao: e.target.value});
    }

    setCargaHoraria(e){
        this.setState({cargaHoraria: e.target.value});
    }

    setPreco(e){
        this.setState({preco: e.target.value});
    }

    setCategoria(e){
        this.setState({categoria: e.target.value});
    }

    limpar(){
        this.setState(this.initialState);
    }

    async showMsg(msg, hasToCleanForm){
        alert(msg);

        if(hasToCleanForm){
            this.limpar(); 
        }

        await this.getLista();
    }

    async excluir(_id){
        try{
            if(window.confirm('Deseja realmente deletar este curso?')){
                await axios.delete(URL+'/'+_id);
                this.showMsg('Curso deletado com sucesso', false);
            }
        }catch(e){
            console.log(e);
            alert('Ocorreu um erro ao deletar curso');
        }
    }

    async salvar(e){
        e.preventDefault();
        const {_id, codigo, descricao, cargaHoraria, preco, categoria} = this.state;
            
        try{
            if(codigo && descricao && cargaHoraria && preco && categoria){
                if(_id){
                    await axios.put(URL+'/'+_id, {codigo, descricao, cargaHoraria, preco, categoria});
                }else{
                    await axios.post(URL, {codigo, descricao, cargaHoraria, preco, categoria});
                }
                
                this.showMsg(`Cursos ${_id ? 'atualizado' : 'cadastrado'} com sucesso`, true);
            }else{
                alert('Favor preencher todos os campos');
            }
        }catch(e){
            console.log(e);
            alert(`Ocorreu erro ao ${_id ? 'atualizar' : 'cadastrar'} curso`);
        }
    }

    selecionar(curso){
        this.setState({
            _id: curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            preco: curso.preco || 0,
            categoria: curso.categoria,
        });
    }

    render() {
        const {_id, codigo, descricao, cargaHoraria, preco, categoria, lista} = this.state
        const { 
                setCodigo, 
                setDescricao, 
                setCargaHoraria, 
                setPreco, 
                setCategoria, 
                salvar,
                excluir,
                selecionar
        } = this;
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo="cadastro de cursos" />
                <div className="row border-bottom">
                    <div className="col-md-6">
                        <CursoFormulario 
                        _id={_id}
                        codigo={codigo}
                        descricao={descricao}
                        cargaHoraria={cargaHoraria}
                        preco={preco}
                        categoria={categoria}

                        setCodigo={setCodigo}
                        setDescricao={setDescricao}
                        setCargaHoraria={setCargaHoraria}
                        setPreco={setPreco}
                        setCategoria={setCategoria}
                        salvar={salvar}
                        />
                    </div>
                    <div className="col-md-6">
                        <CursoLista 
                            lista={lista}
                            excluir={excluir}
                            selecionar={selecionar}
                            isAdmin={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}