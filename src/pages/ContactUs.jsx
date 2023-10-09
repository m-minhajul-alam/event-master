import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";


const ContactUs = () => {
    return (
        <div className="text-center">

            <div className="bg-blue-950 h-20">
                <h1 className="text-white text-3xl text-center font-bold pt-3">Contact Information</h1>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Office Address:</h3>
                    <p className="text-gray-600">123 Main Street, Suite 456</p>
                    <p className="text-gray-600">City, State, ZIP</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Phone:</h3>
                    <p className="text-gray-600">+123-456-7890</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Email:</h3>
                    <p className="text-gray-600">info@eventmaster.com</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
                <div className="mb-4">
                    <p className="text-gray-600">
                        Our office is open during the following hours:
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600">
                        Saturday: 10:00 AM - 2:00 PM
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600">
                        Sunday: Closed
                    </p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
                <div className="mb-4">
                    <p className="text-gray-600">
                        Stay connected with us on social media for updates and news:
                    </p>
                </div>
                <div className="flex justify-center space-x-4">
                    <a href="facebook.com" className="text-blue-900 hover:text-blue-950 transition duration-300"> <FaFacebook></FaFacebook> </a>
                    <a href="twitter.com" className="text-blue-900 hover:text-blue-950 transition duration-300"> <FaTwitter></FaTwitter> </a>
                    <a href="instagram.com" className="text-blue-900 hover:text-blue-950 transition duration-300"> <FaInstagram></FaInstagram> </a>
                    <a href="linkedin.com" className="text-blue-900 hover:text-blue-950 transition duration-300"> <FaLinkedin></FaLinkedin> </a>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Privacy Policy and Terms of Service</h2>
                <div className="mb-4">
                    <p className="text-gray-600">
                        Please review our <Link to="/privacyPolicy" className="text-blue-900 hover:underline">Privacy Policy</Link> for information on how we collect, use, and protect your data.
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600">
                        By using our services, you agree to our <Link to="/termsOfService" className="text-blue-900 hover:underline">Terms of Service</Link>.
                    </p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Contact Information for Departments</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Sales Department:</h3>
                    <p className="text-gray-600">Email: sales@eventmaster.com</p>
                    <p className="text-gray-600">Phone: +123-456-7890</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Support Department:</h3>
                    <p className="text-gray-600">Email: support@eventmaster.com</p>
                    <p className="text-gray-600">Phone: +123-456-1234</p>
                </div>
            </div>

            <div className="bg-blue-950 py-1">
                <div className="max-w-6xl w-[90%] mx-auto my-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white text-center">Our Team</h2>
                    <p className="text-white mb-10">
                        Our full team information is <Link to="/about" className="text-blue-300 hover:underline">HERE</Link>.
                    </p>
                    <div className="flex items-center">
                        <Marquee>
                            <img className="rounded-full bg-black mr-7 mx-auto h-64" src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1670513031775Jhankar-Mahbub.png" alt="" />
                            <img className="rounded-full bg-black mr-7 mx-auto h-64" src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703407535MD%20GIAS%20UDDIN.png" alt="" />
                            <img className="rounded-full bg-black mr-7 mx-auto h-64" src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703442589Azizul%20Islam%20Milton.png" alt="" />
                            <img className="rounded-full bg-black mr-7 mx-auto h-64" src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703483310Shakil%20Ahmed%20Atik.png" alt="" />
                            <img className="rounded-full bg-black mr-7 mx-auto h-64" src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703563187Md.%20Mehedi%20Hasan.png" alt="" />
                            <img className="rounded-full bg-black mr-7 mx-auto h-64" src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703568999Rokibul%20Hasan%20Rokib.png" alt="" />
                            <img className="rounded-full bg-black mr-7 mx-auto h-64" src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703672273Awlad%20Hossain.png" alt="" />
                            <img className="rounded-full bg-black mr-7 mx-auto h-64" src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703871101Mohd.%20Mehedi%20Hasan%20Sagar.png" alt="" />
                            <img className="rounded-full bg-black mr-7 mx-auto h-64" src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703372225Mezbaul%20Abedin%20Forhan.png" alt="" />
                        </Marquee>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;