import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ratione illo deleniti eos ex tempore inventore. Dolorum est, ad a
          deserunt eum ipsa fuga! Corrupti, odio esse. Nobis, tempora delectus
          nisi placeat asperiores ipsam. Eveniet dolor perspiciatis deleniti
          corrupti excepturi iste animi vero ipsum? Libero facilis laborum cum,
          in ducimus magnam quod saepe alias, omnis doloremque incidunt, esse
          facere sequi eligendi nesciunt consequatur deserunt tempora impedit
          placeat dignissimos. Nihil eligendi expedita consequatur? Deleniti,
          placeat. Expedita alias quo quas! Exercitationem atque consequuntur
          sit reprehenderit soluta obcaecati inventore nobis natus similique
          ipsum veniam modi hic saepe impedit non nihil, quasi voluptatem ullam!
        </p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="mailto:support@cms.ac.in">Contact Us</a>
          </li>
          <li>
            <a href="">Contribute</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">
          Copyright © 2017 All Rights Reserved by
          <a href="#"> CMS</a>.
        </p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li>
            <a className="facebook" href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a className="twitter" href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a className="dribbble" href="#">
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a className="linkedin" href="#">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer