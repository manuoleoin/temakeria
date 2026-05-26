import { useState } from 'react';
import './App.css';
import temaki from './assets/combo2-sushi.webp';
import poke from './assets/poke-combo.webp';
import CardProduto from './components/CardProduto';

function App() {
  const [tipoCombo, setTipoCombo] = useState('dupla');

  const dadosCombo = {
    dupla: {
      imagem: combo2 - sushi,
      titulo: 'Combo duplo',
      preco: 'R$ 87,99',
      descricao: '2 temakis + 1 porção de sushis e sashimis mistos + 1 refrigerante.'
    },
    familia: {
      imagem: poke - combo,
      titulo: 'Combo família',
      preco: 'R$ 149,99',
      descricao: '4 pokes (monte o seu) + 2 refrigerantes.'
    }
  }

  const alterarCombo = () => {
    setTipoCombo(tipoCombo === 'dupla' ? 'familia' : 'dupla')
  }

  const dados = dadosCombo[tipoCombo];

  return (
    <>
      <div className='container'>
        <h1>Escolha seu combo de poke ou temaki</h1>
        <button onClick={alterarCombo}>Mudar combo</button>

        <CardProduto
          imagem={dados.imagem}
          titulo={dados.titulo}
          preco={dados.preco}
          descricao={dados.descricao}
        />
      </div>
    </>
  )
}

export default App
