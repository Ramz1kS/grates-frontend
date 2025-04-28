import React, { FC, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import classes from './LoginButton.module.css'

interface LoginButtonProps {
  text: string
}

const LoginButton: FC<LoginButtonProps> = ({text}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <motion.button 
    ref={buttonRef}
    type='submit'
    whileHover={{scale: 1.075}}
    whileTap={{scale: 0.95}}
    className={classes.loginButton}>{text}</motion.button>
  )
}

export default LoginButton
