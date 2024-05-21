import {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(response => response.json())
      .then(setPokemons)
  }, [])

  function changeSearchTerm(newTerm){
    setSearchTerm(newTerm)
  }

  const filteredPokemons = pokemons.filter(poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchTerm={searchTerm} onChangeSearch={changeSearchTerm} />
      <br />
      <PokemonCollection pokemons={filteredPokemons}/>
    </Container>
  );
}

export default PokemonPage;
