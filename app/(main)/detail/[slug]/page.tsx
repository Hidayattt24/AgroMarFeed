"use client";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Heart, Minus, Plus, Star } from "lucide-react";
import Link from "next/link";

const Detail = () => {
    const [quantity, setQuantity] = useState(0);

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => (q > 0 ? q - 1 : 0));

    const weights = ["1 Kg", "2 Kg", "5 Kg", "10 Kg"];
    return (
        <section className="bg-white py-40 w-full">
            <div className="w-full max-w-5xl mx-auto flex flex-col item-left text-left mb-12">
                {/* Judul Section */}
                <h2 className="text-left text-2xl font-normal text-black mb-16">
                    Detail Produk
                </h2>

                {/* Layout 2 Kolom */}
                <div className="flex flex-col md:flex-row gap-10 mb-40">
                    {/* Kiri: Gambar */}
                    <div className="w-full md:w-2/5 flex justify-center items-start">
                        <Image
                            src="/images/home/specialOffer1.png"
                            alt="Produk"
                            width={300}
                            height={300}
                            className="object-contain"
                        />
                    </div>

                    {/* Kanan: Info Produk */}
                    <div className="w-full md:w-3/6 flex flex-col gap-4">
                        {/* Judul */}
                        <h3 className="text-3xl font-normal text-black">GimMe Organic</h3>

                        {/* Rating */}
                        <div className="flex items-center gap-2 text-yellow-500">
                            <span className="text-black ml-2">4.5</span>
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} fill="currentColor" stroke="currentColor" className="w-5 h-5" />
                            ))}
                            <Star className="w-5 h-5" />
                        </div>

                        {/* Harga */}
                        <div className="text-4xl font-normal text-black">Rp450.000</div>

                        {/* Deskripsi */}
                        <p className="text-black/50 text-sm mb-4">
                            Pelet ikan, pakan ayam, dan ternak dari limbah agro-maritim. Hemat hingga 30%! Beli pakan, bantu bumi.
                        </p>

                        <p className="text-black text-xl">
                            Tersedia Dalam :
                        </p>
                        {/* Pilihan Berat */}
                        <div className="flex gap-3">
                            {weights.map((weight, idx) => (
                                <div
                                    key={idx}
                                    className="bg-2 px-2 py-2 rounded-[20px] text-sm text-white cursor-pointer hover:bg-2/80 transition"
                                >
                                    {weight}
                                </div>
                            ))}
                        </div>

                        {/* Kuantitas + Tombol */}
                        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                            {/* Counter */}
                            <div className="flex items-center gap-3 bg-[#6D8044]/14 px-4 py-2 rounded-xl">
                                <button onClick={decrement} className="text-black text-lg">
                                    <Minus />
                                </button>
                                <span className="text-lg text-black">{quantity}</span>
                                <button onClick={increment} className="text-black text-lg">
                                    <Plus />
                                </button>
                            </div>

                            {/* Tombol Aksi */}
                            <div className="flex flex-wrap gap-2">
                                <button className="bg-2 px-5 py-2 rounded-[20px] text-white font-medium hover:bg-2/80 transition">
                                    Tambah ke Keranjang
                                </button>
                                <button className="bg-3 px-5 py-2 rounded-[20px] text-black font-medium hover:bg-3/90 transition">
                                    Beli Sekarang
                                </button>
                                <button className="w-7 text-black hover:text-red-500 transition flex items-center justify-center">
                                    <Heart className="w-8 h-8" />
                                </button>
                            </div>
                        </div>
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

            </div>
        </section>
    );
};

export default Detail;
