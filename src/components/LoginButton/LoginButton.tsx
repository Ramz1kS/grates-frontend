import React from 'react'
import { motion } from 'motion/react'
import classes from './LoginButton.module.css'

const LoginButton = () => {
  return (
    <motion.button 
    whileHover={{scale: 1.075}}
    whileTap={{scale: 0.95}}
    className={classes.loginButton}>Log In</motion.button>
  )
}

export default LoginButton
