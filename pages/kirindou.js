import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pstyles from '../styles/Project.module.css'
import kirindou from "../public/kirindou.jpg"
import { Header } from '../components/header'
import { BackButton } from '../components/back-button'

export default function Kirindou() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kirindou</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>

      <Header/>

    <main className={pstyles.project_main}>

      <div className={pstyles.intro}>
      <div className={pstyles.intro_pic}>
        <Image src={kirindou} alt="kirindou"></Image>
      </div>
      <div className={pstyles.intro_text}>
        <h1 className={pstyles.project_title}>Kirindou</h1>
        <p className={pstyles.project_text}>Logo for mediation and conflict management startup</p>
        <BackButton/>
    
       </div>
      </div>
    
    </main>

      <footer className={styles.footer}>
  <p>CONTACT / ABOUT / LEGAL+PRIVACY</p>
  <p>@ 2022 Lisa Lu.</p>
      </footer>
    </div>
  )
}
