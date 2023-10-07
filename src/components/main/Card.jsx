import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, name, overview, image, price, features } = card;

    return (
        <div className="flex flex-col lg:flex-row items-center max-w-4xl mx-auto rounded-lg text-blue-950 gap-5 border-2 border-blue-950 mb-3">
            <img className="w-full lg:w-[350px] rounded-md" src={image} alt="" />
            <div className="p-4 space-y-2">
                <h4 className="text-2xl lg:text-3xl font-bold">{name}</h4>
                <p className="text-xs md:text-sm"><span className="font-bold">Overview:</span> {overview}</p>
                <p className="text-xs md:text-sm"><span className="font-bold">Features:</span> {features}</p>
                <div className="flex justify-between items-center mt-5">
                    <p className="text-lg text-yellow-500 font-bold">{price}$ <span className="text-sm text-blue-950 font-normal">/day</span></p>
                    <button className="btn btn-primary text-xs py-0 bg-blue-950 text-white hover:bg-black">
                        <Link to={`/details/${id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Card;