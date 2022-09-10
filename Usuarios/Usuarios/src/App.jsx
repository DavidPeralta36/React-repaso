import { GridUsuarios } from './components/GridUsuarios'
import { UserPromesa } from './components/UserPromesa'
import { UsuarioAsyncAwait } from './components/UsuarioAsyncAwait'
import { Usuariofetch } from './components/Usuariofetch'
import Usuariolocal from './components/Usuariolocal'
import './App.css';
import { GridUsuarios2 } from './components/usuariosconsuspendido/GridUsuarios2'

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
      <GridUsuarios2 limiteUsuarios={8} />
      
    </>
  )
}

export default App
