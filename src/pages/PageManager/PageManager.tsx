import React from 'react'
import classes from './PageManager.module.css'
import PageHeaderEllipses from '../../components/PageHeaderEllipses/PageHeaderEllipses'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { PageController } from '../../components/PageController/PageController'
import { AccountPage } from '../../components/AccountPage/AccountPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const PageManager = () => {
  return (
    <div className={classes.pageContainer}>
      <PageHeader name="Feed"></PageHeader>
      <div className={classes.mainContainer}>
        <PageController></PageController>
        <div className={classes.pageContent}>
        <Routes>
          <Route path='account/*' element={<AccountPage></AccountPage>}></Route>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default PageManager
