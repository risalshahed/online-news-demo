
import { Route, Routes } from 'react-router-dom'
import Home from './componentes/Home/Home';

export default function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </>
  )
}
