import { motion } from 'motion/react'
import classes from './LoginSwitcherButton.module.css'
import React, { FC } from 'react'

interface LoginSwitcherButtonProps {
  displayName: string,
  val: "login" | "register",
  currVal: "login" | "register";
  setVal: (val: "login" | "register" | ((val: "login" | "register") => "login" | "register")) => void
}

const LoginSwitcherButton: FC<LoginSwitcherButtonProps> = ({displayName, val, currVal, setVal}) => {
  return (
    <motion.p 
      initial={{
        fontSize: "20px"
      }}
      animate={{
        fontSize: currVal == val ? "30px" : "20px"
      }}
      className={classes.switcher}
      onClick={() => setVal(val)}>{displayName}</motion.p>
  )
}

export default LoginSwitcherButton
