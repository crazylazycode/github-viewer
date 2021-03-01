import logo from './logo.jpg';
import './App.css';
import Profile from './components/profile/profile.component';

function App() {
  return (
    <div className="App">     
      <header className="App-header">
        <a href='https://www.github.com'><img src={logo} className="App-logo" alt="logo" /></a>
      </header>
      <div className="profile-container">
        <Profile />
      </div>
    </div>
  );
}

export default App;
