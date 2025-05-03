import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BannerOne = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-green-600 to-lime-500 py-4">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="flex flex-col justify-center items-center text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl lg:text-5xl text-center font-bold text-white mt-4 leading-tight">
            Pakan Ramah Lingkungan
            <br className="hidden lg:block" /> dari Limbah Agro-Maritim
          </h2>
          <p className="text-white text-lg mt-4">
            Solusi bernutrisi tinggi dan berkelanjutan untuk peternak mikro
            hingga UMKM.
          </p>
          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 mt-8 px-10 py-4 hover:ring-2 hover:ring-white hover:ring-opacity-50 text-lg font-semibold rounded-full bg-white text-green-700 hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
          >
            <ArrowRight className="mr-2" size={24} /> Belanja Sekarang
          </Link>
        </div>
        <div className="relative lg:w-1/2 lg:mt-0">
          <div className="rounded-xl overflow-hidden relative w-[20rem] lg:w-[30rem] h-[15rem] lg:h-[25rem]">
            {/* <Image
              src="/images/banner/agrofeed-product.png"
              className="object-contain"
              fill
              alt="Produk Pakan AgroMarFeed"
            /> */}
          </div>
          <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center animate-blob1">
            <div className="w-24 h-24 bg-white rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
