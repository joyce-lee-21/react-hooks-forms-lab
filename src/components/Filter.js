import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  // uses a prop of 'search' to display the search term in the input field
  // const [selectedCategory, setSelectedCategory] = useState("All");
  // const [search, setSearch] = useState("");
    // const filteredData = items.filter((item) => {
    //     if (selectedCategory === "All") {
    //       if (search !== "") {
    //         return item.name.toLowerCase().includes(search)
    //       } else {
    //         return null
    //       }
    //     } else {
    //       if (search !== "") {
    //         return item.name.toLowerCase().includes(search)
    //       } 
    //       return item.category === selectedCategory;
    //     }
    //   });
  // onSearchChange(search, selectedCategory)

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={onSearchChange}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
