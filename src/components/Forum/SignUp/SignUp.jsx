import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.scss";

function SignUp() {
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
              to={"/forum/signin"}
              className={"forum-tdn"}
            >
              Sign in
            </Link>
          </div>
          <form className='signup__form'>
            <input type="text" className='form-control signup__name' placeholder='First name' required/>
            <input type="text" className='form-control signup__lastName' placeholder='Last name' required/>
            <input type="text" className='form-control signup__phone' placeholder='Phone' required/>
            <input type="email" className='form-control signup__email' placeholder='Email' required/>
            <input type="password" className='form-control signup__password' placeholder='Password' required/>
            <button className='signup__btn' type='submit'>
              Next Step
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
