import NavBar from './components/NavBar';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Cart from './page/Cart';
import Home from './page/Home';

function App() {
  return (

    <div>
      <div className='bg-slate-900'>
      <NavBar/>
      </div>
      
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>



      </Routes>




    </div>

  );
}

export default App;
