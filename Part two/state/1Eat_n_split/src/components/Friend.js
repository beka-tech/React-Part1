import React from "react";
import Button from "./Button";

function Friend({ friend, onhandleSelect }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          you owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name}</p>}
      <Button onclick={() => onhandleSelect(friend)}>Select </Button>
    </li>
  );
}
export default Friend;
