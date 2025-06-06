import React, { FC } from 'react'
import classes from './FriendClickable.module.css'
import TestImage from '../../assets/test/friend_avatar.png'
import { motion } from 'motion/react'

interface FriendClickableProps {
  username?: string,
  realname?: string,
}

export const FriendClickable: FC<FriendClickableProps> = ({username = "Loading...", realname = "uhh... idk"}) => {
  return (
    <motion.div className={classes.friendContainer}
    whileHover={{y: -10,
      boxShadow: "0px 10px 6px #9900ff6b"
    }}
    initial={{
      boxShadow: "0px 2px 4px #9900ff6b"
    }}
    transition={{
      duration: 0.15
    }}>
      <img className={classes.friendAvatar} src={TestImage}></img>
      <div className={classes.friendInfo}>
        <p className={classes.friendUsername}>{username}</p>
        <p className={classes.friendRealName}>{realname}</p>
      </div>
    </motion.div>
  )
}
