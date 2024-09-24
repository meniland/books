import logo from './logo.svg';
import './App.css';
import axios from "axios";


const fetchData = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/v1/items');
    console.log(response.data);
  } catch (err) {
  } finally {
  }
};

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" onClick={fetchData}>
            Server data
          </a>
        </header>
      </div>
  );
}

export default App;

