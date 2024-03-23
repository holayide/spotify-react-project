import { NavLink } from "react-router-dom";
import "../css/LandingPage.css";

export default function Header() {
  return (
    <div className="head-wrapper">
      <Logo />
      <NavBar />
    </div>
  );
}

export function Logo() {
  return <img src="../../assets/spotify-white.svg" alt="Logo-white" />;
}

function NavBar() {
  return (
    <div>
      <ul className="nav">
        <ListNav color="#ffff">Premium</ListNav>
        <ListNav color="#ffff">Support</ListNav>
        <ListNav color="#ffff">Download</ListNav>
        <ListNav color="#D9DADC">|</ListNav>
        <ListNav color="#D9DADC">Sign up</ListNav>
        <ListNav goto="/login" color="#D9DADC">
          Log in
        </ListNav>
      </ul>
    </div>
  );
}

function ListNav({ goto, color, children }) {
  return (
    <li className="list-items">
      <NavLink to={goto} style={{ color: color }}>
        {children}
      </NavLink>
    </li>
  );
}

// function ListNav(props) {
//   return (
//     <li className="list-items">
//       <a href="#/dashboard" style={{ color: props.color }}>
//         {props.name}
//       </a>
//     </li>
//   );
// }
