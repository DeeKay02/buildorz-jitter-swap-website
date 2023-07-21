import React from 'react'
import Arrow from '../../assets/seedArrow.png'

const Hero = () => {
  return (
    <div className='hero' style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        <div className='stars'></div>
        <div className='twinkling'></div>
        <div className='seedBox' style={{
            textTransform: 'uppercase',
            color: '#808080',
            border: '1px solid #808080',
            width: '750px',
            textAlign: 'center',
            borderRadius: '30px',
            padding: '15px 0',
            fontSize: '14px',
            marginTop: '90px',
        }}>
            jitter swap raised $2.1M in seed round <img src={Arrow} alt="Arrow" style={{height: '12px', marginLeft: '5px'}} />
        </div>
        <div className='heroHeading' style={{
            fontSize: '60px',
            color: 'white',
            fontWeight: 'bold',
            marginTop: '70px',

        }}>
            Build <span style={{
                background: 'linear-gradient(to right, #F20B88, #952FC5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>More</span> Than JPEGs
        </div>
        <div className='heroDesc' style={{
            color: '#A0A0A0',
            fontSize: '22px',
            width: '700px',
            textAlign: 'center',
            marginTop: '50px',
        }}>
            JitterSwap offers a powerful back-end to program NFTs to interact with applications. utilities and data feeds. 
        </div>
    </div>
  )
}

export default Hero