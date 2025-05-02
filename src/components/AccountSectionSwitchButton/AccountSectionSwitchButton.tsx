import React, { FC } from 'react'
import { motion } from 'motion/react'
import classes from './AccountSectionSwitchButton.module.css'

interface AccountSectionSwitchButtonProps {
  name: string,
  count?: number,
  isCurr: boolean,
  setCurr: (val: string | ((prevVal: string) => string)) => void
}

export const AccountSectionSwitchButton: FC<AccountSectionSwitchButtonProps> = ({name, count, isCurr, setCurr}) => {
  const handleClick = () => {
    setCurr(name)
    console.log("Curr page should be ", name, "now")
  }
  return (
    <motion.button
    animate={{
      scale: isCurr ? 1.2 : 1,
    }}
    className={classes.buttonSectionSwitcher}
    onClick={handleClick}>
      <motion.div
      initial={{
        opacity: 0
      }} 
      animate={{
        opacity: isCurr ? 1 : 0
      }}
      className={classes.buttonBackground}></motion.div>
      <motion.p
      animate={{
        color: isCurr ? "#FFFFFF" : "#7A7A7A"
      }} 
      className={classes.sectionName}>{name}</motion.p>
      { count == undefined ? <></> : 
      <motion.p 
        animate={{
          color: isCurr ? "#FFFFFF" : "#B7B7B7"
        }}
        className={classes.sectionCount}>({count})</motion.p>}
    </motion.button>
  )
}
