import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.show.id}>
          <h3>{item.show.name}</h3>
          <p>{item.show.summary}</p>
          <button>View Summary</button>
        </div>
      ))}
    </div>
  );
}

export default App;
