import React from 'react'
import { FriendClickable } from '../FriendClickable/FriendClickable'
import classes from './FriendsList.module.css'

export const FriendsList = () => {
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
  }, ]
  return (
    <section className={classes.friendsList}>
      {friends.map((val, index) => <FriendClickable key={index} username={val.name} realname={val.realname}></FriendClickable>)}
    </section>
  )
}
