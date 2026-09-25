import logo from "../../assets/images/logo.png";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const NavBar = () => {
  return (
    <nav className=" bg-white shadow-lg">
      <div className="flex justify-between items-center gap-4 py-2 container mx-auto">
        <img src={logo} alt="logo" className="w-12.5" />
        <ul className="flex justify-between items-center gap-4">
          <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/installedApps"}>Installation</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/dashboard"}>Dashboard</MyNavLink>
          </li>
        </ul>
        <button className="btn bg-purple-500 text-white">
          <FaGithub></FaGithub> Contribute
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
