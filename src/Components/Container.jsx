import React from "react";
import "../Styles/Container.css";
import Api from "../utils/Api";
import Table from "./Table.jsx";
import Searchbar from "./Searchbar";

class Container extends React.Component {
  state = {
    employees: [],
    search: "",
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
            dob: dataRow.dob.date,
          };
        });
        this.setState({ employees: employeeData });
        console.log(this.state.employees);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
  searchChange = event => {
    this.setState({search: event.target.value});
  }
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Searchbar search={this.state.search} searchChange={this.searchChange}/>
          <p>{this.state.search}</p>
          <Table>
            {this.state.employees ? (
              this.state.employees.map((emp) => (
                <tr className="userData" key={emp.id}>
                  <td>
                    <img src={emp.image} alt="" />
                  </td>
                  <td>{emp.name}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.email}</td>
                  <td>{emp.dob}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            )}
          </Table>
        </div>
      </div>
    );
  }
}

export default Container;
