import React, { FC } from 'react'
import classes from './MessageClickable.module.css'
import { motion } from 'motion/react'

interface MessageClickableProps {
    username: string,
    name: string,
    pfpLink: string,
    isNew: boolean,
    lastMsg: string
}

// TODO: добавить "урезание" сообщения под то, чтобы видимая часть подстраивалась под размер кнопки
// TODO: добавить кол-во новых сообщений, отдельный фон для новых сообщений
export const MessageClickable: FC<MessageClickableProps> = ({
  username, name, pfpLink, isNew, lastMsg
}) => {
  return (
    <motion.div
    whileHover={{y: -5,
      boxShadow: "0px 5px 6px #9900ff6b"
    }}
    initial={{
      boxShadow: "0px 2px 4px #9900ff6b"
    }}
    transition={{
      duration: 0.15
    }}
    className={classes.message}>
      <img className={classes.avatar} src={pfpLink}></img>
      <div className={classes.userInfoAndMessage}>
        <div className={classes.userInfo}>
          <p className={classes.nickname}>{username}</p>
          <p className={classes.realname}>{name}</p>
        </div>
        <p className={classes.messageText}>{lastMsg}</p>
      </div>
    </motion.div>
  )
}
