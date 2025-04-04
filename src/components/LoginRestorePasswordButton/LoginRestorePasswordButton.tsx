import React, { FC } from 'react'
import { motion } from 'motion/react'
import classes from './LoginRestorePasswordButton.module.css'

interface LoginRestorePasswordButtonProps {
  isNeeded: boolean
}

const LoginRestorePasswordButton: FC<LoginRestorePasswordButtonProps> = ({isNeeded}) => {
  return (
    <motion.button 
    animate={isNeeded ? {
    } : {
      height: 0,
      padding: 0,
      scale: 0,
      border: 0,
      margin: 0
    }}
    className={classes.restorePassword}>forgot your password?</motion.button>
  )
}

export default LoginRestorePasswordButton
