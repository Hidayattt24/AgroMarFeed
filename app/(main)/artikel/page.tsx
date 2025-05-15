"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";

export default function ArticlePage() {
  const [activeTab, setActiveTab] = useState("artikel");

  const articles = [
    {
      id: 1,
      title: "Strategi Pemasaran Produk Pertanian di Era Digital",
      image: "/images/artikel/artikel-1.jpg",
      date: "5 September 2024",
      description:
        "Pemasaran produk pertanian saat ini menghadapi tantangan dan peluang baru dengan berkembangnya teknologi digital. Mari pelajari cara memanfaatkan platform digital untuk meningkatkan jangkauan pasar.",
      author: {
        name: "Azimah Al-Huda",
        avatar: "/images/home/avatar.png",
      },
    },
    {
      id: 2,
      title: "Mengoptimalkan Hasil Panen dengan Teknologi Smart Farming",
      image: "/images/artikel/artikel-2.jpg",
      date: "3 September 2024",
      description:
        "Penerapan teknologi smart farming dapat membantu petani meningkatkan hasil panen dan efisiensi penggunaan sumber daya. Simak tips implementasinya.",
      author: {
        name: "Dr. Surya Prakash",
        avatar: "/images/home/avatar.png",
      },
    },
    {
      id: 3,
      title: "Inovasi Pengolahan Limbah Pertanian Menjadi Pakan Ternak",
      image: "/images/artikel/artikel-3.jpg",
      date: "1 September 2024",
      description:
        "Limbah pertanian dapat diolah menjadi pakan ternak berkualitas. Pelajari metode pengolahan yang efektif dan ramah lingkungan.",
      author: {
        name: "Ir. Budi Santoso",
        avatar: "/images/home/avatar.png",
      },
    },
    {
      id: 4,
      title: "Tips Memilih Bibit Unggul untuk Hasil Panen Maksimal",
      image: "/images/artikel/artikel-4.jpg",
      date: "29 Agustus 2024",
      description:
        "Pemilihan bibit yang tepat menentukan keberhasilan panen. Kenali ciri-ciri bibit unggul dan cara memilihnya.",
      author: {
        name: "Maya Kusuma",
        avatar: "/images/home/avatar.png",
      },
    },
    {
      id: 5,
      title: "Manajemen Air yang Efektif untuk Pertanian Berkelanjutan",
      image: "/images/artikel/artikel-5.jpg",
      date: "27 Agustus 2024",
      description:
        "Teknik manajemen air modern untuk mengoptimalkan penggunaan air dalam pertanian. Hemat air, hasil maksimal.",
      author: {
        name: "Dr. Amir Hassan",
        avatar: "/images/home/avatar.png",
      },
    },
    {
      id: 6,
      title: "Peluang Usaha dari Pengolahan Hasil Pertanian",
      image: "/images/artikel/artikel-6.jpg",
      date: "25 Agustus 2024",
      description:
        "Mengubah hasil pertanian menjadi produk bernilai tambah. Temukan peluang usaha menjanjikan di sektor agroindustri.",
      author: {
        name: "Linda Wijaya",
        avatar: "/images/home/avatar.png",
      },
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-3 text-black">
              Artikel & Tips
            </h1>
            <p className="text-black text-sm max-w-2xl mx-auto">
              Pelet ikan, pakan ayam, dan ternak dari limbah agro-maritim. Hemat
              hingga 30%! Beli pakan, bantu bumi.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <SearchBar
              placeholder="Cari pakan.."
              className="w-full md:w-[440px]"
            />
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab("artikel")}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeTab === "artikel"
                    ? "bg-2 text-white shadow-lg shadow-2/20"
                    : "bg-2/10 text-black hover:bg-2/20"
                }`}
              >
                <span className="flex items-center gap-2">Artikel</span>
              </button>
              <button
                onClick={() => setActiveTab("tips")}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeTab === "tips"
                    ? "bg-2 text-white shadow-lg shadow-2/20"
                    : "bg-2/10 text-black hover:bg-2/20"
                }`}
              >
                <span className="flex items-center gap-2">Tips & Tricks</span>
              </button>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-7 rounded-2xl p-4 flex flex-col group cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center text-sm text-black/50 mb-2">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-lg font-semibold text-black mb-2 line-clamp-2 hover:text-2">
                  {article.title}
                </h3>

                <p className="text-sm text-black/60 mb-4 line-clamp-2">
                  {article.description}
                </p>

                {/* Add Read More Button */}
                <div className="mb-4">
                  <Button
                    href={`/artikel/${article.id}`}
                    size="sm"
                    className="w-full bg-2 text-white hover:bg-2/90"
                  >
                    Baca Selengkapnya
                  </Button>
                </div>

                {/* Author section with modified margin */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={32}
                      height={32}
                      className="rounded-full mr-2"
                    />
                    <span className="text-sm text-black/80">
                      {article.author.name}
                    </span>
                  </div>
                  <button className="p-2 hover:scale-110 transition text-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
