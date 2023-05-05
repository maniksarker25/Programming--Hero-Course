import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import reader from "../assets/reader.json";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-6 mx-auto lg:max-w-screen-xl mt-24">
      <div className="lg:w-1/2 mt-12">
        <div>
          <p className="badge">
            On Sale!
          </p>
        </div>
        <h2 className="font-bold text-gray-900 text-3xl md:text-4xl mb-4">
          A reader lives a <br className="hidden md:block" /> thousand lives{" "}
          <span className="inline-block text-blue-400">before he dies</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all.The man who
          does not read good books is no better than the man who can’t.
        </p>
        <div className="mt-8 flex flex-col items-center lg:flex-row">
          <Link to="/books" className="btn md:w-auto md:mr-4 mb-3 lg:mb-0">
            <div className="inline-flex items-center justify-center h-full w-full px-6 py-3 rounded-md bg-blue-400 hover:bg-blue-600 transition-colors duration-200 text-gray-100 font-semibold">
              <p className="mr-3">Visit Store</p>
              <ShoppingCartIcon className="w-5"></ShoppingCartIcon>
            </div>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="w-full lg:w-4/5 h-56 sm-h-96 lg:ml-auto">
          <Lottie animationData={reader} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Home;
