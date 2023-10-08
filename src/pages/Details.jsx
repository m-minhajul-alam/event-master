import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const [card, setCard] = useState({})
    const { name, overview, description, features, process, image, email, phone, price, casestudy } = card
    const cards = useLoaderData()
    const { id } = useParams()



    useEffect(() => {
        if (cards) {
            const findCard = cards.find(card => card.id === id)
            setCard(findCard)
        }
    }, [id, cards])

    return (
        <div>
            <div className="bg-blue-950 h-20">
                <h1 className="text-white text-3xl text-center font-bold pt-3">Service Details</h1>
            </div>
            <div className="max-w-6xl w-[90%] mx-auto text-blue-950 mt-3">
                <div className="flex flex-col lg:flex-row mb-10 gap-7">
                    <img className="h-full shadow-2xl rounded" src={image} alt="" />
                    <div>
                        <h1 className="text-4xl font-bold mb-5">{name}</h1>
                        <h5 className="text-xl font-bold mb-2">Overview:</h5>
                        <p className="text-sm  mb-4">{overview}</p>
                        <h5 className="text-xl font-bold mb-2">Description:</h5>
                        <p className="text-sm  mb-4">{description}</p>
                        <h5 className="text-xl font-bold mb-2">Features:</h5>
                        <p className="text-sm  mb-4">{features}</p>
                        <h5 className="text-xl font-bold mb-2">Process:</h5>
                        <p className="text-sm  mb-4">{process}</p>
                        <h5 className="text-xl font-bold mb-2">Casestudy:</h5>
                        <p className="text-sm  mb-4">{casestudy}</p>
                        <h5 className="text-xl font-bold mb-2">Contact us:</h5>
                        <p className="text-sm">{email}</p>
                        <p className="text-sm  mb-4">{phone}</p>
                        <h5 className="text-xl font-bold">Price: <span className="font-normal"> {price}$/day</span></h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;