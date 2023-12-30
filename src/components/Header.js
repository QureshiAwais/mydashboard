'use client'
import React from 'react'
import { BsSearch, BsJustify } from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

export const Header = ({ openSidebar }) => {

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={openSidebar} />
      </div>

      <div className='search-div'>
        <input style={{ background: "none", border: "none" }} type='text' placeholder='Search' />
        <div><BsSearch className='icon' /></div>
      </div>
      <div>
        <button className='icon-btn'><FontAwesomeIcon icon={faBell} /></button>
      </div>
      <div>
        <button className='icon-btn' ><FontAwesomeIcon icon={faEnvelope} /></button>
      </div>
      <div>
        <button className='icon-btn'><FontAwesomeIcon icon={faCircleHalfStroke} />
        </button>
      </div>
      <div>
        <img className='admin-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAVQiNEdJncW4fSobQ_Ln571rGqvUkjL4HA&usqp=CAU' />
      </div>
    </header>
  )
}
