import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import classes from './AccountPage.module.css'
import { AccountAvatar } from '../AccountAvatar/AccountAvatar'
import BackgroundTest from '../../assets/test/account_page_background_test.png'
import { AccountSectionSwitcher } from '../AccountSectionSwitcher/AccountSectionSwitcher'
import { AccountBasicInfo } from '../AccountBasicInfo/AccountBasicInfo'
import { PostsList } from '../PostsList/PostsList'
import { PhotosList } from '../PhotosList/PhotosList'
import { FriendsList } from '../FriendsList/FriendsList'

export const AccountPage = () => {
  const pages = [{
    name: "Posts",
    count: 42
  }, {
    name: "Friends",
    count: 12
  }, {
    name: "Photos",
    count: 4
  }]
  const [currSection, setCurrSection] = useState<string>(pages[0].name)
  const manageSection = () => {
    switch (currSection) {
      case "Posts":
        return <PostsList nickname={'idspikes1'}></PostsList>
      case "Photos":
        return <PhotosList></PhotosList>
      case "Friends":
        return <FriendsList></FriendsList>
    }
  }
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
        <AccountSectionSwitcher currPage={currSection} pages={pages} setCurrPage={setCurrSection}></AccountSectionSwitcher>
        { manageSection() }
      </div>
    </div>
  )
}
