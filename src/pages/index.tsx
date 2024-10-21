import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kim Geonhee Portfolio</title>
        <meta
          name="description"
          content="Kim Geonhee's Personal Portfolio Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Kim Geonhee</h1>
          <p className={styles.subtitle}>Future Security Specialist</p>
        </div>

        <div className={styles.buttons}>
          <a href="/about" className={styles.button}>
            About
          </a>
          <a href="/projects" className={styles.button}>
            Projects
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Kim Geonhee</p>
      </footer>
    </div>
  )
}

export default Home
