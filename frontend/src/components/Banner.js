import React from 'react'
import styles from "../styles/layout/_banner.scss"

const Banner = () => {
  return (
    <nav style={styles.nav}> 
        <a href="/bio">Bio</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/blog">Blog</a>
    </nav>
  )
}

export default Banner