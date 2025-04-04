import React from 'react'
import classes from './LoginWindow.module.css'
import LoginInput from '../LoginInput/LoginInput'
import LoginSwitcher from '../LoginSwitcher/LoginSwitcher'

const LoginWindow = () => {
  return (
    <div className={classes.loginWindow}>
      <LoginSwitcher></LoginSwitcher>
      <div className={classes.loginInputContainer}>
        <LoginInput name='email'></LoginInput>
        <LoginInput name='password'></LoginInput>
        <button className={classes.restorePassword}>forgot your password?</button>
      </div>
      <button className={classes.loginButton}>Log In</button>
    </div>
  )
}

export default LoginWindow
