import React from "react";
import CreateTicket from "./Components/CreateTicket/CreateTicket";

import "./App.css";

export default function App() {
  const users = [{ id: 111, name: "Victor" }];

  return (
    <div className="App">
      <h2>Ticket Managing App</h2>
      <CreateTicket userList={users} />
    </div>
  );
}
