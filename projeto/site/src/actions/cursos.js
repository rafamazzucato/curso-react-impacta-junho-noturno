import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';
const PREFIX = 'CURSOS_';

export const TYPE_SET_LISTA = PREFIX+'SET_LISTA';
export const TYPE_SET_CODIGO = PREFIX+'SET_CODIGO';
export const TYPE_SET_DESCRICAO = PREFIX+'SET_DESCRICAO';
export const TYPE_SET_CARGA_HORARIA = PREFIX+'SET_CARGA_HORARIA';
export const TYPE_SET_PRECO = PREFIX+'SET_PRECO';
export const TYPE_SET_CATEGORIA = PREFIX+'SET_CATEGORIA';
export const TYPE_LIMPAR_FORM = PREFIX+'LIMPAR_FORM';
export const TYPE_SELECIONAR_CURSO = PREFIX+'SELECIONAR_CURSO';

export const setCodigo = e =>({
    type: TYPE_SET_CODIGO,
    value : e.target.value
});

export const setDescricao = e =>({
    type: TYPE_SET_DESCRICAO,
    value : e.target.value
});

export const setCargaHoraria = e =>({
    type: TYPE_SET_CARGA_HORARIA,
    value : e.target.value
});

export const setPreco = e =>({
    type: TYPE_SET_PRECO,
    value : e.target.value
});

export const setCategoria = e =>({
    type: TYPE_SET_CATEGORIA,
    value : e.target.value
});

export const limpar = e =>{
    if(e){
        e.preventDefault();
    }

    return {
        type: TYPE_LIMPAR_FORM
    };   
};

export const getListaCursos = () => {
    return async dispatch => {
        try{
            const result = await axios.get(URL);

            return dispatch({
                type: TYPE_SET_LISTA,
                value : result.data
            });
        }catch(error){
            console.log(error);
        }
    }
}

export const excluirCurso = _id =>{
    return async dispatch => {
        if(window.confirm('Deseja realmente deletar este curso?')){
            try{
                if(!_id){
                    return;
                }
                await axios.delete(URL+'/'+_id);
                alert('Curso deletado com sucesso!');
                return dispatch(getListaCursos());
            }catch(error){
                console.log(error);
            }
        }
    }
}
const showMsg = async (dispatch, msg, hasToCleanForm) => {
    alert(msg);

    if(hasToCleanForm){
        dispatch(limpar()); 
    }

    dispatch(getListaCursos());
}

export const salvar = (e, _id, codigo, descricao, cargaHoraria, preco, categoria) => {
    return async dispatch => {
        e.preventDefault();

        try{
            if(codigo && descricao && cargaHoraria && preco && categoria){
                if(_id){
                    await axios.put(URL+'/'+_id, {codigo, descricao, cargaHoraria, preco, categoria});
                }else{
                    await axios.post(URL, {codigo, descricao, cargaHoraria, preco, categoria});
                }
                
                showMsg(dispatch, `Cursos ${_id ? 'atualizado' : 'cadastrado'} com sucesso`, true);
            }else{
                alert('Favor preencher todos os campos');
            }
        }catch(e){
            console.log(e);
            alert(`Ocorreu erro ao ${_id ? 'atualizar' : 'cadastrar'} curso`);
        }
    }
}

export const selecionarCurso = curso => ({
    type: TYPE_SELECIONAR_CURSO,
    value: curso
});