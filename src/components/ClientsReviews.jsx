import Marquee from "react-fast-marquee";

const ClientsReviews = () => {
    return (
        <div className="bg-blue-950 py-1">
            <div className="max-w-6xl w-[90%] mx-auto my-16">
                <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-10">Client's Reviews</h2>

                <div>
                    <Marquee pauseOnHover={true}>
                        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-80 h-36 mr-10 ">
                            <p className="text-blue-950 font-semibold underline mb-2">John Smith</p>
                            <p className="text-blue-900 mb-4">
                                "EventMaster exceeded our expectations, and our conference was a tremendous success."
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-80 h-36 mr-10">
                            <p className="text-blue-950 font-semibold underline">Jane Doe</p>
                            <p className="text-blue-900 mb-4">
                                "The award ceremony organized by EventMaster was elegant and memorable. Kudos to the team!"
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-80 h-36 mr-10">
                            <p className="text-blue-950 font-semibold underline">Mark Johnson</p>
                            <p className="text-blue-900 mb-4">
                                "Our product launch event was a resounding success, thanks to EventMaster's expertise."
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-80 h-36 mr-10">
                            <p className="text-blue-950 font-semibold underline">Sarah Anderson</p>
                            <p className="text-blue-900 mb-4">
                                "EventMaster turned our vision into a reality. The attention to detail was impeccable!"
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-80 h-36 mr-10">
                            <p className="text-blue-950 font-semibold underline">David Patel</p>
                            <p className="text-blue-900 mb-4">
                                "Effortless planning, seamless execution. EventMaster made our event stress-free!"
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-80 h-36 mr-10">
                            <p className="text-blue-950 font-semibold underline">Emily Davis</p>
                            <p className="text-blue-900 mb-4">
                                "Highly professional and creative team. Our product launch was a massive success!"
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-80 h-36 mr-10">
                            <p className="text-blue-950 font-semibold underline">Robert Lewis</p>
                            <p className="text-blue-900 mb-4">
                                "EventMaster took our conference to the next level. Outstanding job!"
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-80 h-36 mr-10">
                            <p className="text-blue-950 font-semibold underline">Laura Turner</p>
                            <p className="text-blue-900 mb-4">
                                "Exquisite decor, impeccable timing. Our award ceremony was a night to remember!"
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-80 h-36 mr-10">
                            <p className="text-blue-950 font-semibold underline">Michael Adams</p>
                            <p className="text-blue-900 mb-4">
                                "Team-building workshops were a hit! Thanks to EventMaster for boosting our team's morale."
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-80 h-36 mr-10">
                            <p className="text-blue-950 font-semibold underline">Jennifer Smithn</p>
                            <p className="text-blue-900 mb-4">
                                "Exceptional service from start to finish. Our trade show booth was a crowd-puller!"
                            </p>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default ClientsReviews;