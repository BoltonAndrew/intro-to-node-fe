import { useState } from "react";

function AddItem({ setNewEntry }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [id, setId] = useState(0);

  async function createItem(event) {
    event.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_REST_API}/item`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        price: price,
      }),
    });
    console.log(response);
    setNewEntry(true);
  }

  return (
    <form onSubmit={createItem}>
      <input
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        type="text"
      />
      <input
        onChange={(event) => setPrice(event.target.value)}
        placeholder="Price"
        type="number"
        step="0.01"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddItem;
