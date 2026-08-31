import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Fleet from './pages/Fleet'
import Optimization from './pages/Optimization'
import Analytics from "./pages/Analytics";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter basename="/frontend">
      <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/fleet" element={<Fleet />} />

      <Route path="/optimization" element={<Optimization />} />

      <Route path="/analytics" element={<Analytics />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
