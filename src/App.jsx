import React from 'react'
import {
  Hero,
  PopularProducts,
  CustomerReviews,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Footer
} from './sections'
import Nav from './components/Nav'

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='padding'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='bg-black padding-x py-12 pb-8 text-white'>
        <Footer />
      </section>
    </main>
  )
}

export default App