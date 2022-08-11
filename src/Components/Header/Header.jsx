import React from 'react'
import menu from '../Images/menu.png';
import keep from '../Images/keep_2020q4_48dp.png';
import search from '../Images/search icon.png';
import refresh from '../Images/refresh.png';
import list1 from '../Images/list.png';
import setting from '../Images/setting icon.png';
import googleapps from '../Images/google aaps.png'
import account from '../Images/google account.jfif'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './Header.css';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';

function Header(props) {
  return (
    <div className='parent'>
        <div className="child1">
            {/* <img src={menu} alt="" className="imagenotes" /> */}
            <MenuOutlinedIcon onClick={props.listenToHeader}/>
            <img src={keep} alt="" className="imagenotes" />
            <div className='keep'>
                Keep
            </div>
        </div>
        
        <div className="searchbox">
            <div className="child2">
                {/* <img src={search} alt="" className="imagenotes1" /> */}
                <div className="searchicon"><SearchIcon/></div>
                <div className="inputsearch1"><input className='inputsearch' type="text" name="search" id="search" placeholder='search'/></div>
            </div>
        </div>
        
        <div className="child3">
            <RefreshIcon/>
            <div className="headerlist"><img src={list1} alt="" className="imagenotes" /></div>
            <SettingsOutlined/>

        </div>
        <div className="child4">
            {/* <img src={googleapps} alt="" className="imagenotes" /> */}
            <AppsOutlinedIcon/>
            {/* <img src={account} alt="" className="imagenotes" /> */}
            <AccountCircleOutlinedIcon/>
        </div>
    </div>
  )
}

export default Header
