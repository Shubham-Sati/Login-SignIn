import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import SignIn from "./pages/SignIn";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { darkTheme, lightTheme } from "./utils/Theme";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
`;

const Container = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  position: absolute;
  top: 3rem;
  left: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const SignInBox = styled.div`
  width: 20rem;
  display: flex;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Wrapper>
        <Container onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <LightModeIcon style={{ color: "white" }} />
          ) : (
            <DarkModeIcon />
          )}
        </Container>
        <>
          <BrowserRouter>
            <SignInBox>
              <Routes>
                <Route path="/">
                  <Route index element={<SignIn />} />
                  <Route path="home" element={<Home />} />
                </Route>
              </Routes>
            </SignInBox>
          </BrowserRouter>
        </>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
