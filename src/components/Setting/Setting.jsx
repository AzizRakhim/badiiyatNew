import React from 'react';
import "./Setting.scss";
import Header from '../Header/Header'
import { Link } from 'react-router-dom';

function Setting(props) {
  let nameHandler = (e) => {
    props.setName(e.target.value);
  }

  let lastNameHandler = (e) => {
    props.setLastName(e.target.value);
  } 

  let phoneHandler = (e) => {
    props.setPhone(e.target.value);
  }

  let emailHandler = (e) => {
    props.setEmail(e.target.value);
  }

  return (
    <>
      <div className='setting'>
        <div className="container">
          <div className='d-flex'>
            <div className='setting__left col-3'>
              <div className='setting__img-box position-relative'>
                <img src="https://imgur.com/hhHSeSA.png" alt="user" />
                <div className='setting__camera-box'>
                  <i class='bx bx-camera'></i>
                </div>
              </div>
            </div>
            <div className='setting__right col-9'>
              <h2 className='setting__title'>
                My profile
              </h2>
              <form className='setting__form'>
                <div className='setting__input-box'>    
                  <span className='setting__label'>
                    First Name
                  </span>
                  <input type="text" name='name' className='form-control setting-input' required value={props.name} onChange={nameHandler} />
                  <p className='setting__instruction'>
                    Please enter your first name.
                  </p>
                </div>
                <div className='setting__input-box'>    
                  <span className='setting__label'>
                    Last Name
                  </span>
                  <input type="text" name='lastName' className='form-control setting-input' required value={props.lastName} onChange={lastNameHandler} />
                  <p className='setting__instruction'>
                    Please enter your last name.
                  </p>
                </div>
                <div className='setting__wrapper d-flex'>
                  <div className='setting__input-box left-move col-6'>   
                    <div className='setting__border'>
                      <span className='setting__label'>
                        Phone
                      </span>
                      <input type="text" name='phone' className='form-control setting-input' required value={props.phone} onChange={phoneHandler} />
                      <p className='setting__instruction'>
                        Please enter your  phone number.
                      </p>
                    </div> 
                  </div>
                  <div className='setting__input-box col-6'>    
                    <span className='setting__label'>
                      Email
                    </span>
                    <input type="email" name='email' className='form-control setting-input' required value={props.email} onChange={emailHandler} />
                    <p className='setting__instruction'>
                      Please enter your email address.
                    </p>
                  </div>
                </div>
                <div className='d-flex justify-content-end'>
                  <Link
                    to={"/profile"}
                  >
                    <button className='setting__btn'>
                      Save Changes
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Setting
