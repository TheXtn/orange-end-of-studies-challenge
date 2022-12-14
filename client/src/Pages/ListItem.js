import {useState, useEffect} from 'react';
// import { useHistory } from 'react-router-dom'
// import './App.css';
import api from '../Api/index'

function App() {
  // const history = useHistory()
  const [items, SetItems] = useState([]);

  const retrieveItems = async () => {
      const response = await api.get("/item");
      return response.data;
    }
    useEffect(() => {
    
        const getAllItem = async () => {
          const allItem = await retrieveItems();
          if (allItem) {
            SetItems(allItem);
          };
        };
        getAllItem();
    }, []);
  
        console.log(items);

  return (
    <div className="App">
      <ul>
      {items.map((item) => {
      return <li key={item._id}>{item.nom} | {item.type} | {item.qte}</li>;
    })}
      </ul>
    </div>
  );
  }

export default App;