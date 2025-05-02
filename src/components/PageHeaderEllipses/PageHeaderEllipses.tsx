import React, { useEffect, useState } from 'react'
import classes from './PageHeaderEllipses.module.css'

const PageHeaderEllipses = () => {
  const colors = ["#4440FF", "#C67DFF"]
  const count = 5
  const [ellipsesNums, setEllipsesNums] = useState<number[]>(() => {
    const arr: number[] = []
    for (let i = 0; i < count + 1; i++)
      arr.push(i)
    return arr
  })
  return (
    <div className={classes.ellipseContainer}>
      {ellipsesNums.map((val, index) => 
      <div key={index} style={{
        position: "absolute",
        backgroundColor: colors[val % 2],
        top: -20 * (Math.random() * (1 - 0.8) + 0.8),
        left: String(100 / count * val) + "%",
        width: 100,
        borderRadius: "50%",
        transform: `scaleX(${3 * (Math.random() * (3 - 1.8) + 1.8)})`,
        height: 100 * (Math.random() * (0.65 - 0.4) + 0.4)
      }}>
      </div>)}
    </div>
  )
}

export default PageHeaderEllipses
