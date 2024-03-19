import { useRef } from 'react';
import { useEffect, useState } from 'react';

const debounce = (fn, delay) => {
  let timeoutId;
  return function (...args) {
    console.log(args, 'Args::');
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
/**
 * Initial when componenet loads - Reference Id of FUnction = 12345
 * Reference - 345344
 * @returns
 */
const SearchComponentDebounce = () => {
  const [search, setSearch] = useState('');
  const handleSearchText = (searchText) => {
    console.log('Searched Text', searchText);
  };
  const debouncedSearch = useRef(debounce(handleSearchText, 500)).current;
  useEffect(() => {
    if (search) {
      debouncedSearch(search);
    }
  }, [search]);
  return (
    <section>
      <center>
        <h1>Google Debounce</h1>
        <div>
          <input
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            title="Search"
            name="search"
            placeholder="Search Google"
          />
        </div>
      </center>
    </section>
  );
};

export default SearchComponentDebounce;
