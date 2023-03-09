import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='header'>
            <div className='firstHalf'>
                <div className='logo'>
                    <svg width="223" height="104" viewBox="0 0 223 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M120.355 59.8788C120.355 60.5911 120.229 61.3554 119.976 62.1716C119.739 62.9879 119.338 63.7447 118.774 64.4422C118.225 65.1397 117.505 65.7259 116.615 66.2008C115.725 66.6608 114.634 66.8909 113.343 66.8909H91.3716C90.9561 66.8909 90.5702 66.8167 90.2141 66.6683C89.8579 66.5199 89.5463 66.3195 89.2791 66.0672C89.0268 65.8001 88.8265 65.4885 88.6781 65.1323C88.5297 64.7761 88.4555 64.3903 88.4555 63.9747V37.8854C88.4555 37.4847 88.5297 37.1063 88.6781 36.7501C88.8265 36.3939 89.0268 36.0823 89.2791 35.8152C89.5463 35.548 89.8579 35.3403 90.2141 35.1919C90.5702 35.0435 90.9561 34.9693 91.3716 34.9693H110.738C111.451 34.9693 112.215 35.0954 113.031 35.3477C113.847 35.6 114.604 36.0081 115.302 36.572C116.014 37.1211 116.6 37.8409 117.06 38.7313C117.535 39.6217 117.773 40.7125 117.773 42.0036V43.0944C117.773 44.1183 117.602 45.2239 117.261 46.4112C116.919 47.5836 116.37 48.6966 115.613 49.7503C116.266 50.1509 116.875 50.6333 117.439 51.1972C118.017 51.7611 118.522 52.4141 118.952 53.1561C119.383 53.8981 119.724 54.7366 119.976 55.6716C120.229 56.6065 120.355 57.6379 120.355 58.7658V59.8788ZM114.567 58.7658C114.567 58.0089 114.448 57.3337 114.211 56.7401C113.973 56.1316 113.64 55.6122 113.209 55.1818C112.779 54.7515 112.259 54.425 111.651 54.2024C111.043 53.9649 110.36 53.8462 109.603 53.8462H96.5583V48.0139H106.999C107.755 48.0139 108.438 47.9026 109.046 47.68C109.655 47.4426 110.174 47.1087 110.605 46.6783C111.035 46.2479 111.362 45.7359 111.584 45.1423C111.822 44.5339 111.94 43.8512 111.94 43.0944V42.0036C111.94 41.1725 111.54 40.757 110.738 40.757H94.2432V61.1031H113.343C113.447 61.1031 113.573 61.0957 113.721 61.0809C113.87 61.066 114.003 61.0215 114.122 60.9473C114.241 60.8731 114.344 60.747 114.434 60.5689C114.523 60.3908 114.567 60.1459 114.567 59.8343V58.7658Z" fill="white" />
                        <path d="M162.561 66.8909H156.729V47.8804L146.466 65.9337C146.214 66.3937 145.858 66.7425 145.398 66.9799C144.953 67.2174 144.47 67.3361 143.951 67.3361C143.446 67.3361 142.972 67.2174 142.526 66.9799C142.096 66.7425 141.755 66.3937 141.502 65.9337L131.196 47.8804V66.8909H125.408V37.4402C125.408 36.7724 125.601 36.1788 125.987 35.6593C126.387 35.1399 126.907 34.7912 127.545 34.6131C127.857 34.5389 128.168 34.5166 128.48 34.5463C128.792 34.5612 129.088 34.6279 129.37 34.7467C129.667 34.8505 129.934 35.0064 130.172 35.2141C130.409 35.4071 130.61 35.6445 130.773 35.9265L143.951 58.8326L157.129 35.9265C157.471 35.3625 157.938 34.9618 158.532 34.7244C159.14 34.487 159.771 34.4499 160.424 34.6131C161.047 34.7912 161.559 35.1399 161.96 35.6593C162.36 36.1788 162.561 36.7724 162.561 37.4402V66.8909ZM193.369 58.9216C193.369 59.723 193.228 60.5911 192.946 61.5261C192.664 62.4462 192.204 63.3069 191.566 64.1083C190.943 64.8948 190.119 65.5552 189.095 66.0895C188.086 66.6237 186.854 66.8909 185.4 66.8909H174.96C174.159 66.8909 173.29 66.7499 172.355 66.4679C171.435 66.186 170.575 65.7333 169.773 65.11C168.987 64.4719 168.326 63.6483 167.792 62.6391C167.258 61.6151 166.991 60.376 166.991 58.9216C166.991 58.1202 167.132 57.2521 167.414 56.3171C167.696 55.3822 168.148 54.5214 168.772 53.7349C169.41 52.9335 170.233 52.2657 171.242 51.7314C172.266 51.1972 173.506 50.9301 174.96 50.9301H185.4V56.4507H174.96C174.173 56.4507 173.565 56.6955 173.135 57.1853C172.704 57.6602 172.489 58.2538 172.489 58.9661C172.489 59.723 172.734 60.3166 173.224 60.747C173.728 61.1625 174.322 61.3703 175.004 61.3703H185.4C186.187 61.3703 186.795 61.1328 187.225 60.6579C187.656 60.183 187.871 59.5894 187.871 58.8771V50.7965C187.871 50.0396 187.634 49.4386 187.159 48.9934C186.699 48.5482 186.112 48.3256 185.4 48.3256H172.689V42.8272H185.4C186.202 42.8272 187.062 42.9682 187.982 43.2502C188.917 43.5321 189.778 43.9922 190.565 44.6303C191.366 45.2536 192.034 46.0773 192.568 47.1013C193.102 48.1104 193.369 49.3421 193.369 50.7965V58.9216ZM204.188 37.8854H198.4V32.6542H204.188V37.8854ZM204.188 66.8909H198.4V42.8272H204.188V66.8909ZM220.327 66.8909H217.745C216.914 66.8909 216.023 66.7499 215.073 66.4679C214.138 66.186 213.263 65.7259 212.447 65.0878C211.63 64.4348 210.955 63.5963 210.421 62.5723C209.887 61.5335 209.62 60.2647 209.62 58.7658V32.6542H215.407V58.7658C215.407 59.4781 215.63 60.0495 216.075 60.4798C216.52 60.8954 217.077 61.1031 217.745 61.1031H220.327V66.8909Z" fill="url(#paint0_linear_78_1123)" />
                        <path d="M56.8434 34.4251C60.3793 32.3836 64.7991 34.9354 64.7991 39.0183L64.7991 64.9804C64.7991 69.0632 60.3793 71.6151 56.8434 69.5736L34.3596 56.5926C30.8237 54.5512 30.8237 49.4475 34.3596 47.4061L56.8434 34.4251Z" fill="url(#paint1_linear_78_1123)" stroke="#0A0A0A" stroke-width="3.50254" />
                        <path d="M52.8032 30.9065C60.3865 26.5283 69.8656 32.001 69.8656 40.7574L69.8656 63.2426C69.8656 71.999 60.3865 77.4717 52.8032 73.0935L33.3305 61.851C25.7472 57.4728 25.7472 46.5273 33.3305 42.1491L52.8032 30.9065Z" stroke="white" stroke-width="2.33503" />
                        <defs>
                            <linearGradient id="paint0_linear_78_1123" x1="227.086" y1="36.3909" x2="98.2912" y2="81.7807" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#36D1DC" />
                                <stop offset="1" stop-color="#5B86E5" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_78_1123" x1="86.2964" y1="54.9995" x2="29.6999" y2="32.6894" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#36D1DC" />
                                <stop offset="1" stop-color="#5B86E5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className='navs'>
                    <Link to="/" className='link'>ABOUT</Link>
                    <Link to="/" className='link'>TEAM</Link>
                    <Link to="/contact" className='link'>CONTACT US</Link>
                    <Link to="/" className='link'>BLOGS</Link>
                </div>
            </div>
            <div className='lastHalf'>
                <Link to="/signin" className='link'>SIGN IN</Link>
                <Link to="/signup">
                    <button className='signupbtn link'>SIGN UP NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Header