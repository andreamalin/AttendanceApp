import React from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import logo from '../../images/logo.png'
import Button from '../Button'
import './Login.css'

const Login = () => {
  const history = useHistory()

  const login = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(googleAuthProvider).then((response) => {
      const actualUsername = response.user.displayName
      localStorage.setItem('actualUsername', actualUsername)

      history.push('/home')
    })
  }

  return (
    <div className="login">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMin slice">
        <defs>
          <linearGradient id="grad1">
            <stop offset="5%" stopColor="#cdc1ff" />
            <stop offset="95%" stopColor="#7371fc" />
          </linearGradient>
        </defs>

        <path fill="url(#grad1)" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,181.3C480,171,600,117,720,128C840,139,960,213,1080,208C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>

      <img src={logo} alt="logo" />
      <Button option="Continue with Gmail" onClick={login} />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMin slice">
        <path fill="url(#grad1)" fillOpacity="1" d="M0,0L30,42.7C60,85,120,171,180,186.7C240,203,300,149,360,133.3C420,117,480,139,540,133.3C600,128,660,96,720,117.3C780,139,840,213,900,245.3C960,277,1020,267,1080,266.7C1140,267,1200,277,1260,245.3C1320,213,1380,139,1410,101.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z" />
      </svg>
    </div>
  )
}

export default Login
