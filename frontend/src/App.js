import "./App.css";
import pinthis2 from '../src/assets/images/pinthis2.png'
// import MenuContainer from "./components/MenuContainer";
import { ControlPoint, Favorite, Login, Person } from '@mui/icons-material';
import Pin from "./components/Pin";


function App() {
  return (
    <div className="App">

      <div className="menuContainer">
  
        <img src={pinthis2} alt="PinThis logo" className="Logo"/>
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
              </div>

            <div>
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
      <main>
        <div className="searchBar">
          <input type="text" placeholder="Search"/>

        </div>
        <div className="mainContainer">
          <Pin pinSize = {'small'} />
        </div>

      </main>
    </div>

  );
}

export default App;