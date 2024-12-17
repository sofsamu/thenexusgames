import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import TrendingGames from '../../components/TrendingGames'
import React from 'react'

export default function page() {
  return (
    <div>
      <NavBar/>
      <section>
        <TrendingGames/>
      </section>
      <Footer/>
    </div>
  )
}
