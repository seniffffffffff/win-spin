import { Search } from "components/icons/Search/Search";
import React from "react";
import "./styles.css";

type TSearchBarProps = {
  placeholder?: string;
};

const SearchBar: React.FC<TSearchBarProps> = ({ placeholder }) => {
  return (
    <div className="search-bar-wrapper">
      <Search color="#FCC211" />
      <input
        type="text"
        placeholder={placeholder}
        className="search-bar-input"
      />
    </div>
  );
};

export default SearchBar;
