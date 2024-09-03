import React from 'react'
import './Footer.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import facebook_light from '../../assets/facebook-b.png'
import facebook_dark from '../../assets/facebook-w.png'
import instagram_light from '../../assets/instagram-b.png'
import instagram_dark from '../../assets/instagram-w.png'
import twitter_light from '../../assets/twitter-b.png'
import twitter_dark from '../../assets/twitter-w.png'

const Footer = ({ theme, setTheme }) => {
    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }
    return (
        <div className={`footer ${theme}`}>
            <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className='logo' />
            <h1>@mystore</h1>
            <div className='social-icons'>
                <img className='facebook' src={theme === 'light' ? facebook_light : facebook_dark} alt="Facebook" />
                <img className='instagram' src={theme === 'light' ? instagram_light : instagram_dark} alt="Instagram" />
                <img className='twitter' src={theme === 'light' ? twitter_light : twitter_dark} alt="Twitter" />
            </div>
        </div>
    )
}
export default Footer
