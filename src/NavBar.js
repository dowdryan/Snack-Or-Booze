import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

/** NavBar: Renders a navigation bar at the top of the page.
 * Holds links used to send a user to the snacks/drinks page(s).
 */
function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>
        <Nav className="ml-auto" navbar>
          <NavItem>
            {/* Redirects to Snacks page */}
            <NavLink to="/snacks">Snacks</NavLink> 
          </NavItem>
          <NavItem>
            {/* Redirects to Drinks page */}
            <NavLink to="/drinks">Drinks</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
