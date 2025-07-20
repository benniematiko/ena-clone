import "./Search.css";

const Search = () => {
  return (
    <section className="search">
      <div className="searchcontainer">

        <div className="from">
          <input type="text" placeholder="From" />
        </div>
        <div className="to">
          <input type="text" placeholder="To" />
        </div>
        <div className="numberofpeople">
          <input type="text" placeholder="Number" />
        </div>

        <div className="searchDate">
          <input type="date" placeholder="Number" />
        </div>


        <div className="searchDate">
          <button>Search</button>
        </div>



      </div>
    </section>
  );
};

export default Search;
