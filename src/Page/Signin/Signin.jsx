import React, {useState} from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { signIn } from '../../Services/UserService';
import './Signin.css';
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin() {
  const[regexObj, setRegexObj] = useState({emailBorder:false, emailHelper:'',
                                           passwordBorder:false, passwordHelper:'',});;

  const[signinObj, setSigninObj] = useState({email:'', password:'',});

  const takeEmail = (event) => {
    setSigninObj((prevState) => ({...prevState, email:event.target.value})); 
  }

  const takePassword = (event) => {
    setSigninObj((prevState) => ({...prevState, password:event.target.value}));
  }

  const submit = () => {
    let emailTest = emailRegex.test(signinObj.email);
    let passwordTest = passwordRegex.test(signinObj.password);

    if(passwordTest === true){
      setRegexObj((prevState) => ({...prevState, passwordBorder:false, passwordHelper:''}));
    }
    else if(passwordTest === false){
      setRegexObj((prevState) => ({...prevState, passwordBorder:true, passwordHelper:'Enter correct password'}));
    }

    if(emailTest === true){
      setRegexObj((prevState) => ({...prevState, emailBorder:false, emailHelper:''}));
    }
    else if(emailTest === false){
      setRegexObj((prevState) => ({...prevState, emailBorder:true, emailHelper:'Enter correct email'}));
    }

    if (emailTest === true && passwordTest === true) {
      signIn(signinObj)
          .then((resp) => { console.log(resp); localStorage.setItem('token', resp.data.success['token']) })
          .catch((error) => { console.log(error) })
    }
  }


  return (
    <div className="section">
      <div className="signin">
        <div className='google1'>
            <span style={{ color: "blue" }}>G</span>
            <span style={{ color: "red" }}>o</span>
            <span style={{ color: "yellow" }}>o</span>
            <span style={{ color: "blue" }}>g</span>
            <span style={{ color: "green" }}>l</span>
            <span style={{ color: "red" }}>e</span>
        </div>

        <div className='toptextsignin'>
          <div className="col0">
            <div><span className="sign">Sign in</span></div>
            <div><span className='use'>Use Your Google Account</span></div>
          </div>
        </div>

        <div className='emailorphone'>
          <div className="col1">
              <TextField onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} className='emailorphoneinput' id="outlined-basic" label="email or phone" variant="outlined" />
              <div className="forgotemail">
                <Link href="#" underline="none">
                  {'Forgot email?'}
                </Link>
              </div>
          </div>       
        </div>

        <div className='password2'>
          <div className="col2">
              <TextField onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} className="passinput" id="outlined-basic" label="password" variant="outlined" />
              <div className="forgotpass">
                <Link href="#" underline="none">
                  {'Forgot password?'}
                </Link>
              </div>
          </div>
        </div>

        <div className='textsignin'>
          <div className="clo3">
            <div className='text3'>Not your computer? Use Guest mode to sign in privately.</div>
            <div className="learn">
              <Link href="#" underline="none">
                {'Learn more'}
              </Link>
            </div>
          </div>
        </div>

        <div className='bottomsignin'>
          <div className="row1">
            <div className="createacc">
              <Link href="#" underline="none">
                {'Create account'}
              </Link>
            </div>
            <div className="next2">
              <Button onClick={submit} variant="contained">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
