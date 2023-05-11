import './App.css'
import {Layout} from './layouts/Index'
import {Login} from './pages/auth/Login'
import {Routes, Route} from 'react-router-dom'
import {Team} from './pages/Team'
import {Blog} from './pages/Blog'
import {Commerce} from './pages/Commerce'
import {Homepage} from './pages/Homepage'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route path='team' element = {<Team/>}/>
          <Route path='/' element = {<Homepage/>}/>
          <Route path='blog' element = {<Blog/>}/>
          <Route path='commerce' element = {<Commerce/>}/>
        </Route>
        <Route path='/auth-login' element = {<Login/>}/>
      </Routes>
    </>
  )
}

export default App
