import React from "react";
import Purse from "./Purse";
import InventoryTile from "./InventoryTile";

function Inventory({ inventory, potions, sell, shake, stopShake, gold }) {
  const inventoryList = inventory.map((item) => {
    const potion = potions.find((potion) => potion.id === item.id);

    return (
      <InventoryTile key={potion.id} potion={potion} sell={sell}>
        <h4>
          {potion.name} x {item.amount}
        </h4>
      </InventoryTile>
    );
  });

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <Purse stopShake={stopShake} shake={shake} gold={gold} />
      <div className="inventory-cards">{inventoryList}</div>
    </div>
  );
}

export default Inventory;
