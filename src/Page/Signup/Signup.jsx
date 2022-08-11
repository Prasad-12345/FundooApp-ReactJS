import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import './Signup.css';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import img1 from './image/account.png' ;
import { signUp } from '../../Services/UserService';
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;
function Signup() {
    const[regexObj, setRegexObj] = useState({fNameBorder:false, fNameHelper:'',
                                           lNameBorder:false, lNameHelper:'',
                                           usernameBorder:false, usernameHelper:'',
                                           passwordBorder:false, passwordHelper:'',
                                           confirmPasswordBorder:false, confirmPasswordHelper:'',});

    const[signupObj, setSignupObj] = useState({name:'', email:'', password:''});

    const takeFName = (event) => {
        setSignupObj((prevState) => ({...prevState, name:event.target.value})); 
    }

    // const takeLName = (event) => {
    //     setSignupObj((prevState) => ({...prevState, lname:event.target.value}));
    // }

    const takeUName = (event) => {
        setSignupObj((prevState) => ({...prevState, email:event.target.value}));
    }

    const takePassword = (event) => {
        setSignupObj((prevState) => ({...prevState, password:event.target.value}));
    }

    // const takeConfirmPassword = (event) => {
    //     setSignupObj((prevState) => ({...prevState, confirmPassword:event.target.value}));
    // }

    const submit = () => {
        let fnameTest = firstNameRegex.test(signupObj.name);
        //let lnameTest = lastNameRegex.test(signupObj.lname);
        let usernameTest = emailRegex.test(signupObj.email);
        let passwordTest = passwordRegex.test(signupObj.password);
        //let confirmPasswordTest = passwordRegex.test(signupObj.confirmPassword);

        // console.log(fnameTest + lnameTest + usernameTest + passwordTest);
        if(fnameTest === true){
            setRegexObj((prevState) => ({...prevState, fNameBorder:false, fNameHelper:''}));
        }
        else if(fnameTest === false){
            setRegexObj((prevState) => ({...prevState, fNameBorder:true, fNameHelper:'Enter correct fname'}));
        }

        // if(lnameTest === true){
        //     setRegexObj((prevState) => ({...prevState, lNameBorder:false, lNameHelper:''}));
        // }
        // else if(lnameTest === false){
        //     setRegexObj((prevState) => ({...prevState, lNameBorder:true, lNameHelper:'Enter correct lname'}));
        // }

        if(usernameTest === true){
            setRegexObj((prevState) => ({...prevState, usernameBorder:false, usernameHelper:''}));
        }
        else if(usernameTest === false){
            setRegexObj((prevState) => ({...prevState, usernameBorder:true, usernameHelper:'Enter correct username'}));
        }

        if(passwordTest === true){
            setRegexObj((prevState) => ({...prevState, passwordBorder:false, passwordHelper:''}));
        }
        else if(passwordTest === false){
            setRegexObj((prevState) => ({...prevState, passwordBorder:true, passwordHelper:'Enter correct password'}));
        }

        // if(confirmPasswordTest === true){
        //     setRegexObj((prevState) => ({...prevState, confirmPasswordBorder:false, confirmPasswordHelper:''}));
        // }
        // else if(confirmPasswordTest === false){
        //     setRegexObj((prevState) => ({...prevState, confirmPasswordBorder:true, confirmPasswordHelper:'Enter correct password'}));
        // }

        if (fnameTest === true  && usernameTest === true && passwordTest === true) {
            signUp(signupObj)
                .then((resp) => { console.log(resp) })
                .catch((error) => { console.log(error) })
        }
    }

    
    return (
        <div className="signup">
            <div className="leftsection">
                <div className='google'>
                    <span style={{ color: "blue" }}>G</span>
                    <span style={{ color: "red" }}>o</span>
                    <span style={{ color: "yellow" }}>o</span>
                    <span style={{ color: "blue" }}>g</span>
                    <span style={{ color: "green" }}>l</span>
                    <span style={{ color: "red" }}>e</span>
                </div>

                <div className='create'>
                    Create Your Google Account
                </div>

                <div className="name">
                    <div className="namerow">
                        <TextField onChange={takeFName} error={regexObj.fNameBorder} helperText={regexObj.fNameHelper} className="passfield" size="small" id="outlined-basic" label="First name" variant="outlined" />
                        <TextField  error={regexObj.lNameBorder} helperText={regexObj.lNameHelper} className="confirmpassfield" size="small" id="outlined-basic" label="Last name" variant="outlined" />
                    </div>
                </div>

                <div className='username'>
                    <div className="user">
                        <TextField onChange={takeUName} error={regexObj.usernameBorder} helperText={regexObj.usernameHelper} className="emailfield" size="small" id="outlined-basic" label="Email" variant="outlined" />
                        <div className='emailtext'>You'll need to conform that email address belongs to you</div>
                    </div>
                </div>

                <div className='maillink'>
                    <Link href="#" underline="none">
                        {'Use my current gmail address instead'}
                    </Link>
                </div>

                <div className='pass'>
                    <div className="password">
                        <TextField onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} className="passfield" size="small" id="outlined-basic" label="Password" variant="outlined" />
                        <TextField  error={regexObj.confirmPasswordBorder} helperText={regexObj.confirmPasswordHelper} className="confirmpassfield" size="small" id="outlined-basic" label="Confirm Password" variant="outlined" />    
                    </div>
                    <div className="passtext">
                        Use 8 or more characters with a mix of letters, numbers & symbols
                    </div>
                    <div className="checkbox">
                        <FormControlLabel control={<Checkbox  />} label="show password" />
                    </div>
                </div>

                <div className='bottom'>
                    <div className="signinlink">
                        <Link href="#" underline="none">
                            {'sign in instead'}
                        </Link>
                    </div>
                    <div className='next'>
                        <Button onClick={submit} variant="contained">Next</Button>
                    </div>
                </div>
            </div>

            <div className="rightsection">
                <div className="image">
                    <img src={img1} alt="" width={"95%"} />
                </div>

                <div className="righttext">
                    One account. All of Google working for you.
                </div>
            </div>
        </div>
        
    )
    }

export default Signup
