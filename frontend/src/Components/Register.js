import styled from "styled-components";
import { forwardRef,useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Navigate } from "react-router-dom";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={3} ref={ref} variant="filled" {...props} />;
});

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckpassword] = useState("");
  const [email, setEmail] = useState("");
  const [userid, setUserId] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);


  function register(name,userid,email,password,checkpassword) {
    console.log(name+","+userid+","+email+","+password+","+checkpassword);
    if(password!==checkpassword) return false;
    return true;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckPasswordChange = (event) => {
    setCheckpassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (register(name,password)) {
      localStorage.setItem('token', name);
      setLoggedIn(true);
      //window.location.reload(false);
    } else {
      setOpen(true);
    }
  };

  
  if(loggedIn) return (<Navigate to="/home"></Navigate>)

  return (
    <div id="register">
      <MainContainer onSubmit={handleSubmit}>
      <WelcomeText>Register</WelcomeText>
      <InputContainer>
        <StyledInput type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
        <StyledInput type="text" placeholder="UserId" value={userid} onChange={handleUserIdChange}/>
        <StyledInput type="text" placeholder="Email" value={email} onChange={handleEmailChange}/>
        <StyledInput type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        <StyledInput type="password" placeholder="Check Password" value={checkpassword} onChange={handleCheckPasswordChange}/>
      </InputContainer>
      <ButtonContainer>
        <StyledButton type="submit">Register</StyledButton>
      </ButtonContainer>
      <Snackbar open={open} autoHideDuration={6000} sx={{ width: '100%' }} onClose={handleClose} anchorOrigin={{vertical:"bottom",horizontal:"center"}}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Registeration Failed, Try Again!
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
  height: 80vh;
  width: 35vw;
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
    height: 90vh;
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
  height: 100%;
  width: 100%;
  border:"1px solid black";
`;

const ButtonContainer = styled.div`
  margin: 1.5rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 1.5rem;
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
    color: #FFE0C2;
    font-weight: 100;
    font-size: 1rem;
  }
`;


export default Register;
