import "./Main.css";
import "./Responsive.css";
import Header from "./header";
import Navigation from "./navigation";

function Departments() {
  return (
    <body>
      <Header />
      <div className="main-container">
        <Navigation />
        <div className="main">
          <div className="searchbar">
            <input type="text" placeholder="Search" />
            <div className="searchbtn">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                className="icn srchicn"
                alt="search-icon"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
export default Departments;
