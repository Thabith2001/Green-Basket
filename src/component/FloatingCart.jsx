import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // if using React Router

const FloatingCart = () => {
    return (
        <Link
            to="/cart"
            className="fixed bottom-6 right-6 bg-green-700 hover:bg-green-800 text-white p-4 rounded-full shadow-lg z-50"
        >
            <div className="relative">
                <FaShoppingCart className="text-xl" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          3
        </span>
            </div>
        </Link>
    );
};

export default FloatingCart;