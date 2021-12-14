import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Legacy Accounts Consultant</title>
        <meta property="og:title" content="Legacy Accounts Consultant" />
      </Helmet>
    </div>
  )
}

export default Home
