import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


export default function Navigation() {
  return (
    <NavigationSyled>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-class" : "")}
            exact={true}
          >
            HOME
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-class" : "")}
            exact
          >
            ABOUT
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolios"
            className={({ isActive }) => (isActive ? "active-class" : "")}
            exact
          >
            PORTFOLIOS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-class" : "")}
            exact
          >
            CONTACT
          </NavLink>
        </li>
      </ul>

      <footer className="footer">
        <p>@2022 My Portfolio Website</p>
      </footer>
    </NavigationSyled>
  );
}

const NavigationSyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  
  .nav-items {
    width: 100%;
    height: 100vh;
    text-align: center;
    margin: 75% 0;
    
    width: 100%;
    
    

    .active-class {
      background-color: var(--primary-color);
    }

    li {
      display: block;
      a {
        display: block;
        padding: 0.5rem 0;
        position: relative;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;

        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }

        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: all 0.3s cubic-bezier(1, -0.2, 0.25, 0.95);
          z-index: 3;
          opacity: 0.21;
          z-index: -1;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 0.7rem 0;
      font-size: 0.7rem;
      display: block;
      text-align: center;
    }
  }
`;
