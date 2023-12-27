import React from "react";
import '../Footer/Footer.css'
import { BsSendCheck } from "react-icons/bs";
import Line from '../image/Line.png'
import { MdPhoneInTalk } from "react-icons/md";
import { FaYoutube, FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="SectionFooter">

            <div className="DivFooterContainer">
                <div className="DivMinContaier">
                    <h2>Title of section</h2>
                    <ul>
                        <li>
                            <a href="#">Page title</a>
                        </li>
                        <li>
                            <a href="#">Page title</a>
                        </li>
                        <li>
                            <a href="#">Page title</a>
                        </li>
                    </ul>
                </div>

                <div className="DivMinContaier">
                    <h2>Title of section</h2>
                    <ul>
                        <li>
                            <a href="#">Page title</a>
                        </li>
                        <li>
                            <a href="#">Page title</a>
                        </li>
                        <li>
                            <a href="#">Page title</a>
                        </li>
                    </ul>
                </div>

                <div className="DivMinContaier">
                    <h2>Title of section</h2>
                    <ul>
                        <li>
                            <a href="#">Page title</a>
                        </li>
                        <li>
                            <a href="#">Page title</a>
                        </li>
                        <li>
                            <a href="#">Page title</a>
                        </li>
                    </ul>
                </div>

                <div className="DivMinContaier">
                    <h3>Subscribe to Newsletter</h3>
                    <p>Your email</p>
                    <textarea name="Hellos" id="" cols="30" rows="10"></textarea><button><BsSendCheck /></button>
                </div>
            </div>

            <div className="PoloskaBootom"><img src={Line} alt="Delete" /></div>

            <div className="MinContainer">
                <div className="FooterMin">
                    <h1>Your.<span>logo</span></h1>
                    <p>Design by <span>Delvig</span></p>
                    <div className="minDivFooter">
                    <MdPhoneInTalk/>
                    <FaFacebook/>
                    <FaYoutube/>
                    <FaInstagramSquare/>
                    <FaTelegram/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;