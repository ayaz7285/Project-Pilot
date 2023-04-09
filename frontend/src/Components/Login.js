import styled from "styled-components";
import { forwardRef,useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Navigate ,Link} from "react-router-dom";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={3} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);


  function isValidUser(username, password) {
    if (username === "admin" && password === "admin") return true;
    else return false;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (isValidUser(username, password)) {
    //   //props.onLogin(username);
    //   localStorage.setItem("token",username);
    // } else {
    //   // alert("Invalid username or password");
    //   setOpen(true);
    // }
    if (isValidUser(username,password)) {
      localStorage.setItem('token', username);
      setLoggedIn(true);
      //window.location.reload(false);
    } else {
      setOpen(true);
    }
  };

  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  
  if(loggedIn) return (<Navigate to="/home"></Navigate>)

  return (
    <div id="login">
      <MainContainer onSubmit={handleSubmit}>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <StyledInput type="text" placeholder="Email" value={username} onChange={handleUsernameChange}/>
        <StyledInput type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
      </InputContainer>
      <ButtonContainer>
        <StyledButton type="submit">Sign Up</StyledButton>
      </ButtonContainer>
      <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalRule />
      <IconsContainer>
        <StyledIcon background={FacebookBackground}><FaFacebookF /></StyledIcon>
        <StyledIcon background={InstagramBackground}><FaInstagram /></StyledIcon>
        <StyledIcon background={TwitterBackground}><FaTwitter /></StyledIcon>
      </IconsContainer>
      <Link to="/register" style={{color:"white",textDecoration:"none"}}><ForgotPassword>Create New Account</ForgotPassword></Link>
      <Snackbar open={open} autoHideDuration={6000} sx={{ width: '100%' }} onClose={handleClose} anchorOrigin={{vertical:"bottom",horizontal:"center"}}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Wrong Credentials, Try Again!
        </Alert>
      </Snackbar>
    </MainContainer>
    </div>
  );
}

const MainContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 85vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 2.5rem 1rem 2rem 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1.5rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1.5rem 0 2rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 2rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5rem;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;


const StyledIcon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default Login;
