import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CallsDash from './components/CallsDash';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dash' element={<CallsDash />} /> 
      </Routes>
    </Router>
  );
};

export default App;
