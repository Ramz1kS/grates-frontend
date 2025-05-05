import React from 'react'
import TestImage from '../../assets/test/account_page_avatar_test.png'
import classes from './MessagesPage.module.css'
import { MessageClickable } from '../../components/MessageClickable/MessageClickable'

export const MessagesPage = () => {
  const dialogesList = [{
      username: "idspikes1",
      name: "Ramazan Apsuvaev",
      pfpLink: TestImage,
      isNew: false,
      lastMsg: "Hi! I'm using WhatsApp!"
    }, {
      username: "idspikes1",
      name: "Ramazan Apsuvaev",
      pfpLink: TestImage,
      isNew: false,
      lastMsg: "Hi! I'm using WhatsApp!"
    },{
      username: "idspikes1",
      name: "Ramazan Apsuvaev",
      pfpLink: TestImage,
      isNew: false,
      lastMsg: "Hi! I'm using WhatsApp!"
    },{
      username: "idspikes1",
      name: "Ramazan Apsuvaev",
      pfpLink: TestImage,
      isNew: false,
      lastMsg: "Hi! I'm using WhatsApp!"
    },{
      username: "idspikes1",
      name: "Ramazan Apsuvaev",
      pfpLink: TestImage,
      isNew: false,
      lastMsg: "Hi! I'm using WhatsApp!"
    },{
      username: "idspikes1",
      name: "Ramazan Apsuvaev",
      pfpLink: TestImage,
      isNew: false,
      lastMsg: "Hi! I'm using WhatsApp!"
    },{
      username: "idspikes1",
      name: "Ramazan Apsuvaev",
      pfpLink: TestImage,
      isNew: false,
      lastMsg: "Hi! I'm using WhatsApp!"
    },{
      username: "idspikes1",
      name: "Ramazan Apsuvaev",
      pfpLink: TestImage,
      isNew: false,
      lastMsg: "Hi! I'm using WhatsApp!"
    },{
      username: "idspikes1",
      name: "Ramazan Apsuvaev",
      pfpLink: TestImage,
      isNew: false,
      lastMsg: "Hi! I'm using WhatsApp!"
    },{
      username: "idspikes1",
      name: "Ramazan Apsuvaev",
      pfpLink: TestImage,
      isNew: false,
      lastMsg: "Hi! I'm using WhatsApp!"
    },]
  return (
    <div className={classes.messagesMainContainer}>
      {dialogesList.map((val, index) => 
      <MessageClickable key={index}
        username={val.username} name={val.name} lastMsg={val.lastMsg} isNew={val.isNew} pfpLink={val.pfpLink}></MessageClickable>)}
    </div>
  )
}
