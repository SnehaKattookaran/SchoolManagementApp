import "./Main.css";
import "./Responsive.css";
import Header from "./header";
import Navigation from "./navigation";
import { useState } from "react";

function Students() {
  let studData = [
    {id: "105", name: "Sneha", dept: "Civil Eng.", year: "Third Year", class: "CE-A", userType: "st"},
    {id: "102", name: "Soumya", dept: "Civil Eng.", year: "Third Year", class: "CE-A", userType: "st"},
    {id: "106", name: "Denila", dept: "Civil Eng.", year: "Third Year", class: "CE-A", userType: "st"},
    {id: "104", name: "Amala", dept: "Civil Eng.", year: "Third Year", class: "CE-A", userType: "st"},
    {id: "103", name: "Smija", dept: "Civil Eng.", year: "Final Year", class: "CE-B", userType: "st"},
    {id: "101", name: "Smrithy", dept: "Electrical Eng.", year: "Second Year", class: "EE-A", userType: "st"},
    {id: "107", name: "Manu", dept: "Mechanical Eng.", year: "Second Year", class: "ME-B", userType: "st"},
    {id: "108", name: "Jacob", dept: "Mechanical Eng.", year: "Second Year", class: "ME-A", userType: "st"},
    {id: "109", name: "Fila", dept: "Computer Science Eng.", year: "First Year", class: "CSE-B", userType: "st"},
    {id: "110", name: "Swetha", dept: "Computer Science Eng.", year: "Third Year", class: "CSE-A", userType: "st"},
    {id: "112", name: "Femi", dept: "Electronics & Communication Eng.", year: "First Year", class: "ECE-B", userType: "st"},
    {id: "111", name: "Swathy", dept: "Electronics & Communication Eng.", year: "Final Year", class: "ECE-A", userType: "st"},
  ];

  const [search, setSearch] = useState("");
  if (search.length > 0) {
    studData = studData.filter(
      (s) =>
        s.id.toLowerCase().includes(search.toLowerCase()) ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.dept.toLowerCase().includes(search.toLowerCase()) ||
        s.year.toLowerCase().includes(search.toLowerCase()) ||
        s.class.toLowerCase().includes(search.toLowerCase())
    );
  }

  const [order, setOrder] = useState();
  if (order === "Asc") {
    studData = studData.sort((a, b) => a.id - b.id);
    console.log(order);
    console.log(studData);
  }
  if (order === "Dsc") {
    studData = studData.sort((a, b) => b.id - a.id);
    console.log(order);
    console.log(studData);
  }
  const table = studData.map((datas) => (
    <tr>
      <td>{datas.id}</td>
      <td>{datas.name}</td>
      <td>{datas.dept}</td>
      <td>{datas.year}</td>
      <td>{datas.class}</td>
    </tr>
  ));

  return (
    <body>
      <Header />
      <div className="main-container">
        <Navigation />
        <div className="main">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="searchbtn">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                className="icn srchicn"
                alt="search-icon"
              ></img>
            </div>
          </div>

          <table className="stud-table">
            <tr>
              <th>
                <span className="sort">
                  ID
                  <div>
                  <button
                    className="asc"
                    value="Asc"
                    onClick={(e) => setOrder(e.target.value)}
                  >▲</button>
                  <button
                    className="dsc"
                    value="Dsc"
                    onClick={(e) => setOrder(e.target.value)}
                  >▼</button>
                  </div>
                </span>
              </th>
              <th>Name</th>
              <th>Department</th>
              <th>Year</th>
              <th>Class</th>
            </tr>
            {table}
          </table>
        </div>
      </div>
    </body>
  );
}
export default Students;
