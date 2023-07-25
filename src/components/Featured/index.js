import React, { useEffect, useState } from 'react'
import FeatureBg from '../../assets/Featured in bg.png'
import Frame4 from '../../assets/Featured r1 1.png'
import Frame3 from '../../assets/Featured r1 2.png'
import Frame2 from '../../assets/Featured r1 3.png'
import Frame1 from '../../assets/Featured r1 4.png'
import Frame5 from '../../assets/Featured r2 5.png'
import Frame6 from '../../assets/Featured r2 4.png'
import Frame7 from '../../assets/Featured r2 3.png'
import Frame8 from '../../assets/Featured r2 2.png'
import Frame9 from '../../assets/Featured r2 1.png'

const Featured = () => {

  const images1 = [Frame1, Frame2, Frame3, Frame4]
  const [currentIndex1, setCurrentIndex1] = useState(0);

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      if(currentIndex1 === images1.length - 1) {
        setCurrentIndex1(0);
      } 
      else {
        setCurrentIndex1(currentIndex1 + 1);
      }
    }, 1500)
    
    return () => clearInterval(intervalId1);
  })

  const images2 = [Frame5, Frame6, Frame7, Frame8, Frame9]
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const intervalId2 = setInterval(() => {
      if(currentIndex2 === images2.length - 1) {
        setCurrentIndex2(0);
      } 
      else {
        setCurrentIndex2(currentIndex2 + 1);
      }
    }, 1500)
    
    return () => clearInterval(intervalId2);
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
      overflow: 'hidden',
    }}>
      <h1 style={{
        color: 'white',
        position: 'relative',
        fontSize: '50px',
        fontWeight: '600',
        textTransform: 'uppercase',
        marginTop: '40px',
      }}>Featured In</h1>
      <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
        <img src={images1[currentIndex1]} alt='frame' style={{width: '90%'}} />
        <img src={images2[currentIndex2]} alt='frame' style={{width: '90%'}} />
      </div>
    </div>
  )
}

export default Featured