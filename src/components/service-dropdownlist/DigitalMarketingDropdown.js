import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const DigitalMarketingDropdown = () => {
  return (
    <Container>
        <Row>
            <Col style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <h6><strong>Search</strong></h6>
                <h6>Search Engine Optimization (SEO)</h6>
                <h6>Search Engine Marketing</h6>
                <h6>Local SEO</h6>
                <h6>E-Commerce SEO</h6>
                <h6>Video SEO</h6>
                <h6><strong>Social</strong></h6>
                <h6>Social Media Marketing</h6>
                <h6>Paid Social Media</h6>
                <h6>Influencer Marketing</h6>
                <h6>Community Management</h6>
            </Col>
            <Col style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <h6><strong>Methods & Techniques</strong></h6>
                <h6>Video Marketing</h6>
                <h6>E-Commerce Marketing</h6>
                <h6>Email Marketing</h6>
                <h6>Guest Posting</h6>
                <h6>Affiliate Marketing</h6>
                <h6>Display Advertising</h6>
                <h6>Public Relations</h6>
                <h6>Text Messaging Marketing</h6>
            </Col>
            <Col style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <h6><strong>Analytics & Strategy</strong></h6>
                <h6>Marketing Strategy</h6>
                <h6>Marketing Advice</h6>
                <h6>Web Analytics</h6>
                <h6><strong>Industry & Purpose-Specific</strong></h6>
                <h6>Music Promotion</h6>
                <h6>Podcast Marketing</h6>
                <h6>Book & eBook Marketing</h6>
                <h6>Mobile App Marketing</h6>
                <h6><strong>Miscellaneous</strong></h6>
                <h6>Crowdfunding</h6>
                <h6>Other</h6>
            </Col>
        </Row>
    </Container>
  )
}

export default DigitalMarketingDropdown