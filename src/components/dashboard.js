import "./Main.css";
import "./Responsive.css";
import Header from "./header";
import Navigation from "./navigation";
import { NavLink } from "react-router-dom";

function Dashboard() {
  let smCardItems = [
    { name: "Students", count: 1000, path: "/students" },
    { name: "Teachers", count: 20, path: "/teachers" },
    { name: "Departments", count: 5, path: "/departments" },

  ];
  const cards = smCardItems.map((cells) => (
    <NavLink style={{textDecoration:'none'}} to={cells.path}>
      <div key={cells.name}className="box">
        <div className="text">
          <h2 className="box-heading">{cells.name}</h2>
          <h2 className="count">{cells.count}</h2>
        </div>
      </div>
    </NavLink>
  ));
  return (
    <body>
      <Header />
      <div className="main-container">
        <Navigation />
        <div className="main">
          <div className="box-container">
            {cards}
          </div>
        </div>
      </div>
    </body>
  );
}
export default Dashboard;
