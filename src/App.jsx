import {  Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home';
import HomeEs from './pages/Casa'

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={HomePage} />
      <Route path="/es" Component={HomeEs} />
    </Routes>
  )
}

export default App
