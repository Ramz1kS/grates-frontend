import React, { useState } from 'react'
import classes from './LoginWindow.module.css'
import LoginInput from '../LoginInput/LoginInput'
import LoginSwitcher from '../LoginSwitcher/LoginSwitcher'
import LoginButton from '../LoginButton/LoginButton'
import { motion } from 'motion/react'
import LoginInputList from '../LoginInputList/LoginInputList'

const LoginWindow = () => {
  const [currWindow, setCurrWindow] = useState<"login" | "register">("register")
  const [errText, setErrText] = useState<string>("")
  const handleEnter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Hi!")
  }
  return (
    <motion.div layout className={classes.loginWindow}>
      <LoginSwitcher currWindow={currWindow} setVal={setCurrWindow}></LoginSwitcher>
      <h3 className={classes.errorMessage}>{errText}</h3>
      <form className={classes.form} onSubmit={handleEnter}>
        <LoginInputList currWindow={currWindow}></LoginInputList>
        <LoginButton text={currWindow == 'login' ? "Log In" : "Register"}></LoginButton>
      </form>
    </motion.div>
  )
}

export default LoginWindow
