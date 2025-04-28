import { motion } from 'motion/react'
import classes from './PageControllerExit.module.css'
import React from 'react'

export const PageControllerExit = () => {
  const handleClick = () => {}
  return (
    <motion.button
    whileHover={{scale: 1.05}} 
    whileTap={{scale: 0.99}}
    className={classes.pageButton}
    onClick={handleClick}>
      <p className={classes.exitName}>Exit</p>
    </motion.button>
  )
}
