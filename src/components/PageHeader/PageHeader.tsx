import React from 'react'
import classes from './PageHeader.module.css'
import PageHeaderEllipses from '../PageHeaderEllipses/PageHeaderEllipses'

export const PageHeader = () => {
  return (
    <div className={classes.pageHeaderContainer}>
      <PageHeaderEllipses></PageHeaderEllipses>
      <header className={classes.pageHeader}>
        <h2 className={classes.pageName}>Feed</h2>
      </header>
    </div>
  )
}
