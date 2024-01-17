import React from "react";
import Item from "./Item";

export default function PackingList({
  items,
  item,
  handleDeleteItem,
  handleToggleItems,
  handleClearItem,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            handleDeleteItem={handleDeleteItem}
            onToggleItems={handleToggleItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="action">
        <select>
          <option></option>
        </select>
        <button onClick={() => handleClearItem(item)}>Clear</button>
      </div>
    </div>
  );
}
