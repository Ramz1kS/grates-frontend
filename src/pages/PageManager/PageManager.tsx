import React from 'react'
import classes from './PageManager.module.css'
import PageHeaderEllipses from '../../components/PageHeaderEllipses/PageHeaderEllipses'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { PageController } from '../../components/PageController/PageController'
import { AccountPage } from '../AccountPage/AccountPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MessagesPage } from '../MessagesPage/MessagesPage'

const PageManager = () => {
  return (
    <div className={classes.pageContainer}>
      <PageHeader name="Feed"></PageHeader>
      <div className={classes.mainContainer}>
        <PageController></PageController>
        <div className={classes.pageContent}>
        <Routes>
          <Route path='account/*' element={<AccountPage></AccountPage>}></Route>
          <Route path='messages' element={<MessagesPage></MessagesPage>}></Route>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default PageManager
