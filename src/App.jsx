import { Route, Routes } from 'react-router-dom'
import Navbar from './shared/Navbar/Navbar'
import Home from './Pages/Home/Home'
import National from './Pages/National/National'
import International from './Pages/International/International'
import Sport from './Pages/Sport/Sport'
import Entertainment from './Pages/Entertainment/Entertainment'
import Details from './components/Details/Details'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="max-w-[1200px] mx-auto">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path='national' Component={National} />
          <Route path='international' Component={International} />
          <Route path='sport' Component={Sport} />
          <Route path='entertainment' Component={Entertainment} />
          <Route path=':id' Component={Details} />
        </Routes>
      </div>
    </div>
  )
}