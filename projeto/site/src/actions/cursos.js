import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';
const PREFIX = 'CURSOS_SET_';

export const TYPE_SET_LISTA = PREFIX+'LISTA';

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
                return dispatch(getListaCursos());
            }catch(error){
                console.log(error);
            }
        }
    }
}