import React, { FC } from 'react'
import classes from './FriendButtonsContainer.module.css'
import MessageImage from '../../../assets/images/other/messages.svg'
import UnfriendImage from '../../../assets/images/other/unfriend.svg'
import ShareImage from '../../../assets/images/other/reposts_2.svg'
import DeclineImage from '../../../assets/images/other/decline.svg'
import AcceptImage from '../../../assets/images/other/accept.svg'
import { FriendButtonType } from '../../../types'
import { FriendButtonBase } from '../FriendButtonBase/FriendButtonBase'

interface FriendButtonsContainerProps {
  type: FriendButtonType
}

export const FriendButtonsContainer: FC<FriendButtonsContainerProps> = (
  {type}
) => {
  const handleButtons = () => {
    switch (type) {
      case FriendButtonType.added:
        return (<>
          <FriendButtonBase image={UnfriendImage}></FriendButtonBase>
          <FriendButtonBase image={MessageImage}></FriendButtonBase>
          <FriendButtonBase image={ShareImage}></FriendButtonBase>
        </>)
      case FriendButtonType.pending:
        return (<>
          <FriendButtonBase image={AcceptImage}></FriendButtonBase>
          <FriendButtonBase image={DeclineImage}></FriendButtonBase>
        </>)
      case FriendButtonType.sent:
        return (<>
          <FriendButtonBase image={DeclineImage}></FriendButtonBase>
        </>)
      default:
        return (<></>)
    }
  }
  return (
    <div className={classes.buttonsList}>
      {handleButtons()}
    </div>
  )
}
