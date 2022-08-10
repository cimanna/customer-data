import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Detail from './Detail.jsx';
import './App.css';

export default function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/contact/:id`} element={<Detail />} />
      </Routes>
      
    </div>
  )
}
