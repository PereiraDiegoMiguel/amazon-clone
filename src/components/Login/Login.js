import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import { auth } from '../../firebase/firebase';
import firebase from 'firebase';


function Login() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (event) => {
    //event.preventDefaut();
    await auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/")
      }).catch((e) => alert(e.message));
  };

  const register = (event) => {
    //event.preventDefaut();
    auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/")
      }).catch((e) => alert(e.message));
  };


  return (
    <div className="login">

      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="" />
      </Link>

      <div className="login__container">
        <h1>Sing in</h1>
        <form >

          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={loginUser}
          >
            Sing in
            </button>

        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <p>New to Amazon?</p>
        <button
          className="login__registerInButton"
          onClick={register}
        >
          Create your Amazon account
        </button>

      </div>
    </div>
  );
}

export default Login;