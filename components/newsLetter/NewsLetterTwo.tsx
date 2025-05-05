import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "../ui/input";

const NewsLetterTwo = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2F2E1F] leading-tight">
            Butuh Panduan <br /> Langsung dari Pakarnya?
          </h2>
          <p className="text-[#444] max-w-md">
            Kami hadirkan konsultasi pribadi tanpa harus ke lapangan. Efisien,
            terpercaya, dan siap membantu Anda 24/7.
          </p>
          <Button className="bg-[#FFA726] hover:bg-[#FB8C00] text-white px-6 py-3 rounded-full w-fit text-sm md:text-base">
            Mulai Konsultasi
          </Button>
        </div>

        {/* Right Section */}
        <div className="bg-[#F5ECE5] rounded-3xl p-6 space-y-4 shadow-inner">
          <div className="flex gap-4">
            <Button className="bg-[#2F2E1F] text-white px-4 py-2 rounded-full text-sm hover:opacity-80">
              Konsultasi Dokter Hewan
            </Button>
            <Button className="bg-[#2F2E1F] text-white px-4 py-2 rounded-full text-sm hover:opacity-80">
              Konsultasi Ahli Pakan
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Input placeholder="Jenis Hewan" className="rounded-lg" />
            <Input placeholder="Usia/Kondisi/Gejala" className="rounded-lg" />
            <Input
              placeholder="Tujuan Konsultasi"
              className="rounded-lg col-span-2"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-semibold text-[#2F2E1F]">
              Jadwalkan dan <br /> Konsultasi Sekarang
            </h3>
            <Button className="bg-[#2F2E1F] text-white rounded-full p-4 hover:opacity-80">
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterTwo;
