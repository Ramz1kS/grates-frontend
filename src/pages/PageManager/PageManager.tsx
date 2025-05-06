import React, { useState } from 'react'
import classes from './PageManager.module.css'
import PageHeaderEllipses from '../../components/PageHeaderEllipses/PageHeaderEllipses'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { PageController } from '../../components/PageController/PageController'
import { AccountPage } from '../AccountPage/AccountPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MessagesPage } from '../MessagesPage/MessagesPage'
import { PageControllerButtonInfo } from '../../types'
import { FriendsPage } from '../FriendsPage/FriendsPage'

const PageManager = () => {
  const pages: PageControllerButtonInfo[] = [{
    name: "Feed",
    urlname: "feed"
  }, {
    name: "Messages",
    urlname: "messages"
  }, {
    name: "Account",
    urlname: "account"
  }, {
    name: "Friends",
    urlname: "friends"
  }, {
    name: "Notifications",
    urlname: "notifications"
  }]
  const [selectedPageName, setSelectedPageName] = useState<string>(() => {
    const curr_path: string = window.location.pathname
    for (let i = 0; i < pages.length; i++) {
      if (curr_path.includes(`/${pages[i].urlname}`)) {
        return pages[i].name;
      }
    }
    return ""
  })
  return (
    <div className={classes.pageContainer}>
      {/* TODO: пофиксить */}
      <PageHeader name={selectedPageName}></PageHeader>
      <div className={classes.mainContainer}>
        <PageController setTabName={setSelectedPageName} ></PageController>
        <div className={classes.pageContent}>
        <Routes>
          <Route path='account/*' element={<AccountPage></AccountPage>}></Route>
          <Route path='messages/*' element={<MessagesPage></MessagesPage>}></Route>
          <Route path='friends/*' element={<FriendsPage></FriendsPage>}></Route>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default PageManager
