import React, { useContext } from 'react'
import {GiArcingBolt} from 'react-icons/gi'
import {MdSunny} from 'react-icons/md'
import {BiMoon} from 'react-icons/bi'
import { ThemeContext } from '../../context/ThemeContext'
import {BsSearch} from 'react-icons/bs'
const MainNav = () => {
    const {theme,setTheme}= useContext(ThemeContext);
  return (
    <div className='flex items-center justify-between px-3 py-4 dark:bg-g-900 w-4/5 m-auto' >
        <div className='flex items-center justify-around gap-8'>

        <div className='flex items-center gap-3'>
            <div><GiArcingBolt className="text-4xl text-blue-700" /></div>
            <div className='text-4xl font-bold dark:text-white'>Bolo India</div>
        </div>
        <div>
            <div>
                <ul className='flex gap-8 text-xl dark:text-white'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Blogs</a></li>
                    <li>Categories</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
        </div>
        <div>
            <div className='flex items-center gap-4 dark:text-white'>
               {!theme? <MdSunny onClick={()=>setTheme(!theme)} className='text-lg animate-spin cursor-pointer'/>
               : <BiMoon  onClick={()=>setTheme(!theme)} className='text-lg animate-bounce cursor-pointer'/>
           } 
           <BsSearch className='text-lg cursor-pointer'/>
           </div>
        </div>
    </div>
  )
}

export default MainNav