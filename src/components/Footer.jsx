import { FaFacebook, FaTwitter, FaYoutube, } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Footer = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div>
            <footer data-aos="fade-up" data-aos-duration="1000" className="bg-blue-950 text-white">
                <div className="max-w-6xl mx-auto py-10 flex flex-col md:flex-row text-center md:text-start space-y-4 justify-between items-center">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p className="text-xl font-bold text-white mb-4"><span className="bg-yellow-500 text-blue-950 p-1 rounded">Event</span> Master</p>
                        <p>Event Master<br />Providing reliable service since 1992</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h3 className="footer-title text-white">Social</h3>
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://www.facebook.com/"><FaFacebook className='text-2xl'></FaFacebook></a>
                            <a href="https://www.twitter.com/"><FaTwitter className='text-2xl'></FaTwitter></a>
                            <a href="https://www.youtube.com/"><FaYoutube className='text-2xl'></FaYoutube></a>
                        </div>
                    </div>
                </div>
                <p className='text-center text-xs pb-5'>Copyright © 2023 - All right reserved by Event Master</p>
            </footer>


        </div>
    );
};

export default Footer;