import Image from "next/image";
import React from "react";

const BannerOne = () => {
  return (
    <section className="relative w-full bg-[#2B2A1E] py-12 overflow-hidden rounded-lg">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left: Product Images */}
        <div className="relative flex justify-center lg:justify-start items-center lg:w-1/2">
          {/* Gambar PROSIL */}
          <div className="relative w-40 h-64 z-10 rotate-[-5deg]">
            <Image
              src="/karung2.png"
              alt="PROSIL"
              fill
              className="object-contain"
            />
          </div>

          {/* Gambar HI-PRO */}
          <div className="relative w-40 h-64 -ml-12 z-0 rotate-[10deg]">
            <Image
              src="/karung1.png"
              alt="Pakan Ikan"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right: Banner Text */}
        <div className="text-center lg:text-right lg:w-1/2 space-y-4 mt-8 lg:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Segera Hadir!
          </h2>
          <p className="text-white text-lg">Pakan Jumbo, Harga Lebih Hemat</p>
          <h3 className="text-[#FFA726] text-5xl font-extrabold">30 Kg</h3>
          <p className="text-sm text-white">
            Peternak dari limbah agro-maritim. Hemat hingga 30%! Beli pakan,
            bantu bumi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
