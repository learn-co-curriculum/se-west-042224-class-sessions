import {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const [selectedDetail, setSelectedDetail] = useState("profile")

  let detailsToDisplay = {
    "profile": <Profile />,
    "photo": <Photos />,
    "cocktail": <Cocktails />,
    "pokemon": <Pokemon />
  }

  function selectDetail(detail){
    setSelectedDetail(detail)
  }
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  // let detailsToDisplay = <Profile />;
  // if (selectedDetail === "profile") {
  //   detailsToDisplay = <Profile />
  // } else if (selectedDetail === "photo") {
  //   detailsToDisplay = <Photos />
  // } else if (selectedDetail === "cocktail") {
  //   detailsToDisplay = <Cocktails />
  // } else {
  //   detailsToDisplay = <Pokemon />
  // }

  return (
    <div>
      <MenuBar selectedDetail={selectedDetail} onSelect={selectDetail} />
      {detailsToDisplay[selectedDetail]}
    </div>
  );
}

export default MainBox;
