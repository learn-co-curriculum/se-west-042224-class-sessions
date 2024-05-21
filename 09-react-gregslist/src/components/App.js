import { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";

function App() {

  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(setListings)
  }, [])

  function addListing(newListing){
    setListings([newListing, ...listings])
  }

  function removeListing(id){
    setListings(listings.filter(listing => listing.id !== id))
  }

  function changeSearch(newSearch){
    setSearchTerm(newSearch)
  }

  function filterListings(listingArr){
    return listingArr.filter(listing => listing.location.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return (
    <div className="app">
      <Header onSearchChange={changeSearch} />
      <ListingForm onAddListing={addListing}/>
      <ListingsContainer listings={filterListings(listings)} onDelete={removeListing} />
    </div>
  );
}

export default App;
