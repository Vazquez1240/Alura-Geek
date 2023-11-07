import './App.css';
import Header from './Components/Header/index.jsx';
import LogoPrincipal from './pages/Home.jsx';
import Producto from './pages/Producto.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Header/>

      <Routes >

        <Route path='/' element={<LogoPrincipal/>}/>
        <Route path='/Producto/:id' element={<Producto />} />

      </Routes>

    </Router>
  );
}

export default App;
