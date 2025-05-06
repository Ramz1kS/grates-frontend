import React, { FC, useState } from 'react'
import classes from './SectionSwitcher.module.css'
import { SectionSwitchButton } from '../SectionSwitchButton/SectionSwitchButton'
import { useNavigate } from 'react-router-dom'
import { SectionButtonInfo } from '../../types'

interface SectionSwitcherProps {
  currPage: string,
  setCurrPage: (val: string | ((val: string) => string)) => void,
  pages: SectionButtonInfo[]
}

export const SectionSwitcher: FC<SectionSwitcherProps> = ({
  currPage, setCurrPage, pages
}) => {
  return (
    <section className={classes.buttonsContainer}>
      { pages.map((val, index) => 
      <SectionSwitchButton key={index}
        name={val.name}
        count={val.count}
        url={val.urlname}
        isCurr={val.name == currPage}
        setCurr={setCurrPage}
      ></SectionSwitchButton>) }
    </section>
  )
}
