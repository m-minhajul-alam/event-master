import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Card = ({ card }) => {
    const { id, name, overview, image, price, features } = card;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="rounded-lg text-blue-950 border-2 border-blue-950 mb-3">
            <img className="w-full rounded-md" src={image} alt="" />

            <div className="p-4">
                <div className="space-y-2 md:h-60">
                    <h4 className="text-2xl lg:text-3xl font-bold">{name}</h4>
                    <p className="text-xs md:text-base"><span className="font-bold">Overview:</span> {overview}</p>
                    <p className="text-xs md:text-base"><span className="font-bold">Features:</span> {features}</p>
                </div>
                <div className="flex justify-between items-center mt-5 grow">
                    <p className="text-lg text-yellow-500 font-bold">{price}$ <span className="text-sm text-blue-950 font-normal">/day</span></p>
                    <Link to={`/details/${id}`}> <button className="btn btn-primary text-xs bg-blue-950 text-white hover:bg-black grow-b">
                        View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;