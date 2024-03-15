
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './Pages/Navbar/Navbar'


export default function App() {
  return (
   <>
      <div className="app">
      <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div>
      </>
  )
}
