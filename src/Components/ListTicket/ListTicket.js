import React, { Component } from "react";

import "./style.css";

class CreateTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
    this.updateHandler = this.updateHandler.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  updateHandler(id, status) {
    let tickets = [...this.props.ticketList];
    tickets[id].completed = true;
    if (!status) {
      this.setState({ tickets });
    } else alert("Ticket is already completed");
  }

  handleSearch(searchCriteria) {
    this.setState({
      filter: searchCriteria
    });
  }

  render() {
    let filteredTickets = this.props.ticketList;
    if (this.state.filter) {
      filteredTickets = filteredTickets.filter((item) =>
        item.description.toLowerCase().includes(this.state.filter)
      );
    }
    return (
      <div className="ticket-detail">
        <h2> Ticket List </h2>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => this.handleSearch(e.target.value.toLowerCase())}
          value={this.state.filter}
        />
        <ul>
          {filteredTickets.map((ticket) => {
            return (
              <div>
                <li key={ticket.id}>
                  <span className="description">
                    <a href="/">{ticket.description} </a>
                  </span>
                  <button
                    onClick={() =>
                      this.updateHandler(ticket.id, ticket.completed)
                    }
                    className="complete"
                    type="submit"
                  >
                    Complete
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default CreateTicket;
