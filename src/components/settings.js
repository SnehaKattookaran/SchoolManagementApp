import "./Main.css";
import "./Responsive.css";
import Header from "./header";
import Navigation from "./navigation";

function Settings() {
  return (
    <body>
      <Header />
      <div className="main-container">
        <Navigation />
        <div className="main">
          <h1>Settings</h1>
        </div>
      </div>
    </body>
  );
}
export default Settings;
