import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Menu from '../Menu'

const App = () => {

  const [inputCarros, setInputCarros] = React.useState("")
  const [inputTitulo, setInputTitulo] = React.useState("")

  const carros = useSelector((state) => state.carrosReducer.carros)
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo)

  const dispatch = useDispatch()

  const adicionarCarro = (event) => {
    event.preventDefault()

    const objCarro = {
      nome: inputCarros    }
    dispatch({ type: "ADICIONAR", value: objCarro })
  }

  const alterarTitulo = (event) => {
    setInputTitulo(event.target.value)
    dispatch({ type: "ALTERAR", value: event.target.value })
  }

  return (
    <div className="container-fluid">
    <Menu />
      <form className="form-group">
        <label>Nome da Lista:</label>
        <br />
        <input className="form-control form-control-sm w-50"
          placeholder="Qual lista você vai fazer hoje?"
          value={inputTitulo}
          onChange={alterarTitulo} />
        <h1>{stateTitulo}</h1>
      </form>
      <form className="form-group" onSubmit={adicionarCarro}>
        <input className="form-control form-control-sm w-50"
          placeholder="Digite o ítem"
          value={inputCarros}
          onChange={(event) => setInputCarros(event.target.value)}
        />
        <br />
        
        <button className="btn btn-lg btn-danger gap-2">Enviar</button>
      </form>
      { carros.map((carro, index) => {
        return (
          <li className="col-lg-6 col-sm-10 mx-auto" key={index}> {carro.nome} </li>
        )
      })
      }
    </div>
  )
}

export default App