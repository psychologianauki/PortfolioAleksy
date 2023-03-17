import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <a href="/" style={{ color: "white" }}>
          Home
        </a>
        <li>
          {" "}
          <a href="/calender" style={{ color: "white" }}>
            {" "}
            Calender
          </a>
        </li>

        <li>
          <a href="/toDoListPage" style={{ color: "black" }}>
            To Do List
          </a>
        </li>
        {isLoggedIn === true ? (
          <div
            style={{
              color: "red",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Log out <Logout />
          </div>
        ) : (
          <li>
            <a
              href="/loginPage"
              style={{
                color: "black",
              }}
            >
              Login/Register
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
