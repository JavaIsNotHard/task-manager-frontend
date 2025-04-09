import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Login from './Login.jsx';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  }

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  )
}

export default App
