import React from "react";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../config/Firebase";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  margin-top: 1rem;
`;

const Home = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("User successfully sign out");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Wrapper>
      Home page
      <Button onClick={handleSignOut}>Sign Out</Button>
    </Wrapper>
  );
};

export default Home;
