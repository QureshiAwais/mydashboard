'use client'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = ({ openSidebarToggle, openSidebar }) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>KDISP</h1>
          <span style={{ fontSize: "12px" }}>INTERIOR & ARCHITECTURE</span>
        </div>

        <span className='icon close_icon' onClick={openSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li style={{ background: "white", color: "black", borderTopRightRadius: "30px", borderBottomRightRadius: "30px", marginBottom: "10px" }} className='sidebar-list-item'>
          <a style={{ color: "black" }} href="">
            <FontAwesomeIcon icon={faHouseChimneyUser} />&nbsp;&nbsp; Home
          </a>
        </li>

        <li style={{ background: " #ff9d09", borderTopRightRadius: "30px", borderBottomRightRadius: "30px" }} className='sidebar-list-item'>
          <a style={{ color: "white" }} href="">
            <FontAwesomeIcon icon={faBuilding} />&nbsp;&nbsp; My Space
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            Leave
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            Attendance
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            Performance
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            Expenses & Travel
          </a>
        </li> <li className='sidebar-list-item'>
          <a href="">
            Help Desk
          </a>
        </li>
      </ul>
    </aside>
  )
}
