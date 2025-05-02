import React from 'react'
import classes from './NotFoundPage.module.css'
import { PageHeader } from '../../components/PageHeader/PageHeader'

export const NotFoundPage = () => {
  return (
    <div className={classes.notFoundContainer}>
      <PageHeader name={"uh..."}></PageHeader>
      <div className={classes.mainContent}>
        <div className={classes.centerer}>
          <p className={classes.oops}>The page you're requesting not found!</p>
          <p className={classes.oops}>{"sorry :("}</p>
        </div>
      </div>
    </div>
  )
}
