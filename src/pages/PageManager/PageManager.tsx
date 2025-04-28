import React from 'react'
import classes from './PageManager.module.css'
import PageHeaderEllipses from '../../components/PageHeaderEllipses/PageHeaderEllipses'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { PageController } from '../../components/PageController/PageController'

const PageManager = () => {
  return (
    <div className={classes.pageContainer}>
      <PageHeader></PageHeader>
      <div className={classes.mainContainer}>
        <PageController></PageController>
        <div className={classes.pageContent}></div>
      </div>
    </div>
  )
}

export default PageManager
