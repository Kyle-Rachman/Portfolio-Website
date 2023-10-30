import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import About from './views/About/About'
import Work from './views/Work/Work'
import Contact from './views/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import SingleProject from './components/SingleProject/SingleProject'
import Error404 from './components/404/Error404'
import { HelmetProvider } from 'react-helmet-async'

// TODO: Make mobile landscape mode responsive for Home and SingleProject
// TODO: Fix logo's imperfections

function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <main>
              <Routes>
                <Route path='*' element={<Error404/>} />
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/work' element={<Work></Work>}></Route>
                <Route path='/work/:project' element={<SingleProject></SingleProject>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
              </Routes>
          </main>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App