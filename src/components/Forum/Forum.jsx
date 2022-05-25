import React from 'react';
import "./Forum.scss";
import SignUp from './SignUp/SignUp';

function Forum(props) {
  return (
    <SignUp 
      name={props.name}
      setName={props.setName}
      lastName={props.lastName}
      setLastName={props.setLastName}
      phone={props.phone}
      setPhone={props.setPhone}
      email={props.email}
      setEmail={props.setEmail}
    />
  )
}

export default Forum
