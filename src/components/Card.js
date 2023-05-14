import React, { useState, useEffect } from 'react';
import './Card.css';

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='card'>
      {data.map(item => (
        <div className='sub-card' key={item.id}>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          <div className="rating">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;