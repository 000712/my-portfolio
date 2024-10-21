import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'

const Projects = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Explore my projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Projects</h1>

        {/* 프로젝트 1 */}
        <div className={styles.project}>
          <h2>Project 1: hcjdemo</h2>
          <Image
            src="/1.png"
            alt="hcjdemo"
            width={600}
            height={400}
            className={styles.projectImage}
          />
          <p>next.js를 처음 접하고 시작해본 기초적인 프로젝트</p>
        </div>

        {/* 프로젝트 2 */}
        <div className={styles.project}>
          <h2>Project 2: Goyang HUB - Object Page</h2>
          <Image
            src="/2.png"
            alt="Goyang HUB - Object Page"
            width={600}
            height={400}
            className={styles.projectImage}
          />
          <p>
            팀 프로젝트로 영화 관련 사이트로 Goyang HUB를 제작, 그중 Object
            페이지 담당
          </p>
        </div>

        {/* Links 섹션 */}
        <div className={styles.links}>
          <h2 className={styles.linksTitle}>Links</h2>
          <p className={styles.link}>
            GitHub:{' '}
            <a
              href="https://github.com/000712"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </p>
          <p className={styles.link}>
            Vercel:{' '}
            <a
              href="https://vercel.com/your-vercel-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Profile
            </a>
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Kim Geonhee. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Projects
