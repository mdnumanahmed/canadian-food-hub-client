import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import logo from "/logo-food-red.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const FoodNavbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className=" bg-slate-100 border-teal-200 border-b-2">
      <div className="container mx-auto bg-slate-100">
        <Navbar fluid={true} rounded={true} style={{backgroundColor:'#f1f5f9'}}>
          <div>
            <Link to="/" className="flex justify-center flex-col">
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white hidden lg:block">
                Canadian
              </span>
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            </Link>
          </div>
          <div className="flex md:order-2">
            {!user ? (
              <Button>
                {" "}
                <Link to="/login">Login</Link>
              </Button>
            ) : (
              <>
                {" "}
                <Button onClick={handleSignOut}> Sign Out </Button>
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      title={user?.displayName}
                      className="ml-3"
                      alt="User settings"
                      img={user?.photoURL}
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user?.displayName}</span>
                    <span className="block truncate text-sm font-medium">
                      {user?.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                </Dropdown>
              </>
            )}

            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <NavLink to="/" className="px-4 py-2.5 text-center mr-2 mb-2">
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="px-4 py-2.5 text-center mr-2 mb-2"
            >
              Services
            </NavLink>
            <NavLink to="/chefs" className="px-4 py-2.5 text-center mr-2 mb-2">
              Chefs
            </NavLink>
            <NavLink to="/foods" className="px-4 py-2.5 text-center mr-2 mb-2">
              Foods
            </NavLink>
            <NavLink to="/blogs" className="px-4 py-2.5 text-center mr-2 mb-2">
              Blogs
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default FoodNavbar;
