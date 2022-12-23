import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  line-height: 1em;
  border: 1px solid black;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
`;
const Title = styled.h1`
  font-size: 24px;
`;
const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  outline: none;
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

const Signin = () => {
  return (
    <Wrapper>
      <Title>Sign in</Title>
      <Subtitle>to continue to Site</Subtitle>
      <Input placeholder="username" />
      <Input placeholder="password" />
      <Button>Sign in</Button>
      <Title>or</Title>
      <Button>signin with Google</Button>
      <Title>or</Title>
      <Input placeholder="username" />
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Button>Sign up</Button>
    </Wrapper>
  );
};

export default Signin;
