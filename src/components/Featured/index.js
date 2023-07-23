import React, { useEffect, useState } from 'react'
import FeatureBg from '../../assets/Featured in bg.png'
import Frame4 from '../../assets/Featured r1 1.png'
import Frame3 from '../../assets/Featured r1 2.png'
import Frame2 from '../../assets/Featured r1 3.png'
import Frame1 from '../../assets/Featured r1 4.png'

const Featured = () => {

  const images = [Frame1, Frame2, Frame3, Frame4]
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } 
      else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 2000)
    
    return () => clearInterval(intervalId);
  })

  return (
    <div className='featuredIn' style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundImage: `url('${FeatureBg}')`,
      height: '100vh',
      width: '100%',
      backgroundRepeat: 'no-repeat',
    }}>
      <h1 style={{
        color: 'white',
        position: 'relative',
        fontSize: '50px',
        fontWeight: '600',
        textTransform: 'uppercase',
        marginTop: '40px',
      }}>Featured In</h1>

      <img src={images[currentIndex]} alt='frame' style={{width: '90%'}} />
    </div>
  )
}

export default Featured