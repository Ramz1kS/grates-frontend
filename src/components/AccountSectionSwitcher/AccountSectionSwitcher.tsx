import React, { useState } from 'react'
import classes from './AccountSectionSwitcher.module.css'
import { AccountSectionSwitchButton } from '../AccountSectionSwitchButton/AccountSectionSwitchButton'

export const AccountSectionSwitcher = () => {
  const pages = [{
    name: "Posts",
    count: 42
  }, {
    name: "Friends",
    count: 12
  }, {
    name: "Photos",
    count: 4
  }]
  const [currPage, setCurrPage] = useState<string>(pages[0].name)
  return (
    <section className={classes.buttonsContainer}>
      { pages.map((val, index) => 
      <AccountSectionSwitchButton key={index}
        name={val.name}
        count={val.count}
        isCurr={val.name == currPage}
        setCurr={setCurrPage}
      ></AccountSectionSwitchButton>) }
    </section>
  )
}
