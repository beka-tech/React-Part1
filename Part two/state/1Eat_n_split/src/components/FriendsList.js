import React from "react";
import Friend from "./Friend";

function FriendsList({ friends, handleSelect, onhandleSelect }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleSelect={handleSelect}
          onhandleSelect={onhandleSelect}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
