import { combineReducers } from 'redux'

const initialState = {
    carros: []
}

const carrosReducer = (state = initialState, action) => {
    if (action.type === "ADICIONAR") {
        return { carros: [...state.carros, { ...action.value }] }
    } else {
        return state
    }
}

const tituloReducer = (state = { titulo: "Lista de Carros" }, action) => {
    if (action.type === "ALTERAR") {
        return { titulo: action.value }

    } else {
        return state
    }
}

const reducers = combineReducers({ carrosReducer, tituloReducer })

export default reducers