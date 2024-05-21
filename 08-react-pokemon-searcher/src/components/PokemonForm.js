import { useState } from "react";
import { Form } from "semantic-ui-react";

const initialState = {
  name: "",
  hp: "",
  frontUrl: "",
  backUrl: "",
};

function PokemonForm({ onAddPokemon }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e){
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        hp: parseInt(formData.hp),
        sprites: {
          front: formData.frontUrl,
          back: formData.backUrl
        }
      })
    }
    fetch("http://localhost:3001/pokemon", config)
      .then(r => r.json())
      .then(onAddPokemon)
    setFormData(initialState)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={formData.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
