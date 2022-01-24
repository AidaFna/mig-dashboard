import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Company from './views/dashboard/company/company';
import Home from './views/dashboard/homepage/home';
import Login from './views/login/login';

const App = () => {
  return <Router>
    <Routes>
      <Route path='/company' element={<Company/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
    </Routes>
  </Router>
}
export default App;
