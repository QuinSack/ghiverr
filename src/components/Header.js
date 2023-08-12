import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='navcontainer'>
        <div className='navcontent'>
            <section style={{display: 'flex', gap: '15px', width: '60%', backgroundColor: 'green', justifyContent: 'center'}}>
                <h4 style={{fontSize: '2rem'}}><strong>ghiverr</strong></h4>
                <input placeholder='What service are you looking for today?' style={{width: '70%', height: '50px'}} />
            </section>
        </div>
    </div>
  )
}

export default Header