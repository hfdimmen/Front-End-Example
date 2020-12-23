import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Facts.css';

//Inefficient way of fetching API data with hooks as it will be loaded multiple
//times navigating the two pages
function Facts() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [howManyFacts, setHowMany] = useState(false);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const showHowMany = () => {
    setHowMany(!howManyFacts);
  };

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
  } else if (!isLoaded || !items[0]) {
    return <div>Loading API data...</div>
  }
  else {
    return (
      <div className="Facts-body">
        <p>Cat facts are here!</p>
        <div className="Facts-buttons">
          <button className="Facts-button" onClick={handleDecrement}>Previous</button>
          <button className="Facts-button" onClick={handleIncrement}>Next</button>
        </div>
        <p>{items[count % items.length].text}</p>
        <button className="Facts-button" onClick={showHowMany}>How many cat facts are there?</button>
        {howManyFacts && <p>There are {items.length} facts... (I hoped this API had more...)</p>}
        {howManyFacts && <Link className="Facts-button" to="/">Well.. take me home then!</Link>}
      </div>)
  }
}

export default Facts;