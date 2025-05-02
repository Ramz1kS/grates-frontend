import React, { FC } from 'react'
import classes from './PageHeader.module.css'
import PageHeaderEllipses from '../PageHeaderEllipses/PageHeaderEllipses'

interface PageHeaderProps {
  name: string
}

export const PageHeader: FC<PageHeaderProps> = ({name}) => {
  return (
    <div className={classes.pageHeaderContainer}>
      <PageHeaderEllipses></PageHeaderEllipses>
      <header className={classes.pageHeader}>
        <h2 className={classes.pageName}>{name}</h2>
      </header>
    </div>
  )
}
