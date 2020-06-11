import { TYPE_SET_LISTA } from '../actions/cursos';

const INITIAL_STATE = {
    lista : []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TYPE_SET_LISTA : return {...state, lista : action.value}
        default: return state;
    }
}