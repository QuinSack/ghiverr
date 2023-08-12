import React, { useState } from 'react'
import '../styles/ServiceList.css'
import GraphicDesignDropdown from './service-dropdownlist/GraphicDesignDropdown'

const ServiceList = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(true);
      };

    const handleDropdownLeave = () => {
        setIsDropdownOpen(false);
      };
  return (
    <div className='servicelistcontainer'>
        <div className='dropdown-wrapper' onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownLeave}>
            <h6 className='dropdown-trigger'>Graphics & Design</h6>
            {isDropdownOpen && (
                <div className='dropdown-content'>
                    <GraphicDesignDropdown />
                </div>
            )}
        </div>
        <h6>Programming & Tech</h6>
        <h6>Digital Marketing</h6>
        <h6>Video & Animation</h6>
        <h6>Writing & Translation</h6>
        <h6>Music & Audio</h6>
        <h6>Business</h6>
        <h6>Data</h6>
        <h6>Photography</h6>
        <h6>AI Services</h6>
    </div>
  )
}

export default ServiceList