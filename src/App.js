import {Route} from 'wouter'
import './App.css';
import Product from './pages/product';
import Home from './pages/home'
import Contacto from './pages/contacto';
import Informacion from './pages/informacion';
function App() {
  return (
    <>
    <Route 
    path="/" 
    component={Home} 
    />
    <Route 
    path="/productos" 
    component={Product} 
    />
    <Route 
    path="/contacto" 
    component={Contacto} 
    />
    <Route 
    path="/informacion" 
    component={Informacion} 
    />
    </>
  );
}

export default App;
