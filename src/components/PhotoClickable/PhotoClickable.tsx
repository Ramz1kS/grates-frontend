import React, { FC } from 'react'
import classes from './PhotoClickable.module.css'
import { motion } from 'motion/react';

interface PhotoClickableProps {
  linkDisplay: string,
  linkHighRes: string;
}

export const PhotoClickable: FC<PhotoClickableProps> = ({linkDisplay, linkHighRes}) => {
  return (
    <motion.img 
    whileHover={{y: -10,
      boxShadow: "0px 10px 6px #9900ff6b"
    }}
    initial={{
      boxShadow: "none"
    }}
    transition={{
      duration: 0.15
    }}
    className={classes.photoClickMe} 
    src={linkDisplay}></motion.img>
  )
}
