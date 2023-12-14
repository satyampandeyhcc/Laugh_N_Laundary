
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './Component/Login';

import Signin from './Component/Signin';
import Home from './Component/Home';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signin" element={<Signin/>}/>

        </Routes>
      </div>
    </Router>

  );
}

export default App;
