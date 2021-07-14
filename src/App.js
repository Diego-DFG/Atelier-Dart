import './App.css';
import './components/FontAwesomeIcons';
import Navegacao from './components/secoes/navegacao/navegacao';
import Destaque from './components/secoes/destaque/destaque';
import ConteudoPromocoes from './components/secoes/conteudo/conteudoPromocoes/conteudoPromocoes';
import ConteudoCardProdutos from './components/secoes/conteudo/conteudoCardProdutos/conteudoCardProdutos';

function App() {
  return (
    <section>
        <Navegacao/>
        <Destaque/>
        <ConteudoPromocoes/>
        <ConteudoCardProdutos/>
    </section>
  );
}

export default App;
