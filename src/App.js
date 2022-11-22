import './App.css';
import { useEffect,useState } from 'react';
import Axios from 'axios';

function App() {
  const [state,setState] = useState([]);

  useEffect(()=>{
    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')

    .then(response => {
      setState((response.data.results))
      console.log(response.data.results)
    }).catch((err) => console.log(err))
  }, [])
  console.log(state)
  return (
    <div className="App">
      {
        state.map((object, index) => {
          return(
            <div key={index}>
              <p>{index+1}.{object.name}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
