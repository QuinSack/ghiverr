import React from 'react'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
  return (
    <div className='navcontainer'>
        <div className='navcontent'>
            <section style={{display: 'flex', gap: '15px', width: '60%', justifyContent: 'center'}}>
                <h4 style={{fontSize: '2rem'}}><strong>ghiverr</strong></h4>
                <input placeholder='What service are you looking for today?' style={{width: '70%', height: '50px', border: '1px solid'}} />
            </section>
            <section className='iconsection'>
              <FontAwesomeIcon icon={faBell} size='lg'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faEnvelope} size='lg'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faHeart} size='lg'></FontAwesomeIcon>
            </section>
            <section className='profilesection'>
              <Link style={{textDecoration: 'none'}}><h5 style={{color: '#cacaca'}}><strong>Orders</strong></h5></Link>
              <Link style={{textDecoration: 'none'}}><h5 style={{color: 'darkgreen'}}><strong>Switch to selling</strong></h5></Link>
              <FontAwesomeIcon icon={faUserCircle} size='lg' color='blue'></FontAwesomeIcon>
            </section>
        </div>
    </div>
  )
}

export default Header