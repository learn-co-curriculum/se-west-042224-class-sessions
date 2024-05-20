import HogTile from "./HogTile"

function Hoglist({ hogs }) {

    const hogTiles = hogs.map(piglet => (
        <HogTile 
            key={piglet.name + piglet.weight}
            hog={piglet}
        />))

  return (
    <div className="ui grid container">{hogTiles}</div>
  )
}

export default Hoglist