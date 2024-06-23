import React from 'react'
import "./Sidebar.css";
import { IoInformationCircleOutline } from 'react-icons/io5';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdOutlineWeb } from 'react-icons/md';
import { FaCloudDownloadAlt, FaRegSave } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
export default function Modal(props) {

  return (
    <div className='overlay'>
      <div className='modal-container'>
        <IoIosCloseCircleOutline className='closeBtn' onClick={props.toggleOpen} />
        <div className='list'>
          <div className='listItem'>
            <IoInformationCircleOutline />
            <span>Info</span>
          </div>
          <div className='listItem'>
            <HiOutlineWrenchScrewdriver />
            <span>Driver</span>
          </div>
          <div className='listItem'>
            <MdOutlineWeb />
            <span>Web / Mobile</span>
          </div>
          <div className='listItem'>
            <FaRegSave />
            <span>Save</span>
          </div>
          <div className='listItem'>
            <FaCloudDownloadAlt />
            <span>Download</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}
