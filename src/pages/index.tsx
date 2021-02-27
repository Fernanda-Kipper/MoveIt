import { GetServerSideProps } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import { ChallengeProvider } from '../contexts/ChallengeContext'
import { CountProvider } from "../contexts/CountDownContext";

import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

interface HomeProps{
  level: number;
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengeProvider 
    level={props.level} 
    currentExperience={props.currentExperience} 
    challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Inicio MoveIt</title>
        </Head>
        <ExperienceBar/>
        <CountProvider>
          <section>
            <div className={styles.leftContainer}>
              <Profile/>
              <CompletedChallenges/>
              <CountDown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountProvider>
      </div>
    </ChallengeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies 
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}