

const ClientsReviews = () => {
    return (

        <div className="bg-blue-950 py-1">
            <div className="max-w-6xl w-[90%] mx-auto my-16">
                <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-10">Client's Reviews</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                        <p className="text-blue-950 font-semibold underline mb-2">John Smith</p>
                        <p className="text-blue-900 mb-4">
                            "EventMaster exceeded our expectations, and our conference was a tremendous success."
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                        <p className="text-blue-950 font-semibold underline">Jane Doe</p>
                        <p className="text-blue-900 mb-4">
                            "The award ceremony organized by EventMaster was elegant and memorable. Kudos to the team!"
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                        <p className="text-blue-950 font-semibold underline">Mark Johnson</p>
                        <p className="text-blue-900 mb-4">
                            "Our product launch event was a resounding success, thanks to EventMaster's expertise."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsReviews;