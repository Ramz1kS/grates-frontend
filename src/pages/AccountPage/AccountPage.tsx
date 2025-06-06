import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import classes from './AccountPage.module.css'
import { AccountAvatar } from '../../components/AccountAvatar/AccountAvatar'
import BackgroundTest from '../../assets/test/account_page_background_test.png'
import { AccountSectionSwitcher } from '../../components/AccountSectionSwitcher/AccountSectionSwitcher'
import { AccountBasicInfo } from '../../components/AccountBasicInfo/AccountBasicInfo'
import { PostsList } from '../../components/PostsList/PostsList'
import { PhotosList } from '../../components/PhotosList/PhotosList'
import { FriendsList } from '../../components/FriendsList/FriendsList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AccountPage = () => {
  const pages = [{
    name: "Posts",
    urlname: "posts",
    count: 42
  }, {
    name: "Friends",
    urlname: "friends",
    count: 12
  }, {
    name: "Photos",
    urlname: "photos",
    count: 4
  }]
  const [currSection, setCurrSection] = useState<string>(() => {
    const curr_path: string = window.location.pathname
    for (let i = 0; i < pages.length; i++) {
      if (curr_path.includes(`/${pages[i].urlname}`)) {
        return pages[i].name;
      }
    }
    return ""
  })
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
        <Routes>
          <Route path='posts' element={<PostsList nickname={'idspikes1'}></PostsList>}></Route>
          <Route path='photos' element={<PhotosList></PhotosList>}></Route>
          <Route path='friends' element={<FriendsList></FriendsList>}></Route>
        </Routes>
      </div>
    </div>
  )
}
