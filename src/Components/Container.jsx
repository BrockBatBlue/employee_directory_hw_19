import React from "react";
import "../Styles/Container.css";
import Api from "../utils/Api";
import Table from "./Table.jsx";
import Searchbar from "./Searchbar";

class Container extends React.Component {
  state = {
    employees: [],
    search: "",
    filteredEmployees: [],
  };
  componentDidMount() {
    Api.search()
      .then((data) => {
        // console.log(data.data.results);
        let employeeData = data.data.results.map((dataRow) => {
          return {
            id: dataRow.login.uuid,
            image: dataRow.picture.thumbnail,
            name: dataRow.name.first + " " + dataRow.name.last,
            phone: dataRow.phone,
            email: dataRow.email,
            dob: dataRow.dob.date.substring(0,10),
          };
        });
        this.setState({
          employees: employeeData,
          filteredEmployees: employeeData,
        });
        console.log(this.state.employees);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
  searchChange = (event) => {
    let searchTerm = event.target.value.toLowerCase()
    
    if (searchTerm === "") {
        this.setState({
          filteredEmployees: this.state.employees,
          search: ""
        });
      } else {
        let searchedEmployees = this.state.employees.filter((emp) => {
          return (emp.name.toLowerCase().includes(searchTerm, 0) || 
          emp.phone.replace(' ','').replace('-','').includes(searchTerm, 0) ||
          emp.email.toLowerCase().includes(searchTerm, 0) ||
          emp.dob.replace(' ','').includes(searchTerm, 0)
          );
        });
        this.setState({
            filteredEmployees: searchedEmployees,
            search: searchTerm
        });
      }
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Searchbar
            search={this.state.search}
            searchChange={this.searchChange}
          />
          <p>{this.state.search}</p>
          <Table>
              {this.state.filteredEmployees.map((emp) => (
                <tr className="userData" key={emp.id}>
                  <td>
                    <img src={emp.image} alt="" />
                  </td>
                  <td>{emp.name}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.email}</td>
                  <td>{emp.dob}</td>
                </tr>
              ))}
          </Table>
        </div>
      </div>
    );
  }
}

export default Container;
