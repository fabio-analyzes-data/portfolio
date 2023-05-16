import React, {useState, useEffect} from 'react'
import { Link, NavLink} from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import {logo, menu, close} from "../assets"

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toogle, setToogle] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={()=>{
            setActive("")
            window.scrollTo(0,0)
          }}
        >
          <img src={logo} alt="logo" className='w-16 h-16 object-fill mr-10'/>
          <p className='text-white text-[22px] font-bold cursor-pointer '>Fabio&nbsp;<span className="sm:block hidden">|Data Analysis</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(link=>(
            <li
              key={link.id}
              className={`${
                active===link.title
                ? "text-white"
                : 'text-secondary'
              } hover:text-white text-[22px] font-medium cursor-pointer` }
              onClick={()=>{
                setActive(link.title)
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu*/}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toogle?close:menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={()=>{
              setToogle(!toogle)
            }}
          />
          <div className={`${!toogle?'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(link=>(
                <li
                  key={link.id}
                  className={`${
                    active===link.title
                    ? "text-white"
                    : 'text-secondary'
                  } font-medium cursor-pointer text-[18px]` }
                  onClick={()=>{
                    setToogle(!toogle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar