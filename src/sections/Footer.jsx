import React from 'react'
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <a className="text-purple-300 underline" href="https://wa.me/+2348130223684">Contact Me on WhatsApp</a>
                    <p>Or call @ +234813023684</p>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className="icon" target="_blank" href={img.url} key={img.name}>
                            <img src={img.imgPath} alt={img.name} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center md:items-start items-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Grace | Guru. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
