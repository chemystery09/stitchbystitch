import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';

function Home() {
    return (
    <div className="container">
      <h1 className='title'>StitchbyStitch</h1>
      <h2 className='subtitle'>Welcome to the crochet corner!</h2>
      <div className="buttons">
        <Link to ="/login" className="nav-link">Log In</Link>
        <Link to ="/gallery" className="nav-link">Look Around!</Link>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Home;