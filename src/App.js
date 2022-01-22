import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Company from './views/dashboard/company/company';

const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Company/>}/>
    </Routes>
  </Router>
}
export default App;
