import React, { useState } from "react";
import SearchForm from "./SearchForm";
import UserInfo from "./UserInfo";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState(null);

  const handleSearch = async (username) => {
    // Perform API request and set user data
    // You can use the GitHub API or any other API you prefer
    // Example using Axios:
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUserData(null);
    }
  };

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      {userData && <UserInfo userData={userData} />}
    </div>
  );
}

export default App;
