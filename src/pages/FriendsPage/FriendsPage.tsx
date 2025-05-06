import React, { useEffect, useState } from 'react'
import classes from './FriendsPage.module.css'
import { FriendButtonType, SectionButtonInfo } from '../../types'
import { SectionSwitcher } from '../../components/SectionSwitcher/SectionSwitcher'
import { FriendsList } from '../../components/FriendsList/FriendsList'

export const FriendsPage = () => {
  const pages: SectionButtonInfo[] = [{
    name: "Added",
    urlname: "friends/added",
    count: 12,
    buttonEnum: FriendButtonType.added
  }, {
    name: "Sent",
    urlname: "friends/sent",
    count: 0,
    buttonEnum: FriendButtonType.sent
  }, {
    name: "Pending",
    urlname: "friends/pending",
    count: 1,
    buttonEnum: FriendButtonType.pending
  }]
  const [currButtonType, setCurrButtonType] = useState<FriendButtonType>(FriendButtonType.display)
  const [currPage, setCurrPage] = useState<string>(() => {
    const curr_path: string = window.location.pathname
    for (let i = 0; i < pages.length; i++) {
      if (curr_path.includes(`/${pages[i].urlname}`)) {
        setCurrButtonType(pages[i].buttonEnum)
        return pages[i].name;
      }
    }
    return ""
  })
  useEffect(() => {
    setCurrButtonType(() => {
      for (let i = 0; i < pages.length; i++) {
        if (currPage == pages[i].name) {
          return pages[i].buttonEnum
        }
      }
      return 0
    })
  }, [currPage])
  return (
    <div className={classes.friendsPage}>
      <SectionSwitcher pages={pages} currPage={currPage} setCurrPage={setCurrPage}></SectionSwitcher>
      <FriendsList type={currButtonType}></FriendsList>
    </div>
  )
}
