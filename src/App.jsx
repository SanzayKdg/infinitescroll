import { useState, useRef, useCallback } from "react";
import useBookSearch from "./hooks/useBookSearch";

const App = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });

      // if we have an node, start observing it
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <div className="p-4 flex flex-col gap-4 items-center justify-start h-screen">
      <input
        type="text"
        placeholder="Search"
        className="w-1/2 border border-gray-500 outline-none px-2 py-4"
        onChange={handleSearch}
        value={query}
      />
      <div className="flex flex-col gap-2 w-1/2 h-full">
        {books &&
          books.map((book, index) => {
            if (books.length == index + 1) {
              return (
                <div ref={lastBookElementRef} key={book}>
                  {book}
                </div>
              );
            } else {
              return <div key={book}>{book}</div>;
            }
          })}
        {loading && <div>Loading...</div>}
        {error && <div>Error</div>}
      </div>
    </div>
  );
};

export default App;
