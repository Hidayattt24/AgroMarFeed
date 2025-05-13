"use client";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Search, Filter, Heart } from "lucide-react";

const Katalog = () => {
    const [activeCategory, setActiveCategory] = useState("");
    const categories = ["Pakan Ikan", "Pakan Ternak", "Pakan Ayam", "Pakan Burung"];
    const [isOpenLimbah, setIsOpenLimbah] = useState(false);
    const [isOpenFisik, setIsOpenFisik] = useState(false);

    const [selectedLimbah, setSelectedLimbah] = useState("Bahan dasar limbah");
    const [selectedFisik, setSelectedFisik] = useState("Bentuk fisik");

    const limbahOptions = [
        "Semua bahan dasar",
        "Limbah Laut",
        "Limbah Pertanian",
        "Limbah Sayur & Buah",
        "Limbah Roti & Biji",
    ];

    const fisikOptions = [
        "Semua bentuk fisik",
        "Pelet",
        "Fermentasi Padat",
        "Serbuk",
        "Granul Kasar"];

    return (
        <section className="bg-white py-40 w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="w-full max-w-5xl mx-auto flex flex-col items-center text-center mb-12">
                {/* Judul dan Logo */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <h2 className="text-4xl font-normal text-black">Cari Pakan</h2>
                </div>

                {/* Deskripsi */}
                <p className="text-black/50 max-w-2xl mb-10">
                    Pelet ikan, pakan ayam, dan ternak dari limbah agro-maritim. Hemat hingga 30%! Beli pakan, bantu bumi.
                </p>

                {/* Tombol Kategori */}
                <div className="flex flex-wrap gap-8 mb-6">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            href=""
                            size="md"
                            className={`mb-2 px-12 ${activeCategory === category ? "bg-1 text-white" : "bg-2 text-white"
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Bar pencarian & filter */}
                <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 mt-4 mb-14">
                    {/* Kolom pencarian (bisa input) */}
                    <div className="flex items-center gap-3 bg-6 rounded-full px-5 py-3 w-full md:w-1/2">
                        <Search className="w-5 h-5 text-black/50" />
                        <input
                            type="text"
                            placeholder="Cari pakan…"
                            className="bg-transparent outline-none text-black/80 placeholder:text-black/50 w-full"
                        />
                    </div>

                    {/* Dropdown Limbah */}
                    <div className="relative w-full md:w-auto">
                        <button
                            onClick={() => setIsOpenLimbah(!isOpenLimbah)}
                            className="flex items-center justify-between gap-3 bg-2 text-white rounded-full px-5 py-3 w-full md:w-max"
                        >
                            <span>{selectedLimbah}</span>
                            <Filter className="w-4 h-4" />
                        </button>
                        {isOpenLimbah && (
                            <ul className="absolute z-10 mt-2 bg-[#3B3B3B]/50 rounded-xl shadow-md w-56">
                                {limbahOptions.map((option) => (
                                    <li
                                        key={option}
                                        className="px-4 py-2 hover:bg-[#353535]/50 cursor-pointer text-white"
                                        onClick={() => {
                                            setSelectedLimbah(option);
                                            setIsOpenLimbah(false);
                                        }}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Dropdown Fisik */}
                    <div className="relative w-full md:w-auto">
                        <button
                            onClick={() => setIsOpenFisik(!isOpenFisik)}
                            className="flex items-center justify-between gap-3 bg-2 text-white rounded-full px-5 py-3 w-full md:w-max"
                        >
                            <span>{selectedFisik}</span>
                            <Filter className="w-4 h-4" />
                        </button>
                        {isOpenFisik && (
                            <ul className="absolute z-10 mt-2 bg-[#3B3B3B]/50 rounded-xl shadow-md w-56">
                                {fisikOptions.map((option) => (
                                    <li
                                        key={option}
                                        className="px-4 py-2 hover:bg-[#353535]/50 cursor-pointer text-white"
                                        onClick={() => {
                                            setSelectedFisik(option);
                                            setIsOpenFisik(false);
                                        }}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <section className="w-full py-10">
                    {/* Teks Section 1*/}
                    <h2 className="text-left text-2xl font-normal text-black mb-4">Best Seller</h2>

                    {/* Kontainer untuk scroll horizontal */}
                    <div
                        className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar"
                    >
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-7 rounded-2xl p-4 flex-shrink-0 w-72 flex flex-col"
                            >
                                {/* Gambar Produk */}
                                <div className="w-full flex justify-center mb-4 pt-8">
                                    <Image
                                        src="/images/home/specialOffer1.png"
                                        alt="Produk"
                                        width={150}
                                        height={120}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Judul Produk */}
                                <h3 className="text-lg font-semibold text-left mb-2 text-black">
                                    Scratch & Peck Feeds
                                </h3>

                                {/* Keterangan + Rating */}
                                <div className="flex justify-between text-sm text-black/30 mb-2 px-1">
                                    <span>Pakan ternak ayam</span>
                                    <span className="flex items-center gap-1 text-yellow-500 text-[16px]">
                                        ★ <span className="text-black/60">(4.5)</span>
                                    </span>
                                </div>

                                {/* Harga + Aksi */}
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-base font-semibold text-black">Rp120RB</span>
                                    <div className="flex gap-2">
                                        <button className="w-6 h-6 rounded-full bg-black text-xl text-white border border-black/10 flex items-center justify-center">
                                            +
                                        </button>

                                        <button className="w-6 h-6 text-[#C7C7CC] hover:text-red-500 transition flex items-center justify-center">
                                            <Heart className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full py-10">
                    {/* Teks Section 2*/}
                    <h2 className="text-left text-2xl font-normal text-black mb-4">Special Offer</h2>

                    {/* Kontainer untuk scroll horizontal */}
                    <div
                        className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar"
                    >
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-7 rounded-2xl p-4 flex-shrink-0 w-72 flex flex-col"
                            >
                                {/* Gambar Produk */}
                                <div className="w-full flex justify-center mb-4 pt-8">
                                    <Image
                                        src="/images/home/specialOffer1.png"
                                        alt="Produk"
                                        width={150}
                                        height={120}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Judul Produk */}
                                <h3 className="text-lg font-semibold text-left mb-2 text-black">
                                    Scratch & Peck Feeds
                                </h3>

                                {/* Keterangan + Rating */}
                                <div className="flex justify-between text-sm text-black/30 mb-2 px-1">
                                    <span>Pakan ternak ayam</span>
                                    <span className="flex items-center gap-1 text-yellow-500 text-[16px]">
                                        ★ <span className="text-black/60">(4.5)</span>
                                    </span>
                                </div>

                                {/* Harga + Aksi */}
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-base font-semibold text-black">Rp120RB</span>
                                    <div className="flex gap-2">
                                        <button className="w-6 h-6 rounded-full bg-black text-xl text-white border border-black/10 flex items-center justify-center">
                                            +
                                        </button>

                                        <button className="w-6 h-6 text-[#C7C7CC] hover:text-red-500 transition flex items-center justify-center">
                                            <Heart className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full py-10">
                    {/* Teks Section 3*/}
                    <h2 className="text-left text-2xl font-normal text-black mb-4">Rekomendasi untuk Pakan Ikan</h2>

                    {/* Kontainer untuk scroll horizontal */}
                    <div
                        className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar"
                    >
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-7 rounded-2xl p-4 flex-shrink-0 w-72 flex flex-col"
                            >
                                {/* Gambar Produk */}
                                <div className="w-full flex justify-center mb-4 pt-8">
                                    <Image
                                        src="/images/home/specialOffer1.png"
                                        alt="Produk"
                                        width={150}
                                        height={120}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Judul Produk */}
                                <h3 className="text-lg font-semibold text-left mb-2 text-black">
                                    Scratch & Peck Feeds
                                </h3>

                                {/* Keterangan + Rating */}
                                <div className="flex justify-between text-sm text-black/30 mb-2 px-1">
                                    <span>Pakan ternak ayam</span>
                                    <span className="flex items-center gap-1 text-yellow-500 text-[16px]">
                                        ★ <span className="text-black/60">(4.5)</span>
                                    </span>
                                </div>

                                {/* Harga + Aksi */}
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-base font-semibold text-black">Rp120RB</span>
                                    <div className="flex gap-2">
                                        <button className="w-6 h-6 rounded-full bg-black text-xl text-white border border-black/10 flex items-center justify-center">
                                            +
                                        </button>

                                        <button className="w-6 h-6 text-[#C7C7CC] hover:text-red-500 transition flex items-center justify-center">
                                            <Heart className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </motion.div>
        </section>
    );
};

export default Katalog;
