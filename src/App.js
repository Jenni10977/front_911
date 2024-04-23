import './App.css';
import Login from './components/Login/Login';
//import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Side from './components/Side/Side';

function App() {
  return (
    <div>
      <Navbar/>
      <Login/>
      
      <Side/>
      <Profile/>
    </div>
  );
}

export default App;
