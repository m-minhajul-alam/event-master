

const FAQs = () => {
    return (
        <div className="max-w-6xl w-[90%] mx-auto my-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-950 text-center mb-10">FAQs</h2>
            <div className="mb-10 space-y-4">
                <div className="collapse collapse-plus bg-base-200 border-2 border-blue-950">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What types of events do you specialize in?
                    </div>
                    <div className="collapse-content">
                        <p>We specialize in a wide range of corporate events, including conferences, trade shows, product launches, team building workshops, and more.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-base-200 border-2 border-blue-950">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How can I request a quote for an event?

                    </div>
                    <div className="collapse-content">
                        <p>You can request a quote by contacting our team via email at info@eventmaster.com or by calling +1 (123) 456-7890.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-base-200 border-2 border-blue-950">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Do you provide virtual event planning services?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we offer virtual event planning services to accommodate online and hybrid events. Our team can assist in planning and executing virtual conferences, webinars, and other digital events.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-base-200 border-2 border-blue-950">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What is the typical timeline for planning a corporate event?
                    </div>
                    <div className="collapse-content">
                        <p>The timeline for planning a corporate event can vary depending on its size and complexity. Generally, it's recommended to start planning at least 6-12 months in advance for large conferences and expos. Smaller events may require 3-6 months of preparation.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-base-200 border-2 border-blue-950">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can you handle events in multiple locations or countries?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we have experience in organizing events in various locations and even across international borders. Our global network of partners allows us to provide event planning services wherever your event needs to take place.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;