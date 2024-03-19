import { useState, useRef, useEffect } from 'react';

const SearchComponent = () => {
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  useEffect(() => {
    searchRef.current.focus();
  }, []);
  return (
    <section>
      <center>
        <h1>Google</h1>
        <div>
          <input
            id="search"
            ref={searchRef}
            value={search}
            onChange={(e) => {
              console.log('Event', e.target.value);
              setSearch(e.target.value);
            }}
            title="Search"
            name="search"
            placeholder="Search Google"
          />
        </div>
      </center>
    </section>
  );
};

export default SearchComponent;
