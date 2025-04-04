import React, { FC, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import classes from './LoginSwitcher.module.css'
import LoginSwitcherButton from './LoginSwitcherButton'

interface LoginSwitcherProps {
  currWindow: "login" | "register";
  setVal: (val: "login" | "register" | ((val: "login" | "register") => "login" | "register")) => void;
}

const LoginSwitcher: FC<LoginSwitcherProps> = ({currWindow, setVal}) => {
  return (
    <div className={classes.windowSwitcher}>
      <LoginSwitcherButton
      currVal={currWindow}
      val='register'
      setVal={setVal}
      displayName='Sign Up'></LoginSwitcherButton>
      <LoginSwitcherButton
      currVal={currWindow}
      val='login'
      setVal={setVal}
      displayName='Sign In'></LoginSwitcherButton>
    </div>
  )
}

export default LoginSwitcher
