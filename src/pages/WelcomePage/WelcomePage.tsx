import React from 'react'
import classes from './WelcomePage.module.css'
import LoginWindow from '../../components/LoginWindow/LoginWindow'

const WelcomePage = () => {
  return (
    <div className={classes.welcome}>
      <p className={classes.websiteName}>Grates</p>
      <LoginWindow></LoginWindow>
    </div>
  )
}

export default WelcomePage
