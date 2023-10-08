import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import ClientsReviews from "../components/ClientsReviews";

const Home = () => {


    const cards = useLoaderData();

    return (
        <div>
            <Banner></Banner>


            {/* service section */}
            <div className="max-w-6xl w-[90%] mx-auto my-16">
                <div className="text-center text-blue-950">
                    <h3 className="mb-3 text-xl md:text-2xl lg:text-4xl font-bold">EventMaster's Services</h3>
                    <p className="mb-6 text-xs lg:text-base max-w-4xl mx-auto">At EventMaster, we offer a wide range of corporate event services to meet all your business needs. From Conferences and Seminars that inspire thought leadership to Trade Shows and Expos that drive industry engagement, we bring your vision to life. Our Team Building Workshops foster collaboration and creativity, while our Product Launches ignite excitement and anticipation. Explore our diverse services and let us elevate your corporate gatherings to exceptional heights.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
                    {
                        cards.map(card => <Card key={card.id} card={card}></Card>)
                    }
                </div>

            </div>
             <ClientsReviews></ClientsReviews>

        </div>
    );
};

export default Home;