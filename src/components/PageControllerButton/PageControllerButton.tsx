import React, { FC } from 'react'
import classes from './PageControllerButton.module.css'
import { AnimatePresence, motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { PageControllerButtonInfo } from '../../types'

interface PageControllerButtonProps {
  pageInfo: PageControllerButtonInfo,
  isSelected: boolean,
  setSelectedPage: (val: string | ((prevVal: string) => string)) => void
}

export const PageControllerButton: FC<PageControllerButtonProps> = ({pageInfo, isSelected, setSelectedPage}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setSelectedPage(pageInfo.name)
    navigate(`/active/${pageInfo.urlname}`)
  }
  return (
    <motion.button
    whileHover={{scale: 1.05}} 
    whileTap={{scale: 0.99}}
    className={classes.pageButton}
    onClick={handleClick}>
      <p className={classes.pageName}>{pageInfo.name}</p>
      <AnimatePresence>
      { isSelected ? <motion.div exit={{opacity: 0}} className={classes.pressedBackground}></motion.div> : null}
      </AnimatePresence>
    </motion.button>
  )
}
