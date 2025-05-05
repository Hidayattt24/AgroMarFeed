import React from "react";
import Image from "next/image";
import { Leaf, Truck, GraduationCap, Users } from "lucide-react";
import Logo from "../logo/Logo";

const BenefitCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-[#FFA726] flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#2F2E1F]">{title}</h3>
        <p className="text-sm text-[#4B3C2F]">{description}</p>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section className="bg-[#ffffff] py-16 px-6">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <div className="flex flex-col items-center space-y-2">
          <Logo />
          <h2 className="text-3xl font-bold text-[#2F2E1F]">
            Kenapa Pilih AgroMarFeed?
          </h2>
          <p className="text-sm text-[#4B3C2F] max-w-md">
            Pelet ikan, pakan ayam, dan ternak dari limbah agro-maritim. Hemat
            hingga 30%! Beli pakan, bantu bumi.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <BenefitCard
          icon={<Leaf size={40} className="text-white" />}
          title="Berbasis Zero Waste"
          description="Pelet ikan, pakan ayam, dan ternak dari limbah agro-maritim. Hemat hingga 30%! Beli pakan, bantu bumi."
        />
        <BenefitCard
          icon={<Users size={40} className="text-white" />}
          title="Akses untuk Semua"
          description="Pelet ikan, pakan ayam, dan ternak dari limbah agro-maritim. Hemat hingga 30%! Beli pakan, bantu bumi."
        />
        <BenefitCard
          icon={<Truck size={40} className="text-white" />}
          title="Gratis Ongkir Lokal"
          description="Pelet ikan, pakan ayam, dan ternak dari limbah agro-maritim. Hemat hingga 30%! Beli pakan, bantu bumi."
        />
        <BenefitCard
          icon={<GraduationCap size={40} className="text-white" />}
          title="Edukasi & Konsultasi"
          description="Pelet ikan, pakan ayam, dan ternak dari limbah agro-maritim. Hemat hingga 30%! Beli pakan, bantu bumi."
        />
      </div>
    </section>
  );
};

export default BenefitsSection;
