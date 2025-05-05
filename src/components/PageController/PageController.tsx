import React, { useState } from 'react'
import { PageControllerButtonInfo } from '../../types'
import classes from './PageController.module.css'
import { PageControllerButton } from '../PageControllerButton/PageControllerButton'
import { PageControllerExit } from '../PageControllerExit/PageControllerExit'

export const PageController = () => {
  const pageNames = ["Feed", "Messages", "Account", "Friends", "Notifications"]
  const pages: PageControllerButtonInfo[] = [{
    name: "Feed",
    urlname: "feed"
  }, {
    name: "Messages",
    urlname: "messages"
  }, {
    name: "Account",
    urlname: "account/posts"
  }, {
    name: "Friends",
    urlname: "friends/current"
  }, {
    name: "Notifications",
    urlname: "notifications"
  }]
  const [selectedPage, setSelectedPage] = useState<string>(() => {
    const curr_path: string = window.location.pathname
    for (let i = 0; i < pages.length; i++) {
      if (curr_path.includes(`/${pages[i].urlname}`)) {
        return pages[i].name;
      }
    }
    return ""
  })
  return (
    <div>
      <div className={classes.pageController}>
        {pages.map((val, index) => 
          <PageControllerButton 
          key={index}
          isSelected={val.name == selectedPage}
          setSelectedPage={setSelectedPage}
          pageInfo={val}></PageControllerButton>)}
        <PageControllerExit></PageControllerExit>
      </div>
    </div>
  )
}
