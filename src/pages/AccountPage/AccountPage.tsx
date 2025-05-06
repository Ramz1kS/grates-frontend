import React, { useState } from 'react'
import classes from './AccountPage.module.css'
import { AccountAvatar } from '../../components/AccountAvatar/AccountAvatar'
import BackgroundTest from '../../assets/test/account_page_background_test.png'
import { SectionSwitcher } from '../../components/SectionSwitcher/SectionSwitcher'
import { AccountBasicInfo } from '../../components/AccountBasicInfo/AccountBasicInfo'
import { PostsList } from '../../components/PostsList/PostsList'
import { PhotosList } from '../../components/PhotosList/PhotosList'
import { FriendsList } from '../../components/FriendsList/FriendsList'
import { FriendButtonType } from '../../types'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AccountPage = () => {
  const pages = [{
    name: "Posts",
    urlname: "account/posts",
    count: 42
  }, {
    name: "Friends",
    urlname: "account/friends",
    count: 12
  }, {
    name: "Photos",
    urlname: "account/photos",
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
        <SectionSwitcher currPage={currSection} pages={pages} setCurrPage={setCurrSection}></SectionSwitcher>
        <Routes>
          <Route path='posts' element={<PostsList nickname={'idspikes1'}></PostsList>}></Route>
          <Route path='photos' element={<PhotosList></PhotosList>}></Route>
          <Route path='friends' element={<FriendsList type={FriendButtonType.display}></FriendsList>}></Route>
          <Route path='*' element={<Navigate to="/notfound"></Navigate>}></Route>
        </Routes>
      </div>
    </div>
  )
}
