import { GridUsuarios } from './components/GridUsuarios'
import { UserPromesa } from './components/UserPromesa'
import { UsuarioAsyncAwait } from './components/UsuarioAsyncAwait'
import { Usuariofetch } from './components/Usuariofetch'
import Usuariolocal from './components/Usuariolocal'
import './App.css';

function App() {
  

  return (
    <>
      {
        /*
           <Usuariolocal/>
           <UserPromesa/>
           <Usuariofetch/>
           <UsuarioAsyncAwait/>
        */
      }
      <GridUsuarios limiteUsuarios={8}/>
      
    </>
  )
}

export default App
