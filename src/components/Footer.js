import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footerbody'>
      <Container className='footercontainer'>
      <Row>
        <Col className='footercategories'>
          <h6><strong>Categories</strong></h6>
          <section className='footercategorylist'>
            <h6>Graphics & Design</h6>
            <h6>Digital Marketing</h6>
            <h6>Writing & Translation</h6>
            <h6>Video & Animation</h6>
            <h6>Music & Audio</h6>
            <h6>Ghiverr Logo Maker</h6>
            <h6>Programming & Tech</h6>
            <h6>Data</h6>
            <h6>Business</h6>
            <h6>Lifestyle</h6>
            <h6>Photography</h6>
            <h6>End-to-End Projects</h6>
            <h6>Sitemap</h6>
          </section>
        </Col>
        <Col className='footercategories'>
          <h6><strong>About</strong></h6>
          <section className='footercategorylist'>
            <h6>Careers</h6>
            <h6>Press & News</h6>
            <h6>Partnerships</h6>
            <h6>Privacy Policy</h6>
            <h6>Terms of Service</h6>
            <h6>Intellectual Property Claims</h6>
            <h6>Investor Relations</h6>
          </section>
        </Col>
        <Col className='footercategories'>
          <h6><strong>Support and Education</strong></h6>
          <section className='footercategorylist'>
            <h6>Help & Support</h6>
            <h6>Trust & Safety</h6>
            <h6>Selling on Ghiverr</h6>
            <h6>Buying on Ghiverr</h6>
            <h6>Ghiverr Guides</h6>
            <h6>Ghiverr Workspace</h6>
            <h6>Learn</h6>
          </section>
        </Col>
        <Col className='footercategories'>
          <h6><strong>Community</strong></h6>
          <section className='footercategorylist'>
            <h6>Customer Success Stories</h6>
            <h6>Community Hub</h6>
            <h6>Forum</h6>
            <h6>Events</h6>
            <h6>Blogs</h6>
            <h6>Influencers</h6>
            <h6>Affiliates</h6>
            <h6>Podcast</h6>
            <h6>Invite a Friend</h6>
            <h6>Become a Seller</h6>
            <h6>Community Standards</h6>
          </section>
        </Col>
        <Col className='footercategories'>
          <h6><strong>Business Solutions</strong></h6>
          <section className='footercategorylist'>
            <h6>About Business Solutions</h6>
            <h6>Ghiverr Pro</h6>
            <h6>Ghiverr Certified</h6>
            <h6>Ghiverr Enterprise</h6>
            <h6>ClearVoice</h6>
            <h6>Working Not Working</h6>
            <h6>Contact Sales</h6>
          </section>
        </Col>
      </Row>
    </Container>
    <div className='copyrightsection'>
      <Container>
        <Row>
          <Col style={{display: 'flex', alignItems: 'center', width: '100%'}}>
            <section style={{display: 'flex', gap: '20px', alignItems: 'center', width: '40%'}}>
              <h3 style={{fontWeight: 'bolder'}}><strong>ghiverr</strong></h3>
              <div style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
                <FontAwesomeIcon icon={faCopyright} style={{marginBottom: '5px'}}></FontAwesomeIcon>
                <h6 style={{opacity: '0.5'}}>Ghiverr International Limited. 2023</h6>
              </div>
            </section>
            <section style={{display: 'flex', gap: '25px', alignItems: 'center', marginLeft: '20%'}}>
              <FontAwesomeIcon icon={faTwitter} size='lg'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faFacebook} size='lg'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faLinkedin} size='lg'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faPinterest} size='lg'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faInstagram} size='lg'></FontAwesomeIcon>
            </section>
            <section style={{marginLeft: '5%', display: 'flex', alignItems: 'center', gap: '15px'}}>
              <FontAwesomeIcon icon={faGlobe} size='lg' style={{marginBottom: '5px'}}></FontAwesomeIcon>
              <h6>English</h6>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default Footer