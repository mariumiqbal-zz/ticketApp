import React from "react";

export default function TicketDetail(props) {
  const { description, completed } = props.ticketDetail;
  console.log("test, props.", props.ticketDetail);
  return (
    <div className="App">
      <h2>Ticket Detail Screen</h2>
      <div>
        Description: {description}
        <br />
        Ticket Completed: {completed ? "Yes" : "No"}
      </div>
    </div>
  );
}
