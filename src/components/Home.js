'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faFaceSmile, faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faChartPie, faBars, faCalendar, faCheck, faCircleExclamation, faBarsProgress, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  return (
    <main className='main-container'>
      <h4>My Space / <span style={{ color: "#ff9d09" }}>Attendance</span></h4>
      <div className='cards-container'>
        <div className='main-cards'>
          <div>
            <span style={{ marginLeft: "-290px" }} className='card-span'>Attendance Status</span>
            <span>Last Week</span>
            <div className='card'>
              <div className='card-inner'>
                <span className='amount'><FontAwesomeIcon icon={faClock} /> Avg hrs/Day</span>
                <span className='growth'>(6hr 48m)</span>
              </div>
              &nbsp;&nbsp;
              <div className='card-inner'>
                <span className='amount'><FontAwesomeIcon icon={faChartPie} /> On Time Arrival</span>
                <span className='growth'>95%</span>
              </div>
            </div>
          </div>
          <div style={{ justifyContent: "center" }}>
            <span className='card-span'>Timings</span>
            <div style={{ margin: "1px" }}>
              <span className='day-span'>M</span><span className='day-span'>T</span>
              <span style={{ color: "yellow" }} className='day-span'>W</span><span className='day-span'>T</span>
              <span className='day-span'>F</span><span style={{ color: "green" }} className='day-span'>S</span><span style={{ color: "red" }} className='day-span'>S</span>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <span style={{ fontSize: "12px", marginBottom: "5px", padding: "2px" }} className='amount'>Today (09:30AM-06:30PM)</span>
                <span style={{ fontSize: "10px" }} className='growth'><span >Duration:9h 0m </span>Break 0m</span>
              </div>
            </div>
          </div>

          <div>
            <span className='card-span'>Action</span>
            <div className='card'>
              <div style={{ display: "flex", flexDirection: "row" }} className='card-inner'>
                <div style={{ border: "1px solid black" }}>
                  <span style={{ display: "block" }} className='amount'>04:04:39 PM</span>
                  <span className='growth'>Wed 06, Dec 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <button className='button'>Leave Request</button>
            <button className='button'>Work From Home</button>
          </div>
        </div>

      </div>

      <h4>Logs & Request</h4>
      <button style={{ color: "white", marginRight: "-3px" }} className='button'>Attendance Log</button>
      <button style={{ background: "black", color: "white", border: "1px solid white" }} className='button'>Attendance Request</button>

      <div className='table-wrapper'>
        <div className='title-row'>
          <h2 className='table-title'>December, 2023</h2>
          <div className='table-months'>
            <button style={{ background: "#ff9d09", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" }} className='month-btn'>30 Days</button><button className='month-btn'>Nov</button>
            <button className='month-btn'>Oct</button><button className='month-btn'>Sep</button>
            <button className='month-btn'>Aug</button><button className='month-btn'>Jul</button>
            <button style={{ borderTopRightRadius: "5px", borderBottomRightRadius: "5px" }} className='month-btn'>Jun</button>
          </div>
          <div className='search-box'>
            <button style={{ padding: "15px", background: "#ff9d09", color: "white", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" }}><FontAwesomeIcon icon={faBars} /></button>
            <button style={{ padding: "15px", marginRight: "5px", background: "Black", color: "white", border: "0.5px solid gray", borderTopRightRadius: "5px", borderBottomRightRadius: "5px" }}><FontAwesomeIcon icon={faCalendar} /></button>
          </div>
        </div>
        <div className='table-container'>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Attendance Visual</th>
                <th>Effective Hours</th>
                <th>Gross Hours</th>
                <th>Extra Hours</th>
                <th>Arrival</th>
                <th>Log</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Dec 04, Mon</td>
                <td><FontAwesomeIcon icon={faBarsProgress} /></td>
                <td><FontAwesomeIcon icon={faChartPie} /> 9h 15m</td>
                <td >9h 59m</td>
                <td >0h 59m</td>
                <td><FontAwesomeIcon icon={faCheck} /> On Time</td>
                <td ><FontAwesomeIcon icon={faCircleExclamation} /></td>
              </tr>
              <tr>
                <td>Dec 03, Sun </td><span style={{ background: "#ff9d09", color: "white", margin: "-20px", borderRadius: "5px", fontSize: "12px", padding: "2px" }}>W-OFF</span>
                <td></td>
                <td>Full day weekly-off</td>
                <td ></td>
                <td ></td>
                <td></td>
                <td ></td>
              </tr>
              <tr>
                <td>Dec 02, Sat</td>
                <td><FontAwesomeIcon icon={faBarsProgress} /></td>
                <td><FontAwesomeIcon icon={faChartPie} /> 8h 59m</td>
                <td >9h 59m</td>
                <td >0h 30m</td>
                <td><FontAwesomeIcon icon={faFaceSmile} /> </td>
                <td ><FontAwesomeIcon icon={faCircleCheck} /></td>
              </tr>
              <tr>
                <td>Dec 01, Fri</td>
                <td><FontAwesomeIcon icon={faBarsProgress} /></td>
                <td><FontAwesomeIcon icon={faChartPie} /> 8h 59m</td>
                <td >9h 59m</td>
                <td >1h 30m</td>
                <td>0h 30m late</td>
                <td ><FontAwesomeIcon icon={faHourglassHalf} /></td>
              </tr>
              <tr>
                <td>Nov 30, Thu</td><span style={{ background: "purple", color: "white", margin: "-20px", borderRadius: "5px", fontSize: "12px", padding: "2px" }}>Leave</span>
                <td></td>
                <td>Sick leave</td>
                <td ></td>
                <td ></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
