import './Main.css';
import './Responsive.css';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLogout } from "../redux/actions/loginAction";

function Navigation() {
    const dispatch = useDispatch();
    return (
        <div className="navcontainer">
        <nav className="nav">
            <div className="nav-options">
                <NavLink style={{textDecoration:'none'}} to={"/dashboard"}>
                <div className="nav-option option1">
                    <h3>Dashboard</h3>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to={"/students"}>
                <div className="nav-option option4">
                    <h3>Students</h3>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to={"/teachers"}>
                <div className="nav-option option3">
                    <h3>Teachers</h3>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to={"/departments"}>
                <div className="nav-option option2 ">
                    <h3>Departments</h3>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to={"/profile"}>
                <div className="nav-option option5">
                    <h3>Profile</h3>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to={"/settings"}>
                <div className="nav-option option6">
                    <h3>Settings</h3>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to={"/"}>
                <div className="nav-option option7" onClick={() => dispatch(getLogout())}> 
                    <h3>Logout</h3>
                </div>
                </NavLink>
            </div>
        </nav>
        </div>
 );
}

export default Navigation;