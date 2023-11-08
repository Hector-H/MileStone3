import "./App.css";
import logo from '../src/assets/images/logo.jpg'
import MenuContainer from "./components/MenuContainer";
import { ControlPoint, Favorite, Login, Person } from '@mui/icons-material';



function App() {
  return (
    <div className="App">

      <div className="menuContainer">
  
        <img src={logo} alt="PinThis logo" className="Logo"/>

      <h2>Menu</h2>
          <div className="Navbar">
            <div>
              <div className="iconContainer">
                <ControlPoint />
                <span>Add Post</span>
              </div>
              <div className="iconContainer">
                <Favorite />
                <span>Favorites</span>
              </div>

              <div className="iconContainer">
                <Login />
                <span>Login</span>
              </div>
              <div className="iconContainer">
                <Person />
                <span>Profile</span>
              </div>
            </div>
          </div>
      </div>



      <main></main>
    </div>

  );
}

export default App;