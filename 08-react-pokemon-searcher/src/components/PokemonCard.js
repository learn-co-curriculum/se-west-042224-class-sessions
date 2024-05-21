import {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({hp, name, sprites: {front, back}}) {
  const [isShowFront, setIsShowFront] = useState(true)

  function toggleSide(){
    setIsShowFront(!isShowFront)
  }

  return (
    <Card>
      <div onClick={toggleSide}>
        <div className="image">
          <img src={isShowFront ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
