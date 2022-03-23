import type { NextPage } from 'next'
import Head from 'next/head'
import { Feed } from '../components/Feed'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-50-gray scrollbar-hide h-screen overflow-y-scroll">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
    </div>
  )
}

export default Home
