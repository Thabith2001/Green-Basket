import React, {useEffect} from "react";


const Home = () => {

const [products, setProducts] = React.useState([]);


    useEffect(() => {
        return () => {
           fetch('http://localhost:3001/vegetables')
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.error('Error fetching products:', error))
        };
    }, []);



    return (
<main className=" bg-cover bg-fixed bg-center pt-20  text-gray-800"  style={{ backgroundImage: "url('/resource/veg1.jpg')" }}>
            <section className="font-light bg-gray-50 w-full h-fit relative  p-5 ">
                <div
                    className="bg-cover  bg-center  h-96 w-full flex flex-col justify-center items-center text-white text-center p-10 bg-gradient-to-r from-black/60 to-transparent "
                    style={{ backgroundImage: "url('/resource/veg2.jpg')"}}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 p-bordered">
                        Welcome to Green Basket
                    </h1>
                    <p className="text-xl mb-6">Fresh from the farm to your table</p>
                    <button className="font-bold bg-[#191919]/40 text-white px-6 py-3 rounded-lg hover:bg-[#191919]/80 transition">
                        Shop Now
                    </button>
                </div>
            </section>

            {/* Featured Products */}
    <section className="py-16 bg-gray-200/20 shadow-md mt-10">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12 text-gray-50 p-bordered">Featured Products</h2>
            <a href="/#viewAll" className=" flex justify-end items-center text-gray-100 font-light p-4">see all &#8594; </a>
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide ">
                {products.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow-md rounded-lg overflow-hidden p-2 w-64 hover:scale-105 transition-transform duration-300 snap-center flex-shrink-0 flex flex-col"
                    >
                        <div className="h-40 w-full overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-green-700 font-bold mt-1">
                                LKR {item.price} / kg
                            </p>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>

                            <button className="mt-auto bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded text-sm w-full">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

            {/* About Section */}
            <section className="  py-16" id="about">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-200 p-bordered">About Green Basket</h2>
                    <p className="text-gray-200 text-lg">
                        We’re committed to delivering the freshest produce directly from farm to table. Our network of local farmers ensures
                        the best quality vegetables at affordable prices. Whether you shop weekly or just for a few items, we’re here to make
                        it easy and healthy.
                    </p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-green-50/80 py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-10">What Our Customers Say</h2>
                    <div className="grid gap-10 md:grid-cols-3 text-gray-700">
                        {/*fetched from the database*/}
                        {[
                            "Best veggie delivery service I've tried! Super fresh and on time.",
                            "Easy to order and great prices. Highly recommend Green Basket!",
                            "I love supporting local farmers, and Green Basket makes it simple."
                        ].map((quote, idx) => (
                            <div key={idx} className="bg-white p-6 rounded shadow-md">
                                <p className="italic">“{quote}”</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Home;
