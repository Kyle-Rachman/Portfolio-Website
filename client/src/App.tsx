import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import About from './views/About/About'
import Work from './views/Work/Work'
import Contact from './views/Contact/Contact'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <main>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/work' element={<Work></Work>}></Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App