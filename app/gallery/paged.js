"use client";

import React, { useEffect, useState } from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Testimonials_2 from "@/components/Testimonial/Testimonials_2";
import Testimonials from "@/components/Testimonial/Testimonials";

const girl_pic = "/images/girl_sellar.jpg";
const girl_pic_2 = "/images/girl_sellar2.jpg";
const girl_pic_3 = "/images/girl_sellar3.jpg";

const girl_pic_list = [girl_pic, girl_pic_2];

function Page() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    let scrollY = 0;
    let isScrolling = false;

    const handleScroll = () => {
      scrollY = window.scrollY;
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          setIsBlurred(scrollY > 80); // Adjust threshold as needed
          isScrolling = false;
        });
        isScrolling = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="pt-20">
      <section
        className={`w-full fixed px-7 md:!pr-2 flex h-[calc(100vh-80px)] pb-20 transition-all duration-300 ${
          isBlurred ? "filter blur-sm" : ""
        }`}
      >
        <div className="w-3/5 flex flex-col justify-evenly gap-10 relative z-10 text-white">
          <h1 className="text-7xl md:text-5xl font-bold drop-shadow-lg">
            Your Digital Marketing and HubSpot Partner
          </h1>
          <p className="text-xl drop-shadow-md">
            We drive customer acquisition and growth for companies that want to
            be industry leaders.
          </p>
          <Link href="/about">
            <button className="flex justify-center items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg transition duration-300 hover:bg-green-700 w-full">
              <span className="font-semibold">About Our Store</span>
              <IoStorefrontOutline
                size={25}
                className="cursor-pointer hover:text-blue-300 transition duration-200"
              />
            </button>
          </Link>
        </div>
        <div className="w-2/5 h-full box-border relative rounded-full overflow-hidden ml-10 md:absolute md:w-[45%] md:right-0 md:shadow-3xl shadow-left-lg">
          {girl_pic_list.map((item, index) => (
            <Image
              key={index}
              alt="A seller showcasing perfumes"
              fill
              src={item}
              className="object-cover -z-10"
            />
          ))}
        </div>
      </section>

      <section className="flex rounded-t-[40px] relative z-10 p-5 mt-[100vh] flex-col justify-center items-center py-10 bg-white">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Why Choose Us for Your Perfume
        </h2>
        <p className="mb-8 text-lg text-center text-gray-600 max-w-2xl">
          At our store, we understand that a fragrance is more than just a
          scent—it's an expression of your personality and style. Our mission is
          to provide you with an unparalleled shopping experience, combining
          expert advice with a wide selection of high-quality perfumes. Whether
          you’re searching for a signature scent or a unique gift, we are here
          to guide you every step of the way.
        </p>
        <ul className="list-disc list-inside text-center flex flex-wrap justify-evenly gap-10 text-lg text-gray-600">
          <li className="mb-2 max-w-xs">
            <span className="font-semibold">Wide Selection:</span> A range of
            perfumes from top brands to niche scents.
          </li>
          <li className="mb-2 max-w-xs">
            <span className="font-semibold">Expert Advice:</span> Our staff
            helps you find your perfect fragrance.
          </li>
          <li className="mb-2 max-w-xs">
            <span className="font-semibold">Competitive Prices:</span> Great
            deals and exclusive offers await.
          </li>
          <li className="mb-2 max-w-xs">
            <span className="font-semibold">Easy Returns:</span> Hassle-free
            returns if you’re not satisfied.
          </li>
        </ul>
      </section>

      <section className="flex relative flex-col justify-center items-center bg-gray-200 py-10 p-4 text-center">
        <Testimonials />
      </section>
    </main>
  );
}

export default Page;
