import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import AllProjects from './Pages/AllProjects'
import AddProject from './Pages/AddProject'
import Personal from './Pages/Personal'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>        
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/all-projects' element={<AllProjects/>}></Route>
        <Route path='/add-projects' element={<AddProject/>}></Route>
        <Route path='/personal' element={<Personal/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App