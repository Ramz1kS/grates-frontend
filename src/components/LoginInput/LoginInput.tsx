import React, { FC, useState } from 'react'
import { motion } from 'motion/react'
import classes from './LoginInput.module.css'

interface LoginInputProps {
  name: string,
  isNeeded?: boolean
}

const LoginInput: FC<LoginInputProps> = ({name, isNeeded = true}) => {
  const [input, setInput] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  return (
    <motion.input 
    animate={isNeeded ? {
    } : {
      height: 0,
      padding: 0,
      scale: 0,
      border: 0,
      margin: 0
    }}
    value={input}
    placeholder={name}
    onChange={handleChange}
    className={classes.loginInput}></motion.input>
  )
}

export default LoginInput
