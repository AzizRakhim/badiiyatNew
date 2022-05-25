import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.scss";

function SignUp(props) {
  let name = "";
  let lastName = "";
  let phone = "";
  let email = "";

  let [nameStyle, setNameStyle] = useState();
  let [lastNameStyle, setLastNameStyle] = useState();
  let [phoneStyle, setPhoneStyle] = useState();
  let [emailStyle, setEmailStyle] = useState();
  let [temp, setTemp] = useState(true);

  let nameHandler = (e) => {
    name = e.target.value;
    props.setName(name);
    
    if(name === "" || name.match(/[0-9]/) || name.match(/[!@#&%*$^]/) || name.includes("  ") || name.length < 2){
      setNameStyle(true);

    }else{
      setNameStyle(false);
    }
  }
  
  let lastNameHandler = (e) => {
    lastName = e.target.value;
    props.setLastName(lastName);

    if(lastName === "" || lastName.match(/[0-9]/) || lastName.match(/[!@#&%*$^]/) || lastName.includes("  ") || lastName.length < 2){
      setLastNameStyle(true);
    }else{
      setLastNameStyle(false); 
    }
  }
  
  let phoneHandler = (e) => {
    phone = e.target.value;
    props.setPhone(phone);

    if(phone.length === "" || phone.length < 9 || Number.isInteger(phone)){
      setPhoneStyle(true);
    }else{
      setPhoneStyle(false); 
    }
  }
  
  let emailHandler = (e) => {
    email = e.target.value;
    props.setEmail(email);

    if(email.match(/[a-z]/) == null || email.match(/[0-9]/) == null || email.match(/[!@#$%^&*]/) == null || email.length <= 8){
      setEmailStyle(true)
    }else{
      setEmailStyle(false) 
    }

    if(nameStyle == true && lastNameStyle == true && phoneStyle == true && emailStyle == true){
      setTemp(true);
    } else{
      setTemp(false);
    }
  }

  return (
    <div className='signup d-flex'>
      <div className='signup__left col-6'>
        <div className='signup__img-wrapper'>
          <img src="https://imgur.com/mCnkXy2.png" alt="singup" />
        </div>
      </div>
      <div className='signup__right col-6'>
        <div className='signup__wrapper'>
          <h2 className='signup__title'>
            Sign up
          </h2>
          <div className='signup__link-box'>
            Already have an account? 
            <Link
              to={"/signin"}
              className={"forum-tdn"}
            >
              Sign in
            </Link>
          </div>
          <form className='signup__form'>
            <input type="text" className='form-control signup__name' placeholder='First name' onChange={nameHandler} required style={{border : nameStyle ? "2px solid red" : "1px solid #ced4da"}} />
            <input type="text" className='form-control signup__lastName' placeholder='Last name' required onChange={lastNameHandler} style={{border : lastNameStyle ? "2px solid red" : "1px solid #ced4da"}} />
            <input type="text" className='form-control signup__phone' placeholder='Phone' required onChange={phoneHandler} style={{border : phoneStyle ? "2px solid red" : "1px solid #ced4da"}} />
            <input type="email" className='form-control signup__email' placeholder='Email' required onChange={emailHandler} style={{border : emailStyle ? "2px solid red" : "1px solid #ced4da"}} />
            <input type="password" className='form-control signup__password' placeholder='Password' required/> 
            <Link 
              to={'/profile'}
            >
              <button className='signup__btn' disabled={false}>
                  Next Step
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
