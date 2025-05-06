import React, { FC, useEffect } from 'react'
import { FriendClickable } from '../FriendClickable/FriendClickable'
import classes from './FriendsList.module.css'
import { FriendButtonType } from '../../types'

interface FriendsListProps {
  type: FriendButtonType
}

export const FriendsList: FC<FriendsListProps> = ({type}) => {
  const friends = [{
    name: "GOAT",
    realname: "LeBron James"
  }, {
    name: "GOAT",
    realname: "LeBron James"
  }, {
    name: "GOAT",
    realname: "LeBron James"
  }, {
    name: "GOAT",
    realname: "LeBron James"
  }, {
    name: "GOAT",
    realname: "LeBron James"
  }, {
    name: "GOAT",
    realname: "LeBron James"
  }]
  return (
    <section className={classes.friendsList}>
      {friends.map((val, index) => <FriendClickable type={type} key={index} username={val.name} realname={val.realname}></FriendClickable>)}
    </section>
  )
}
