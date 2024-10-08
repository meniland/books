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
      <div>
        <header>
            <div className='header'></div>
        </header>

      </div>
  );
}

export default App;

