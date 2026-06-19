import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">მთავარი</NavLink><br />
      <NavLink to="/about">ჩვენს შესახებ</NavLink><br />
      <NavLink to="/contact">კონტაქტი</NavLink>
    </nav>
  );
};

export default Navbar;