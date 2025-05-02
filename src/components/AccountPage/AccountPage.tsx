import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import classes from './AccountPage.module.css'
import { AccountAvatar } from '../AccountAvatar/AccountAvatar'
import BackgroundTest from '../../assets/test/account_page_background_test.png'
import { AccountSectionSwitcher } from '../AccountSectionSwitcher/AccountSectionSwitcher'
import { AccountBasicInfo } from '../AccountBasicInfo/AccountBasicInfo'
import { PostsList } from '../PostsList/PostsList'

export const AccountPage = () => {
  return (
    <div className={classes.accountMainContainer}>
      <div className={classes.accountHeader}>
        <section className={classes.mainInfo}>
          <img className={classes.banner} src={BackgroundTest}></img>
          <section className={classes.avatarAndInfo}>
            <AccountAvatar></AccountAvatar>
            <AccountBasicInfo nickname={"idspikes1"} realname='Ramazan Apsuvaev' 
            details={"Ain't got no problem with bougie, but I can't cuff her, that hoe is too choosy, nah-nah"}></AccountBasicInfo>
          </section>
        </section>
        <AccountSectionSwitcher></AccountSectionSwitcher>
        <PostsList nickname={'idspikes1'}></PostsList>
      </div>
    </div>
  )
}
