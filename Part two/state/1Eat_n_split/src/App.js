import React, { useState } from "react";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import Button from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setfriends] = useState(initialFriends);
  const [showAddFriend, setshowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleshowAddFriend() {
    setshowAddFriend((show) => !show);
  }

  function handleAddfriend(friend) {
    setfriends((friends) => [...friends, friend]);
    setshowAddFriend(false);
  }
  function handleSelect(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((currentfriend) =>
      currentfriend?.id === friend.id ? null : friend
    );
    setshowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onhandleSelect={handleSelect}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onAddfriend={handleAddfriend} />}

        <Button onclick={handleshowAddFriend}>
          {showAddFriend ? "CLOSE" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}
