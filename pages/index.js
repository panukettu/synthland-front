import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div className="home">
    <Head>
      <title>synth.land</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <h1>synth.land dev asdf1234</h1>

    <style jsx>{`
     .home {
       text-align: center;
     }
    `}</style>

    <style global jsx>{`
        body {
          background-color: #0a0710;
          color: white;
        }
      `}
    </style>
  </div>
)

export default Home
