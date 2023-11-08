import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import CreatePost from './Database/CreatePost'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/createPost' element={<CreatePost/>} />
        
      </Routes>
    </div>
  )
}

export default App
