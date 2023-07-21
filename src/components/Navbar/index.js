import React from 'react'
import Logo from '../../assets/Logo.png'
import NavArrow from '../../assets/NavArrow.png'

const Navbar = () => {
  return (
    <nav className="navbar" style={{
        backgroundColor: 'black',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 50px',
    }} >
        <img src={Logo} alt="Logo" style={{
            height: '50px',
        }} />
        <div className='navSection' style={{display: 'flex', flexDirection: 'row'}}>
            <div className='navItem'>
                ABOUT
            </div>
            <div className='navItem'>
                CONTACT
            </div>
            <div className='navItem'>
                LOGIN  <img src={NavArrow} alt="Arrow" style={{height: '12px', marginLeft: '5px'}} />
            </div>
            <div className='navItem'>
                READ OUR DOCS  <img src={NavArrow} alt="Arrow" style={{height: '12px', marginLeft: '5px'}} />
            </div>
            <div className='navItem navStart' style={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(to right, #f20b88, #952FC5, #3A83F0) 1',
                borderRadius: '50px',
                padding: '5px 10px',
            }} >
                GET STARTED  <img src={NavArrow} alt="Arrow" style={{height: '12px', marginLeft: '5px'}} />
            </div>
        </div>
    </nav>
  )
}

export default Navbar