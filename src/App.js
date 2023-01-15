import axios from "axios";
import React, { useState } from "react";
import Card from "./Card";

function App() {
  const [list, setList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("false");

  const handleSetName = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("http://localhost:4000/superhero", {
        searchName,
      });
      setList(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <label>Search Name</label>
      <input
        style={{
          width: "20rem",
          background: "#F0F0F0",
          borderStyle: "solid",
          padding: "0.5rem",
          marginLeft: "0.5rem",
          marginRight: "0.5rem",
        }}
        key="search-bar"
        placeholder={"input names"}
        onChange={(e) => handleSetName(e)}
      />
      <button
        sytle={{
          width: "20rem",
          backgroundColor: "#008CBA",
          textAlign: "center",
          fontSize: "16px",
        }}
        onClick={handleSearch}
      >
        Search
      </button>
      {isLoading && <div>Loading Data</div>}
      {message && <div>{message}</div>}
      <div>
        {list.length > 0 ? (
          list.map((item) => {
            return <Card key={item.id} item={item} setMessage={setMessage} />;
          })
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}

export default App;
