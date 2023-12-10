import "./Header.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

function Header({ onModal,onCloseModal }) {
  return (
    <div className="header">
      <div className="content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-bar">
            <ul>
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/" className="link">About</Link></li>
                <li><Link to="/menu" className="link">Menu</Link></li>
                <li><Link to="/" className="link">News</Link></li>
                <li><button onClick={onModal}>Add New Dish</button></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
