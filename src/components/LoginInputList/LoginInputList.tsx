import React, { FC } from 'react'
import classes from './LoginInputList.module.css'
import LoginInput from '../LoginInput/LoginInput'
import LoginRestorePasswordButton from '../LoginRestorePasswordButton/LoginRestorePasswordButton'

interface LoginInputListProps {
  currWindow: "login" | "register"
}

const LoginInputList: FC<LoginInputListProps> = ({currWindow}) => {
  return (
    <div className={classes.loginInputContainer}>
      <LoginInput isNeeded={currWindow == 'register'} name='first name'></LoginInput>
      <LoginInput isNeeded={currWindow == 'register'} name='second name'></LoginInput>
      <LoginInput isNeeded={true} name='email'></LoginInput>
      <LoginInput isNeeded={true} name='password'></LoginInput>
      <LoginRestorePasswordButton isNeeded={currWindow == 'login'}></LoginRestorePasswordButton>
    </div>
  )
}

export default LoginInputList
