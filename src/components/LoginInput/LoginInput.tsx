import React, { FC, useState } from 'react'
import classes from './LoginInput.module.css'

interface LoginInputProps {
  name: string
}

const LoginInput: FC<LoginInputProps> = ({name}) => {
  const [input, setInput] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  return (
    <input 
    value={input}
    placeholder={name}
    onChange={handleChange}
    className={classes.loginInput}></input>
  )
}

export default LoginInput
