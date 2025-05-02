import React, { FC } from 'react'
import classes from './PostsList.module.css'
import { Post } from '../Post/Post'

interface PostsListProps {
  nickname?: string  
}

export const PostsList: FC<PostsListProps> = ({nickname = "loading..."}) => {
  const posts = [{
    text: "The hell am I doing?",
    time: "28 dec, 18:32"
  }, {
    text: "Italian brainrot memes were never funny",
    time: "28 dec, 18:32"
  }, 
  {
    text: "Just wait and see, someday we'll all be free",
    time: "28 dec, 18:32"
  }, 
  {
    text: "Ye fell off",
    time: "28 dec, 18:32"
  }, {
    text: "What are you looking at???",
    time: "28 dec, 18:32"
  }, ]
  return (
    <section className={classes.postsList}>
      {posts.map((val, index) => <Post key={index} nickname={nickname} content={val.text} time={val.time}></Post>)}
    </section>
  )
}
