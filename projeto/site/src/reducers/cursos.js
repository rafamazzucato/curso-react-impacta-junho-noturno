import { 
    TYPE_SET_LISTA,
    TYPE_SET_CODIGO,
    TYPE_SET_CARGA_HORARIA,
    TYPE_SET_DESCRICAO,
    TYPE_SET_CATEGORIA,
    TYPE_SET_PRECO,
    TYPE_LIMPAR_FORM,
    TYPE_SELECIONAR_CURSO
} from '../actions/cursos';

const INITIAL_STATE = {
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

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TYPE_SET_LISTA : return {...state, lista : action.value}
        case TYPE_SET_CODIGO : return {...state, codigo: action.value}
        case TYPE_SET_CARGA_HORARIA : return {...state, cargaHoraria: action.value}
        case TYPE_SET_DESCRICAO : return {...state, descricao: action.value}
        case TYPE_SET_CATEGORIA : return {...state, categoria: action.value}
        case TYPE_SET_PRECO : return {...state, preco: action.value}
        case TYPE_LIMPAR_FORM : return {...INITIAL_STATE, lista: state.lista}
        case TYPE_SELECIONAR_CURSO : return {...state,
            codigo: action.value?.codigo,
            descricao: action.value?.descricao,
            cargaHoraria: action.value?.cargaHoraria,
            preco: action.value?.preco,
            categoria: action.value?.categoria,
            _id: action.value?._id,
        }
        default: return state;
    }
}