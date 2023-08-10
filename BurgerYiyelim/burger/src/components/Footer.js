import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='social-media'>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <YouTubeIcon/>
        </div>
        <p>Tüm hakları saklıdır. | Burger Yiyelim</p>
    </div>
  )
}
