import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar'


import './App.css'

function App() {
 

  return (
    <div>
      <NavBar/>
      <h2>Movies Lib</h2>
      <Outlet/>
    </div>
  )
}

export default App
