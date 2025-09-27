import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
