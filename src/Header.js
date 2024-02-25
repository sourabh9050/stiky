import React from "react";
import "./header.css"
const Header = (props) => {
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <header className="app-header">
      <h1 className="app-header__title">SRV Super Sticky Notes</h1>
      <aside className="app-header__control">
        <button className="add-new" onClick={props.addNote}>
          + New Note
        </button>
        <input
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={props.searchText}
          onChange={callSearch}
        />
      </aside>
    </header>
  );
};

export default Header;