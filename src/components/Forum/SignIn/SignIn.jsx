import React from 'react';
import { Link } from 'react-router-dom';
import "../SignUp/SignUp.scss";

function SignIn() {
  return (
    <div className='signup d-flex'>
      <div className='signup__left col-6'>
        <div className='signup__img-wrapper'>
          <img src="https://imgur.com/FCJ0l70.png" alt="singup" />
        </div>
      </div>
      <div className='signup__right col-6'>
        <div className='signup__wrapper'>
          <h2 className='signup__title'>
            Sign in
          </h2>
          <div className='signup__link-box'>
            Already have an account? 
            <Link
              to={"/forum/signup"}
              className={"forum-tdn"}
            >
              Sign up
            </Link>
          </div>
          <form className='signup__form'>
            <input type="email" className='form-control signin__email' placeholder='Email' required/>
            <input type="password" className='form-control signin__password' placeholder='Password' required/>
            <button className='signup__btn' type='submit'>
              Next Step
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
