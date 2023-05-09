
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Addblog from './components/Addblog';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Dashboard />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Addblog/>}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
