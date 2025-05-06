import React, { FC } from 'react'
import classes from './FriendButtonBase.module.css'

interface FriendButtonBaseProps {
  image: string
}

export const FriendButtonBase: FC<FriendButtonBaseProps> = ({image}) => {
  return (
    <button className={classes.friendButton}>
      <img className={classes.friendButtonImage} src={image}></img>
    </button>
  )
}
