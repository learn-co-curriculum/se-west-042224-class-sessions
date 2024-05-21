import {useState} from "react";

function ListingCard({ description, image="https://via.placeholder.com/300x300", location}) {
  const [isFavorite, setIsFavorite] = useState(false)

  function toggleFavorite(){
    setIsFavorite(!isFavorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={`${description} thumbnail`} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={toggleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
} 

export default ListingCard;
