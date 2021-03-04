import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css';
import { ChallengesBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Movit</title>
      </Head>

      <ExperienceBar/>

      <section>
        <div>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
        </div>
        <div>
          <ChallengesBox/>
        </div>
      </section>
    </div>
  )
}
