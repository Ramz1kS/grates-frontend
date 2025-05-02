import React, { FC } from 'react'
import classes from './AccountBasicInfo.module.css'

interface AccountBasicInfoProps {
  nickname?: string,
  realname?: string,
  details?: string
}

export const AccountBasicInfo: FC<AccountBasicInfoProps> = (
    {nickname = "loading..",
    realname = "loading...", 
    details = "uuuhhhh..."}) => {
  return (
    <section className={classes.info}>
      <p className={classes.nickname}>{nickname}</p>
      <p className={classes.realName}>{realname}</p>
      <p className={classes.details}>{details}</p>
    </section>
  )
}
