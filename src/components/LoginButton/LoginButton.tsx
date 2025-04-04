import React, { FC } from 'react'
import { motion } from 'motion/react'
import classes from './LoginButton.module.css'

interface LoginButtonProps {
  text: string
}

const LoginButton: FC<LoginButtonProps> = ({text}) => {
  return (
    <motion.button 
    whileHover={{scale: 1.075}}
    whileTap={{scale: 0.95}}
    className={classes.loginButton}>{text}</motion.button>
  )
}

export default LoginButton
