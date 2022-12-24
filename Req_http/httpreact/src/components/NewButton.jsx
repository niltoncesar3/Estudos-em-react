import React from 'react'
import { useState } from 'react'

const NewButton = () => {

  const [nome, setNome] = useState('Nilton')
  const [numero, setNumero] = useState(1)

  const handleNome = () => {
    setNome('César')
  }

  const handleNumero = () => {
    setNumero(numero + 1)
  }

  return (
    <div>
      <p>Nome: {nome}</p>
      <button onClick={handleNome}>Clique para mudar o botão</button>
      <p>Número: {numero}</p>
      <button onClick={handleNumero}>Clique para aumentar o número</button>
    </div>
  )
}

export default NewButton