import React from 'react'
import TempPhoto from '../../assets/test/photo_list_test.jpg'
import classes from './PhotosList.module.css'
import { PhotoClickable } from '../PhotoClickable/PhotoClickable'

export const PhotosList = () => {
  const photosLink = [{
    linkDisplay: TempPhoto,
    linkHighRes: TempPhoto
  }, {
    linkDisplay: TempPhoto,
    linkHighRes: TempPhoto
  }, {
    linkDisplay: TempPhoto,
    linkHighRes: TempPhoto
  }, {
    linkDisplay: TempPhoto,
    linkHighRes: TempPhoto
  }, {
    linkDisplay: TempPhoto,
    linkHighRes: TempPhoto
  }, {
    linkDisplay: TempPhoto,
    linkHighRes: TempPhoto
  }, {
    linkDisplay: TempPhoto,
    linkHighRes: TempPhoto
  }, ]
  return (
    <div className={classes.photosList}>{
      photosLink.map((elem, index) => 
        <PhotoClickable key={index} linkHighRes={elem.linkHighRes} linkDisplay={elem.linkDisplay}></PhotoClickable>)
    }</div>
  )
}
