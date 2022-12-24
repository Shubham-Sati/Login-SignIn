import React, { useState } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, provider } from "../config/Firebase";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

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
const Span = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const SpanSuccess = styled.span`
  color: green;
  font-size: 12px;
  margin-top: 5px;
`;

const Signin = () => {
  const navigate = useNavigate();
  const [signin, setSignin] = useState({
    email: "",
    password: "",
    error: "",
  });

  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
    success: "",
    passwordError: "",
    emailError: "",
  });

  // console.log("Sign In", signin.username, signin.password);
  // console.log("Sign Up", signup.username, signup.password, signup.email);

  const handleSignIn = () => {
    if (signin.username === "" || signin.password === "") {
      setSignin((prev) => ({ ...prev, error: "*Please Fill All Fields" }));
      return;
    } else if (!validateEmail(signin.email)) {
      setSignin((prev) => ({
        ...prev,
        error: "Fill correct Email Format.",
      }));
      return;
    }

    signInWithEmailAndPassword(auth, signin.email, signin.password)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        setSignin((prev) => ({
          ...prev,
          error: "email of password wrong",
        }));
        // this is error msg
        console.log(error);
      });
  };

  const validateEmail = (email) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSignUp = () => {
    if (
      signup.username === "" ||
      signup.password === "" ||
      signup.email === ""
    ) {
      setSignup((prev) => ({
        ...prev,
        error: "*Please Fill All Fields",
        emailError: "",
        passwordError: "",
        success: "",
      }));
      return;
    } else if (!validateEmail(signup.email)) {
      setSignup((prev) => ({
        ...prev,
        error: "",
        emailError: "*Please Fill Correct Email",
        passwordError: "",
        success: "",
      }));
      return;
    } else if (signup.password.length < 6) {
      setSignup((prev) => ({
        ...prev,
        error: "",
        emailError: "",
        passwordError: "*Password should be atleast 6 characters",
        success: "",
      }));
      return;
    }

    createUserWithEmailAndPassword(auth, signup.email, signup.password)
      .then(async (res) => {
        setSignup((prev) => ({
          ...prev,
          error: "",
          emailError: "",
          passwordError: "",
          success: "Account created successfully.",
        }));

        const user = res.user;
        await updateProfile(user, {
          displayName: signup.username,
        });

        // this is user
        console.log(user);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((error) => {
        alert("Something went wrong. Try again");
      });
  };

  return (
    <Wrapper>
      <Title>Sign in</Title>
      <Subtitle>to continue to Site</Subtitle>
      <Input
        type="email"
        placeholder="email"
        onChange={(event) =>
          setSignin((prev) => ({ ...prev, email: event.target.value }))
        }
      />
      <Input
        type="password"
        placeholder="password"
        onChange={(event) =>
          setSignin((prev) => ({ ...prev, password: event.target.value }))
        }
      />
      {signin.error && <Span>{signin.error}</Span>}
      <Button onClick={handleSignIn}>Sign in</Button>
      <Title>or</Title>
      <Button onClick={handleSignInWithGoogle}>Sign in with Google</Button>
      <Title>or</Title>
      <Input
        type="text"
        placeholder="username"
        onChange={(event) =>
          setSignup((prev) => ({ ...prev, username: event.target.value }))
        }
      />
      <Input
        type="email"
        placeholder="email"
        onChange={(event) =>
          setSignup((prev) => ({ ...prev, email: event.target.value }))
        }
      />
      <Input
        type="password"
        placeholder="password"
        onChange={(event) =>
          setSignup((prev) => ({ ...prev, password: event.target.value }))
        }
      />
      {signup.error && <Span>{signup.error}</Span>}
      {signup.passwordError && <Span>{signup.passwordError}</Span>}
      {signup.emailError && <Span>{signup.emailError}</Span>}
      {signup.success && <SpanSuccess>{signup.success}</SpanSuccess>}
      <Button onClick={handleSignUp}>Sign up</Button>
    </Wrapper>
  );
};

export default Signin;
