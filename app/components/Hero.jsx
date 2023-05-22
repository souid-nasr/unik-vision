import React from 'react'
import Link from 'next/link'
function Hero() {
  return (
    <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <h2>We are <span>Unik Vision</span> a Professional Photographer </h2>
          <p>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
          <Link href="/contact" className="btn-get-started">Available for hire</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero