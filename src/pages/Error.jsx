import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-950 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-center text-blue-950 mb-4">
                The page you are looking for may have been <br /> moved or does not exist.</p>
            <Link to="/" className="btn text-blue-950 hover:underline">Go To Home</Link>
        </div>
    );
};

export default Error;