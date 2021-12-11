import React from "react";

const Header = () => {
  const user = "Guest";
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>React Context Api</h2>
        <div className="profile">
          <h3>Welcome, {user}</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
