import "./Main.css";
import "./Responsive.css";
import { useSelector } from "react-redux";

function Header() {
  const storeState = useSelector((state) => state.user);
  return (
    <header className="dashboard-header">
      <div className="logosection">
        <div className="appname">
          SM
          <div>
            <img
              src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYgpZeGtrzWEqq79niSzzzfcglN5LeH4f3bz3VKMkojVS6-Zzm"
              className="logo"
              alt="logo"
            ></img>
          </div>
        </div>
        <img
          src="https://www.seekpng.com/png/detail/376-3766322_film-forum-menu-icon-dark-blue.png"
          className="icn menuicn"
          id="menuicn"
          alt="menu-icon"
        ></img>
      </div>

      <div className="profile">
        <div className="Name">
          <h4>
            {storeState.first_name} {storeState.last_name}
          </h4>
        </div>
        <div className="dp">
          <img src={storeState.avatar} className="icn dpicn" alt="dp"></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
