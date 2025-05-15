"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Strategi Pemasaran Produk Pertanian di Era Digital",
    image: "/images/artikel/artikel-1.jpg",
    date: "5 September 2024",
    description:
      "Pemasaran produk pertanian saat ini menghadapi tantangan dan peluang baru dengan berkembangnya teknologi digital. Mari pelajari cara memanfaatkan platform digital untuk meningkatkan jangkauan pasar.",
    content: `
      <p>Di era digital saat ini, pemasaran produk pertanian telah mengalami transformasi signifikan. Para petani dan pelaku agribisnis perlu beradaptasi dengan teknologi untuk memperluas jangkauan pasar mereka. Berikut adalah beberapa strategi kunci:</p>
      
      <h3>1. Manfaatkan Media Sosial</h3>
      <p>Media sosial seperti Instagram, Facebook, dan TikTok menjadi platform yang efektif untuk memperkenalkan produk pertanian kepada konsumen. Gunakan konten visual yang menarik dan storytelling yang baik.</p>
      
      <h3>2. Bangun Marketplace Online</h3>
      <p>Bergabung dengan marketplace atau membangun toko online sendiri dapat membantu menjangkau konsumen secara langsung tanpa perantara.</p>
      
      <h3>3. Implementasi Digital Marketing</h3>
      <p>Gunakan strategi SEO, konten marketing, dan email marketing untuk meningkatkan visibilitas produk pertanian Anda di dunia digital.</p>
    `,
    author: {
      name: "Azimah Al-Huda",
      avatar: "/images/home/avatar.png",
      role: "Digital Marketing Specialist Agribisnis",
    },
  },
  {
    id: 2,
    title: "Mengoptimalkan Hasil Panen dengan Teknologi Smart Farming",
    image: "/images/artikel/artikel-2.jpg",
    date: "3 September 2024",
    description:
      "Penerapan teknologi smart farming dapat membantu petani meningkatkan hasil panen dan efisiensi penggunaan sumber daya. Simak tips implementasinya.",
    content: `
      <p>Di era digital saat ini, pemasaran produk pertanian telah mengalami transformasi signifikan. Para petani dan pelaku agribisnis perlu beradaptasi dengan teknologi untuk memperluas jangkauan pasar mereka. Berikut adalah beberapa strategi kunci:</p>
      
      <h3>1. Manfaatkan Media Sosial</h3>
      <p>Media sosial seperti Instagram, Facebook, dan TikTok menjadi platform yang efektif untuk memperkenalkan produk pertanian kepada konsumen. Gunakan konten visual yang menarik dan storytelling yang baik.</p>
      
      <h3>2. Bangun Marketplace Online</h3>
      <p>Bergabung dengan marketplace atau membangun toko online sendiri dapat membantu menjangkau konsumen secara langsung tanpa perantara.</p>
      
      <h3>3. Implementasi Digital Marketing</h3>
      <p>Gunakan strategi SEO, konten marketing, dan email marketing untuk meningkatkan visibilitas produk pertanian Anda di dunia digital.</p>
    `,
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

export default function ArticleDetail() {
  const params = useParams();
  const articleId = Number(params.slug);
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back Button */}
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-black/60 hover:text-2 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Artikel</span>
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-black">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-black/60">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>{article.author.name}</span>
                <span className="text-black/40">• {article.author.role}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-[400px] relative rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          {article.content ? (
            <div
              className="max-w-none [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-black/80 
              [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-black [&>h3]:mt-8 [&>h3]:mb-4
              [&>ul]:list-disc [&>ul]:list-inside [&>ul]:mb-4
              [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:mb-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : (
            <p className="text-black/60">Konten artikel tidak tersedia.</p>
          )}

          {/* Author Box */}
          <div className="mt-12 flex items-start gap-4 bg-7 rounded-2xl p-6">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-black mb-1">
                {article.author.name}
              </h3>
              <p className="text-black/60 text-sm">{article.author.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
