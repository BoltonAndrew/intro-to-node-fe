import { useState, useEffect } from "react";
import AddItem from "./components/AddItem.jsx";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newEntry, setNewEntry] = useState(false);

  async function getDatabase() {
    try {
      const response = await fetch("http://localhost:5001/item/multiple");
      const data = await response.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDatabase();
  }, [newEntry]);

  return (
    <div className="App">
      <header>
        <h1>Andy's E-Commerce</h1>
      </header>
      <main>
        <AddItem setNewEntry={setNewEntry} />
        {items.map((item, i) => (
          <h2 key={i}>{item.name}</h2>
        ))}
      </main>
      <footer>
        <p>Created By Andy B</p>
      </footer>
    </div>
  );
}

export default App;
