import Banner from './componetes/Banner';
import CampoTexto from './componetes/CampoTexto';
function App() {
  return (
    <div className="App">
     <Banner />
     <CampoTexto label = "nome" placeholder="digite um nome"/>
     <CampoTexto label = "nome" placeholder="digite um nome"/>
     <CampoTexto label = "nome" placeholder="digite um nome"/>
    </div>
  );
}

export default App;
