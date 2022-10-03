import React from 'react'
import Main from '../components/Main'
import Row from "../components/Row"
import requests from "../Requests"

function Home() {
  return (
    <div>
        <Main />
        <Row title="Popular" fetchURL={requests.requestPopular} />
        <Row title="Top Rated" fetchURL={requests.requestRated} />
        <Row title="Trending" fetchURL={requests.requestTrending} />
        <Row title="Tv" fetchURL={requests.requestTv} />
    </div>
  )
}

export default Home