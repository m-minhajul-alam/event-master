import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="bg-blue-950">
            <div
                className="max-w-6xl w-[90%] mx-auto flex flex-col md:flex-row justify-center items-center gap-10 py-8">
                <div data-aos="flip-right" data-aos-duration="1000">
                    <img className="md:w-52 lg:w-80 md:rounded-lg shadow-md shadow-white"
                        src={"https://i.ibb.co/RP4bQCq/banner-img.jpg"} alt="" />
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000"
                    className="flex-1 text-white text-center lg:text-start">
                    <h1 data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        className="mb-5 text-2xl md:text-4xl lg:text-6xl font-bold">
                        Corporate Events with "EventMaster"</h1>
                    <p data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        className="mb-5 text-xs lg:text-base">
                        Unlock the full potential of your corporate gatherings with EventMaster. From meticulous planning to flawless execution, we specialize in creating extraordinary corporate events that leave a lasting impression. Elevate your corporate events to new heights with EventMaster – where excellence meets innovation.
                    </p>
                    <Link to={"/register"}><button
                        className="btn btn-primary text-xs lg:text-base bg-white text-blue-950 border-none hover:border-none hover:bg-gray-400 hover:text-white mr-3">
                        Get Started</button></Link>
                    <Link to={"/contactUs"}><button
                        className="btn btn-primary text-xs lg:text-base bg-white text-blue-950 border-none hover:border-none hover:bg-gray-400 hover:text-white">
                        Contact Us</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;