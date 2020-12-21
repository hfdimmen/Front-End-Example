import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Facts.css';

function Facts() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div>Loading API data...</div>
  }
    else {

    return (
      <body className="App-body">
        <p>Cat facts are here!</p>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
        <Link to="/">Home</Link>
      </body>)
  }
}

export default Facts;