import React, { useState } from 'react'
import classes from './LoginWindow.module.css'
import LoginInput from '../LoginInput/LoginInput'
import LoginSwitcher from '../LoginSwitcher/LoginSwitcher'
import LoginButton from '../LoginButton/LoginButton'
import { motion } from 'motion/react'
import LoginInputList from '../LoginInputList/LoginInputList'

const LoginWindow = () => {
  const [currWindow, setCurrWindow] = useState<"login" | "register">("login")
  return (
    <motion.div layout className={classes.loginWindow}>
      <LoginSwitcher currWindow={currWindow} setVal={setCurrWindow}></LoginSwitcher>
      <LoginInputList currWindow={currWindow}></LoginInputList>
      <LoginButton text={currWindow == 'login' ? "Log In" : "Register"}></LoginButton>
    </motion.div>
  )
}

export default LoginWindow
