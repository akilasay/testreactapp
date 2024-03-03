import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate(); // useNaviagt hook

  return (
    <div className="App">
      <header className="App-header">

      
      <h1>Welcome new Recat JS application !!</h1>
      <button className='user-btn' onClick={() => navigate('/users')}>SEND</button>
      </header>
    </div>
  );
}

export default App;
