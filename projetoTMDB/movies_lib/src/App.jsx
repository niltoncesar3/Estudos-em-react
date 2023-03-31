import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar'


import './App.css'
import NewButton from './components/NewButton'

function App() {

  return (
    <div>
      <NavBar/>
      <Outlet/>
      <NewButton/>
    </div>
  )
}

export default App
