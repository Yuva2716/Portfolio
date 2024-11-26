import React,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './Sidebar'
import navimg from '../assets/AI-img-2.png'


const Navbar = () => {
    
    const [sidebarOpen,setSidebarOpen] = useState(false)
    const [active,setActive] = useState('')

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const handleClick = (id) =>{
        setActive(id)
    }
    
    

    
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid nav-cont-1">
                <Link to="/" className='text-light text-xs font-serif ...'>                                        
                    <img className='nav-img' src={navimg} alt="nav-img" /> Yuvaraj
                </Link>
                
                <h3 className='text-light float-end d-sm-none fs-2' onClick={toggleSidebar} ><GiHamburgerMenu /></h3>
                <div className="nav-item">
                    <ul>
                        <Link to='/'>
                            <li 
                                id='home'
                                className={`navbar-items ${active === 'home' ? 'active' : ''}`}
                                onClick={()=>handleClick('home')}
                                >Home</li>
                        </Link>
                        <Link to='/about'>
                            <li 
                                id='about'
                                className={`navbar-items ${active === 'about' ? 'active' : ''}`}
                                onClick={()=>handleClick('about')}
                            >About</li>
                        </Link>
                        <Link to='/skills'>
                            <li 
                                id='skill'                                
                                className={`navbar-items ${active === 'skill' ? 'active' : ''}`}
                                onClick={()=>handleClick('skill')}
                            >Skills</li>
                        </Link>
                        <Link to='/all-projects'>
                            <li 
                                id='project'
                                className={`navbar-items ${active === 'project' ? 'active' : ''}`}
                                onClick={()=>handleClick('project')}
                            >Projects</li>
                        </Link>
                        <Link to='/contact'>
                            <li
                                id='contact'
                                className={`navbar-items ${active === 'contact' ? 'active' : ''}`}
                                onClick={()=>handleClick('contact')}
                            >Contact</li>
                        </Link>                                                                                                                                 
                    </ul>
                </div>
            </div>
        </nav>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default Navbar