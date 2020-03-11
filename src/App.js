import React from "react";
import data from "./components/data/data.json";
import EmployeeTable from "./components/pages/index";
import '../src/App.js'
import "../src/app.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      value: ""
    };
    this.onSort = this.onSort.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleUserTyped = this.handleUserTyped.bind(this);

    this.sortedatoz = null;
  }

  handleFilter(event) {
    event.preventDefault();
    let filterUsers = this.state.data;

    console.log(filterUsers);
    filterUsers = filterUsers.filter(user => {
      return user.firstName  === this.state.value || user.role  === this.state.value || user.title  === this.state.value  ; 
      
    });

    this.setState({
      data: filterUsers
    });
  }

  handleUserTyped(event) {
    this.setState({ value: event.target.value });
  }

  onSort(event, id) {
    console.log(id);
    const data = this.state.data;

    if (this.sortedatoz === true) {
      data.sort((a, b) => b["surname"].localeCompare(a["surname"]));
      this.sortedatoz = false;
    } else {
      data.sort((a, b) => a["surname"].localeCompare(b["surname"]));
      this.sortedatoz = true;
    }

    this.setState({ data });

    //   this.setState({
    //     data: data.sort((a,b) => a[key] > b[key])
    //   });
  }
  render() {
    return (
      <div class="page">
        <h1> Employee Table </h1>
        <form onSubmit={this.handleFilter}>
          <label>
            Search:
            <input
              type="text"
              name="name"
              value={this.state.value}
              onChange={this.handleUserTyped}
            />
          </label>
          <input type="submit" value="Filter Users" />
        </form>
        <EmployeeTable className = "table"
          data={this.state.data}
          onSort={this.onSort}
          handleFilter={this.handleFilter}
        />
      </div>
    );
  }
}

export default App;
