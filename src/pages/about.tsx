import Head from 'next/head'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Kim Geonhee</title>
        <meta name="description" content="Learn more about Kim Geonhee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>

        {/* 한글 자기소개 */}
        <p className={styles.description}>
          안녕하세요, 저는 김건희입니다!&apos;
          <br />
          중부대학교에서 경찰경호학과와 정보보호학과를 복수 전공하고 있습니다.
          <br />
          보안 전문가가 되고 싶다는 열망으로 열심히 공부 중입니다.
          <br />
          앞으로 사이버 보안 분야에서 영향력 있는 전문가로 성장하고 싶습니다.
        </p>

        {/* 영어 자기소개 추가 */}
        <p className={styles.description}>
          Hello, I'm Kim Geonhee!
          <br />
          I am currently pursuing a double major in Police Security and
          Information Security at Joongbu University.
          <br />
          With a strong passion for becoming a security expert, I am dedicated
          to my studies.
          <br />
          My goal is to grow into an influential expert in the field of
          cybersecurity.
        </p>

        {/* 연락처 정보 */}
        <div className={styles.contact}>
          <h2>Contact Me</h2>
          <p>
            Email: <a href="mailto:kevin0741@naver.com">kevin0741@naver.com</a>
          </p>
          <p>
            Phone: <a href="tel:010-6354-1655">010-6354-1655</a>
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Kim Geonhee. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default About
