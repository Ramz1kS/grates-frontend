import React from 'react'
import classes from './AccountAvatar.module.css'
import AvatarTest from './../../assets/test/account_page_avatar_test.png'

export const AccountAvatar = () => {
  return (
    <div className={classes.avatarCollision}>
      <div className={classes.avatarBorder}>
        <img src={AvatarTest} className={classes.avatarImage}></img>
      </div>
    </div>
  )
}
