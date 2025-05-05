import React, { FC, useState } from 'react'
import classes from './AccountSectionSwitcher.module.css'
import { AccountSectionSwitchButton } from '../AccountSectionSwitchButton/AccountSectionSwitchButton'
import { useNavigate } from 'react-router-dom'

interface AccountSectionSwitcherProps {
  currPage: string,
  setCurrPage: (val: string | ((val: string) => string)) => void,
  pages: {
    name: string,
    urlname: string,
    count: number,
  }[]
}

export const AccountSectionSwitcher: FC<AccountSectionSwitcherProps> = ({
  currPage, setCurrPage, pages
}) => {
  return (
    <section className={classes.buttonsContainer}>
      { pages.map((val, index) => 
      <AccountSectionSwitchButton key={index}
        name={val.name}
        count={val.count}
        url={val.urlname}
        isCurr={val.name == currPage}
        setCurr={setCurrPage}
      ></AccountSectionSwitchButton>) }
    </section>
  )
}
