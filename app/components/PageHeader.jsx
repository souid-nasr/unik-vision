import React from 'react'
import Link from 'next/link'
function PageHeader({title,subtitle}) {
  return (
    <div className="page-header d-flex align-items-center">
    <div className="container position-relative">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 text-center">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <Link className="cta-btn" href="/contact">Available for hire</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PageHeader