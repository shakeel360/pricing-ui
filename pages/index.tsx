import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Pricing from '@/components/Pricing'
import Features from '@/components/Features'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pricing UI</title>
        <meta name="description" content="Pricing UI created using NextJs and Chakra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <Pricing/>
        <Features/>
      </main>
    </>
  )
}
