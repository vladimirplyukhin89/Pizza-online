import React from "react";

import s from "./styles.module.scss";
import { MdSearch } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { SearchContext } from "../../App";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className={s.root}>
      {searchValue && (
        <MdClear className={s.clear} onClick={() => setSearchValue("")} />
      )}
      <MdSearch className={s.search} />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={s.input}
        placeholder="Поиск пиццы..."
      />
    </div>
  );
};

export default Search;
