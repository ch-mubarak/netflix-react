import React from 'react'
import Main from '../components/Main'
import Row from "../components/Row"
import requests from "../Requests"

function Home() {
  return (
    <div>
        <Main />
        <Row rowID="1" title="Popular" fetchURL={requests.requestPopular} />
        <Row rowID="2" title="Top Rated" fetchURL={requests.requestRated} />
        <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
        <Row rowID="4" title="Tv" fetchURL={requests.requestTv} />
    </div>
  )
}

export default Home