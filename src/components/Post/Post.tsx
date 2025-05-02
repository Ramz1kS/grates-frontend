import React, { FC } from 'react'
import AvatarTest from './../../assets/test/account_page_avatar_test.png'
import classes from './Post.module.css'
import LikeImage from '../../assets/images/poststats/likes.svg'
import CommentImage from '../../assets/images/poststats/comments.svg'
import RepostsImage from '../../assets/images/poststats/reposts.svg'
import ViewsImage from '../../assets/images/poststats/views.svg'
import { motion } from 'motion/react';

interface PostProps {
  nickname?: string;
  time?: string;
  content?: string;
}

export const Post: FC<PostProps> = ({
  nickname = "loading...", time = "uhhh...", content = "just wait a little vro..." }) => {
  return (
    <div className={classes.post}>
      <div className={classes.avatarAndUploadInfo}>
        <img className={classes.commentAvatar} src={AvatarTest}></img>
        <div className={classes.uploadInfoDiv}>
          <p className={classes.uploaderNickname}>{nickname}</p>
          <p className={classes.uploadTime}>{time}</p>
        </div>
      </div>
      <div className={classes.postContent}>
        <p className={classes.postText}>{content}</p>
      </div>
      <div className={classes.postsStats}>
        <div className={classes.postsStatsMain}>
          <motion.button className={classes.postButton}
            whileHover={{
              backgroundColor: "rgba(55, 53, 178, 0.25)",
              transition: { duration: 0.2 }
            }}>
            <img src={LikeImage}></img>
            <p className={classes.count}>1337</p>
          </motion.button>
          <motion.button className={classes.postButton}
            whileHover={{
              backgroundColor: "rgba(55, 53, 178, 0.25)",
              transition: { duration: 0.2 }
            }}>
            <img src={CommentImage}></img>
            <p className={classes.count}>1337</p>
          </motion.button>
          <motion.button className={classes.postButton}
            whileHover={{
              backgroundColor: "rgba(55, 53, 178, 0.25)",
              transition: { duration: 0.2 }
            }}>
            <img src={RepostsImage}></img>
            <p className={classes.count}>1337</p>
          </motion.button>
        </div>
        <motion.div className={classes.postButton}>
          <img src={ViewsImage}></img>
          <p className={classes.count}>1337</p>
        </motion.div>
      </div>
    </div>
  )
}
