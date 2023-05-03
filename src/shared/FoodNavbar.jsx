import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import logo from "/logo-food-red.png";
import { Link, NavLink } from "react-router-dom";

const FoodNavbar = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <div>
          <NavLink to="/" className="flex justify-center flex-col">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white hidden lg:block">
              Canadian
            </span>
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          </NavLink>
        </div>
        <div className="flex md:order-2">
          <Button> <Link to='/login'>Login</Link></Button>
          <Button> Sign Out </Button>
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                className="ml-3"
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/chefs">Chefs</NavLink>
          <NavLink to="/foods">Foods</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default FoodNavbar;
