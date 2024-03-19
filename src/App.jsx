import { Route, Routes } from 'react-router-dom'
import Navbar from './shared/Navbar/Navbar'
import Home from './Pages/Home/Home'
import International from './Pages/International/International'
import Sport from './Pages/Sport/Sport'
import Entertainment from './Pages/Entertainment/Entertainment'
import Country from './Pages/Country/Country'
import Campus from './Pages/Campus/Campus'
import WorldVideo from './Pages/WorldVideo/WorldVideo'
import Ramadan from './Pages/Ramadan/Ramadan'
import National from './Pages/National/National'
import Details from './components/Details/Details'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path='international' Component={International} />
        <Route path='national' Component={National} />
        <Route path='sport' Component={Sport} />
        <Route path='entertainment' Component={Entertainment} />
        <Route path='country' Component={Country} />
        <Route path='campus' Component={Campus} />
        <Route path='worldVideo' Component={WorldVideo} />
        <Route path='ramadan' Component={Ramadan} />
        <Route path=':id' Component={Details} />
      </Routes>
    </div>
  )
}