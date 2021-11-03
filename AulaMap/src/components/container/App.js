/* eslint-disable array-callback-return */

import '../estilos/App.css';
import ClassComponent from '../ClassComponent';
import FunctionComponent from '../FunctionComponent';

function App() {

  const listaConvidados = [
    {
      nome: 'Nicolas',
      estaNaLista: true,
      tarefa: 'batata-frita'
    },
    {
      nome: 'Pedro',
      estaNaLista: false,
      tarefa: 'pizza'
    },
    {
      nome: 'Carolina',
      estaNaLista: true,
      tarefa: 'bebidas'
    }
  ]
  
  return (
    <div className="App">
      
      <h3>Convidado:</h3>
      {
      listaConvidados.map((Convidado) => {
        return (
        <ClassComponent key={Convidado}  nome={Convidado.nome} estaNaLista={Convidado.estaNaLista}/>
        )
      })
    }
    <h3>Tarefas: </h3>
    {
      listaConvidados.map((convidado) =>{
        return (
        <FunctionComponent key={convidado} nome={convidado.nome} tarefa={convidado.tarefa}/>
        )
      })
      
    }
    </div>

  );
}

export default App;
