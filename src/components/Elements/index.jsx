import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const onSave = () => {
    console.log(loginRef.current.value, pwRef.current.value);
    if (
      loginRef.current.value === 'webbrain' &&
      pwRef.current.value === '1234'
    ) {
      localStorage.setItem('token', true);
      navigate('/pages');
    } else {
      localStorage.setItem('token', false);
      alert('login yoki pw hato');
    }
  };
  const loginRef = useRef();
  const pwRef = useRef();

  return (
    <div>
      <h1>React Router dom Elements</h1>
      <input ref={loginRef} type='text' />
      <input ref={pwRef} type='text' />
      <button onClick={onSave}>submit</button>
    </div>
  );
};

export default Home;
