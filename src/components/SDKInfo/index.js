import React from 'react'
import ETH from '../../assets/eth.png'
import BTC from '../../assets/btc.png'
import Ethos from '../../assets/ethos.png'
import Web3js from '../../assets/web3.js.png'
import NFT from '../../assets/nft.png'
import Layers from '../../assets/layers.png'
import Library from '../../assets/library.png'
import Chains from '../../assets/chains.png'
import NFTFill from '../../assets/NFTfill.png'
import ActionChains from '../../assets/action-chains.png'
import DocsArrow from '../../assets/docsArrow.svg'

const SDKInfo = () => {
  return (
    <div className='sdkInfo' style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#010101'
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
                    <img src={ETH} alt='ETH' className='sdk-img' style={{paddingLeft: '25px'}} />
                    <img src={BTC} alt='BTC' className='sdk-img' />
                    <img src={Ethos} alt='Ethos' className='sdk-img' />

                    <p className='sdk-in-text'>
                        Benchmarked at <span style={{
                            color: '#F874C1',
                            fontWeight: '700',
                        }}>40,000</span><br/> TPS
                    </p>
                </div>
                <div className='storage sdk' style={{
                    background: 'rgba(33, 32, 46, 0.50)',
                }}>
                    <img src={Layers} alt='layers' className='sdk-img' style={{paddingLeft: '25px'}} />
                    <img src={Web3js} alt='web3.js' className='sdk-img' />
                    <img src={NFT} alt='NFT' className='sdk-img' />

                    <p className='sdk-in-text'>
                        Works with Any <span style={{
                            color: '#A05BE5',
                            fontWeight: '700',
                        }}>Storage<br/>Layer</span>
                    </p>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <div className='lib sdk' style={{
                    background: 'rgba(34, 45, 61, 0.54)',
                }}>
                    <img src={Library} alt='Library' className='sdk-img' style={{paddingLeft: '25px'}} />
                    <img src={NFTFill} alt='NFT' className='sdk-img' />

                    <p className='sdk-in-text'>
                        <span style={{
                            color: '#7AADFC',
                            fontWeight: '700',
                        }}>Library</span> of Integrations
                    </p>
                </div>
                <div className='m-chain sdk' style={{
                    background: 'rgba(34, 30, 30, 0.51)',
                }}>
                    <img src={ActionChains} alt='action chains' className='sdk-img' style={{paddingLeft: '25px'}} />
                    <img src={Chains} alt='chains' className='sdk-img' />

                    <p className='sdk-in-text'>
                        Works Across <span style={{
                            color: '#DAB531',
                            fontWeight: '700',
                        }}>EVM Chains</span>
                    </p>
                </div>
            </div>
        </div>
        <div className='navStart' style={{
                borderWidth: '3px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(to right, #f20b88, #952FC5, #3A83F0) 1',
                borderRadius: '16px',
                color: 'white',
                padding: '20px 35px',
                fontSize: '25px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }} >
                Go to Docs <img src={DocsArrow} alt="Arrow" style={{height: '20px'}} />
            </div>
    </div>
  )
}

export default SDKInfo