import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import CreatePost from './Components/CreatePost'
import ViewPostDetails from './Components/ViewPostDetails'
import EditPost from './Components/EditPost'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/createPost' element={<CreatePost/>} />
        <Route path='/viewPost/:id' element={<ViewPostDetails/>} />
        <Route path='/editPost/:id' element={<EditPost/>} />
      </Routes>
    </div>
  )
}

export default App
