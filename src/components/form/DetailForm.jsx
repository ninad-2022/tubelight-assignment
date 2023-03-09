import React, { Component } from "react";
// Define a child component for each user in the list
class UserListItem extends Component {
  render() {
    const { name, email, number, city } = this.props;
    return (
      <div class="card">
        <h4>Name: {name}</h4>
        <p>Email: {email}</p>
        <p>Number: {number}</p>
        <p>City: {city}</p>
      </div>
    );
  }
}

// Define the main component for the form
class DetailForm extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    city: "",
    userList: [],
    search: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, number, city, userList } = this.state;
    const newUserList = [...userList, { name, email, number, city }];
    const sortedUserList = newUserList.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState({
      userList: sortedUserList,
      name: "",
      email: "",
      number: "",
      city: "",
    });
  };

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { name, email, number, city, userList, search } = this.state;
    const filteredUserList = userList.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div>
        <form className="center" onSubmit={this.handleSubmit}>
          <div className="box">
            <h2>Detail Form</h2>
            <div>
              <input
                className="input-field row"
                type="text"
                name="name"
                value={name}
                placeholder="Enter Name."
                onChange={this.handleInputChange}
              />
              <input
                type="email"
                className="input-field row"
                name="email"
                placeholder="Enter Email Id."
                value={email}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="number"
                className="input-field row"
                placeholder="Enter Number."
                value={number}
                onChange={this.handleInputChange}
              />
              <input
                type="text"
                name="city"
                className="input-field row"
                placeholder="Enter City."
                value={city}
                onChange={this.handleInputChange}
              />
            </div>
            <button className="button row" type="submit">
              Submit
            </button>
          </div>
        </form>
        <input
          type="text"
          placeholder="Search Users"
          className="input-field row"
          value={search}
          onChange={this.handleSearchChange}
        />
        <div>
          {filteredUserList.map((user, index) => (
            <UserListItem
              name={user.name}
              email={user.email}
              number={user.number}
              city={user.city}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DetailForm;
