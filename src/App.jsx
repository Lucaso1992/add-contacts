import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';

import './App.css'

const App = () => {
  return(
    <BrowserRouter basename='/'>
    <Routes>
      {routes.map((route) => <Route { ...route } key={route.path}/>)}
    </Routes>
      </BrowserRouter>
  )
}

export default App;