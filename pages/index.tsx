import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Navbar from './compontent/Navbar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  )
}

export default Home
