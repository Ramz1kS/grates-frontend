import React, { FC } from 'react'
import classes from './PageControllerButton.module.css'
import { AnimatePresence, motion } from 'motion/react'

interface PageControllerButtonProps {
  name: string,
  isSelected: boolean,
  setSelectedPage: (val: string | ((prevVal: string) => string)) => void
}

export const PageControllerButton: FC<PageControllerButtonProps> = ({name, isSelected, setSelectedPage}) => {
  const handleClick = () => {
    setSelectedPage(name)
  }
  return (
    <motion.button
    whileHover={{scale: 1.05}} 
    whileTap={{scale: 0.99}}
    className={classes.pageButton}
    onClick={handleClick}>
      <p className={classes.pageName}>{name}</p>
      <AnimatePresence>
      { isSelected ? <motion.div exit={{opacity: 0}} className={classes.pressedBackground}></motion.div> : null}
      </AnimatePresence>
    </motion.button>
  )
}
