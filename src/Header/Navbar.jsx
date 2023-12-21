import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarRoutes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Dashboard", path: "dashboard" },
  ];

  const NavbMenu = navbarRoutes?.map((item) => (
    <li key={item.path}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ));

  return (
    <div>
      <div className="navbar max-w-screen-xl md:px-6 mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-medium  shadow bg-base-100 rounded-md border-neutral border w-52"
            >
              {NavbMenu}
            </ul>
          </div>
          <a className="md:text-3xl xl:text-4xl font-semibold text-2xl">TaskEase</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">{NavbMenu}</ul>
        </div>
        <div className="navbar-end">
          <Link to={'/login'} className="btn btn-sm btn-neutral">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
