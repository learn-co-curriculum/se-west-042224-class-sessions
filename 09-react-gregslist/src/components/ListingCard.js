import {useState} from "react";

function ListingCard({ description, image="https://via.placeholder.com/300x300", location, onDelete, id }) {
  const [isFavorite, setIsFavorite] = useState(false)

  function toggleFavorite(){
    setIsFavorite(!isFavorite)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {method: 'DELETE'})
      .then(res => {
        if (res.ok){
          onDelete(id) // pessimistic
        }
      })
    // onDelete(id) // optimistic rendering
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
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
} 

export default ListingCard;
