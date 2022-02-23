import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Particle from "../src/components/Particles";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import ContactPage from "./Pages/ContactPage";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MenuIcon from "@mui/icons-material/Menu";
import { Routes, Route } from "react-router-dom";
import { Switch } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <>
      <div className="p-particles=js">
        <Particle />
      </div>
      <div className="App">
        <Sidebar navToggle={navToggle} />
        <div className="theme">
          <div className="light-dark-mode">
            <div
              className="left-content"
              style={{ color: theme === "light-theme" ? "black" : "black" }}
            >
              <Brightness4Icon
                style={{
                  color: theme === "light-theme" ? "#d96f04" : "#787877",
                }}
              />
            </div>
            <div className="right-content">
              <Switch
                value=""
                checked={checked}
                size="medium"
                inputProps={{ "aria-label": "" }}
                onClick={themeToggler}
              />
            </div>
          </div>
        </div>

        <div className="ham-burger-menu">
          <MenuIcon onClick={() => setNavToggle(!navToggle)} />
        </div>

        <MainContentStyled>
          <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolios" element={<PortfoliosPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </MainContentStyled>
      </div>
    </>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
      z-index: -1;
    }
  }
`;

export default App;
