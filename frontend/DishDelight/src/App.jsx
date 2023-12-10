import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/home/Index';
import Menu from './pages/menu/Menu';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
