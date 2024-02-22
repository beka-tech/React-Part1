import React from "react";
import Friend from "./Friend";

function FriendsList({
  friends,
  handleSelect,
  onhandleSelect,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleSelect={handleSelect}
          onhandleSelect={onhandleSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
