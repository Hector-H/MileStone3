import './App.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/nav';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Nav />
    </div>
  );
}

export default App;
