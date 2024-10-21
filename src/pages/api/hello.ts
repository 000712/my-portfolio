import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>김건희의 포트폴리오</title>
        <meta name="description" content="김건희의 개인 포트폴리오 웹사이트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          안녕하세요, 저는 <span>김건희</span>입니다!
        </h1>

        <p className={styles.description}>
          저는 중부대학교에서 경찰경호학과와 정보보호학과를 복수 전공 중입니다.
          다양한 활동과 경험을 통해 보안 전문가로 성장하고 싶습니다.
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>About Me &rarr;</h2>
            <p>저에 대해 더 알아보세요!</p>
          </a>

          <a href="/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>제가 작업한 프로젝트들을 확인해보세요!</p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
