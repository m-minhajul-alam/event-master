import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import ClientsReviews from "../components/ClientsReviews";
import FAQs from "../components/FAQs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
    const cards = useLoaderData();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div>
            <Banner></Banner>
            <div data-aos="fade-up" data-aos-duration="1000" className="max-w-6xl w-[90%] mx-auto my-16"> {/* service section */}
                <div className="text-center text-blue-950">
                    <h3 className="mb-3 text-xl md:text-2xl lg:text-4xl font-bold">EventMaster's Services</h3>
                    <p className="mb-6 text-xs lg:text-base max-w-4xl mx-auto">At EventMaster, we offer a wide range of corporate event services to meet all your business needs. From Conferences and Seminars that inspire thought leadership to Trade Shows and Expos that drive industry engagement, we bring your vision to life. Our Team Building Workshops foster collaboration and creativity, while our Product Launches ignite excitement and anticipation. Explore our diverse services and let us elevate your corporate gatherings to exceptional heights.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
                    {
                        cards.map(card => <Card key={card.id} card={card}></Card>)
                    }
                </div>
            </div>
            <ClientsReviews></ClientsReviews>
            <FAQs></FAQs>
        </div>
    );
};

export default Home;