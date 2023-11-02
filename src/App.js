import { BrowserRouter, Routes, Route } from 'react-router-dom';

///pages and compnents
import Home from './pages/Home';
import Link from './components/Navbar';
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
            path='/'
            element={<Home />}
            />
            <Route
            path='/login'
            element={<Login />}
            />
            <Route
            path='/signup'
            element={<Signup />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
