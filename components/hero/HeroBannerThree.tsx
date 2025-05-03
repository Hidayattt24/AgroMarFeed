import Image from "next/image";
import React from "react";

const HeroBannerThree = () => {
  return (
    <section className="py-20 bg-green-900 dark:bg-green-100 text-white dark:text-gray-900">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:mr-8">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Pakan Inovatif, Lingkungan Produktif
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Jelajahi pilihan pakan ternak dan ikan ramah lingkungan dari limbah
            agro-maritim.
          </p>
          <button className="bg-lime-500 hover:bg-lime-600 text-white py-3 px-8 rounded-lg dark:bg-green-800 dark:hover:bg-green-700 transition duration-300">
            Lihat Produk
          </button>
        </div>
        <div className="relative h-[20rem] lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src={"/images/category/agrofeed-pakan.png"} // pastikan file ini ada
            alt="Pakan AgroMarFeed"
            fill
            className="w-full rounded-lg shadow-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBannerThree;
