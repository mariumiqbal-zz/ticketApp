import React, { Component } from "react";
import ListTicket from "./../ListTicket/ListTicket";

import "./style.css";

class CreateTicket extends Component {
  state = {
    tickets: [
      {
        id: 0,
        description: "Install a monitor arm",
        assigneeId: 111,
        completed: true
      },
      {
        id: 1,
        description: "Move the desk to the new location",
        assigneeId: 111,
        completed: false
      }
    ],
    input: "",
    lastId: 1
  };

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    });
  };

  createTicket = (event) => {
    try {
      event.preventDefault();

      const newItem = {
        description: this.state.input,
        id: this.state.lastId + 1,
        assigneeId: null,
        completed: false
      };

      if (this.state.input) {
        this.setState((prevState) => ({
          tickets: prevState.tickets.concat(newItem),
          lastId: this.state.lastId + 1
        }));
        this.setState({ input: "" });
      }
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="App">
        <form className="form-field">
          <div>
            <label htmlFor="Description">Ticket Description:</label>
            <input
              type="text"
              id="Description"
              required
              name="description"
              value={this.state.input}
              onChange={this.handleInput}
            />
          </div>

          <div>
            <label htmlFor="assigneeId">Assigned User </label>
            <select id="assigneeId" name="assigneeId">
              {this.props.userList.map((user) => {
                return <option> {user.name}</option>;
              })}
            </select>
          </div>
          <button
            className="create"
            type="submit"
            onClick={this.createTicket.bind(this)}
          >
            Create Ticket
          </button>
        </form>
        <ListTicket ticketList={this.state.tickets} />
      </div>
    );
  }
}

export default CreateTicket;
