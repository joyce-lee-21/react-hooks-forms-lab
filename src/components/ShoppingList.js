import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems, itemData }) {
  // const originalItems = itemData;
  // const [filteredItems, setFilteredItems] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  //Filter #1: searchedItem is current state of what's being searched
  //Filter #2: update the state with setSearch with input value

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }
  const filteredData = items.filter(item => {
    if (selectedCategory === "All") {
      if (search !== "") {
        return item.name.toLowerCase().includes(search)
      } else {
        return true
      }
    } else {
      if (search !== "") {
        return item.name.toLowerCase().includes(search)
      } 
      return item.category === selectedCategory;
    }
  });

  // function onSearchChange(search, category) {
  //   console.log(originalItems)
  //   let filteredItemsList = [];
  //   // if there is a search input
  //   if (search !== "") {
  //     filteredItemsList = originalItems.filter(item => {
  //       const itemName = item.name.toLowerCase();
  //       const query = search.toLowerCase();
  //       // if there is a search input and category change
  //       if (category !== "All") {
  //         filteredItemsList.filter(item => {
  //         return itemName.includes(query) && item.category === category;
  //       })} else {
  //         return itemName.includes(query)
  //       } 
  //     })
  //   setFilteredItems(filteredItemsList)
  //   // if there is no serach input, but category change
  //   } else {
  //     if (category !== "All") {
  //       originalItems.filter(item => {
  //       return item.category === category;
  //     })}
  //   }
  // }
  //ItemForm #2: in parent, state is updated allowing Item component to have access to state as well
  //ItemForm #3: in parent, new item is added to the items prop from parent App component

  function onItemFormSubmit(itemObj) {
    console.log(`in ShoppingList: ${itemObj}`)
    setItems([...items, itemObj]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter search={search} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange}/>
      <ul className="Items">
        {filteredData.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
