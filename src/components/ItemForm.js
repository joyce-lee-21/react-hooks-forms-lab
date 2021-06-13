import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  //ItemForm #1: submit event callback function lifts state from child to parent

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.value)
    const newItem= {
      id: uuid(),
      name: name,
      category: category,
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          onChange={e => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select 
          name="category"
          onChange={e => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
