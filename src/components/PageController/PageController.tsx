import React, { useState } from 'react'
import classes from './PageController.module.css'
import { PageControllerButton } from '../PageControllerButton/PageControllerButton'
import { PageControllerExit } from '../PageControllerExit/PageControllerExit'

export const PageController = () => {
  const pageNames = ["Feed", "Messages", "Account", "Friends", "Notifications"]
  const [selectedPage, setSelectedPage] = useState(pageNames[0])
  return (
    <div className={classes.pageController}>
      {pageNames.map((val) => 
        <PageControllerButton 
        isSelected={val == selectedPage}
        setSelectedPage={setSelectedPage}
        name={val}></PageControllerButton>)}
      <PageControllerExit></PageControllerExit>
    </div>
  )
}
