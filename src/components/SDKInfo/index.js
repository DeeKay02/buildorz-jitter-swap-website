import React from 'react'
import ETH from '../../assets/eth.png'
import BTC from '../../assets/btc.png'
import Ethos from '../../assets/ethos.png'

const SDKInfo = () => {
  return (
    <div className='sdkInfo' style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        <div className='sdkInfoHeading' style={{
            fontSize: '60px',
            color: 'white',
            fontWeight: '600',
            marginTop: '70px',
            textAlign: 'center',
        }}>
            Build dynamic NFTs using<br/> the <span style={{
                background: 'linear-gradient(124deg, #F20B88 0%, rgba(149, 47, 197, 0.97) 45.91%, rgba(58, 131, 240, 0.96) 71.93%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>Jitterswap</span> SDK
        </div>
        <div className='properties' style={{
            display: 'grid',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <div className='tps sdk' style={{
                    background: 'rgba(48, 25, 37, 0.50)',
                }}>
                
                </div>
                <div className='storage sdk' style={{
                    background: 'rgba(33, 32, 46, 0.50)',
                }}></div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <div className='lib sdk' style={{
                    background: 'rgba(34, 45, 61, 0.54)',
                }}></div>
                <div className='m-chain sdk' style={{
                    background: 'rgba(34, 30, 30, 0.51)',
                }}></div>
            </div>
        </div>
    </div>
  )
}

export default SDKInfo