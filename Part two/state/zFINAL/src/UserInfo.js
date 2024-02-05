import React from "react";
import axios from "axios";

function UserInfo({ userData }) {
  return (
    <div>
      <h2>User Information</h2>
      <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
      <p>
        <strong>Username:</strong> {userData.login}
      </p>
      <p>
        <strong>Followers:</strong> {userData.followers}
      </p>
      <p>
        <strong>Following:</strong> {userData.following}
      </p>
      {/* Add more information as needed */}
    </div>
  );
}

export default UserInfo;
