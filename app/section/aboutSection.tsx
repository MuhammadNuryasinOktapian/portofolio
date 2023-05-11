import React from "react";
import PasFoto from "../../public/images/pasfoto.png";
import PasFotoBg from "../../public/images/pasFotoBg.svg";
import Image from "next/image";
import Link from "next/link";

export default function aboutSection() {
  return (
    <div className="relative">
      <div className="absolute -top-[250px] -left-[250px] w-[600px] aspect-square bg-accent-2/20 rounded-full blur-3xl hidden lg:block"></div>
      <div className="max-w-7xl mx-auto flex justify-center items-center px-8 lg:px-0">
        <div className="flex flex-col justify-center items-center lg:flex-row w-full lg:mt-44 lg:mb-36 my-20">
          <div className="lg:w-6/12 w-full h-full flex flex-col justify-center order-2 lg:order-1">
            <div className="font-bold lg:text-[58px] text-[36px] mb-6">
              Halo!, Saya
              <div className="text-accent-2">M Nuryasin Oktapian</div>
            </div>
            <div className="text-[16px] w-10/12 mb-8">
              Fresh Graduate dari Jurusan Sistem Informasi Fakultas Ilmu
              Komputer Universitas Sriwijaya dengan IPK 3,39. Terampil dalam
              Alat Database seperti MySql dan Oraqle. Dengan kemampuan berpikir
              analitis dan analisis data yang kuat, saya mampu mengidentifikasi
              masalah. Berpengalaman dalam mengevaluasi suatu aplikasi demi
              kenyamanan penggunanya untuk merekomendasikan bagi perusahaan.
              Saya sangat termotivasi tantangan dan memiliki mentalitas untuk
              bekerja di bawah tekanan. Dengan rasa ingin tahu yang kuat, saya
              suka mempelajari sesuatu yang baru untuk pengembangan
              keterampilan.
            </div>
            <div className="flex gap-x-6 items-center">
              <Link
                href={"https://wa.me/6281368487807"}
                target="_blank"
                className="w-[120px] h-[40px] flex justify-center items-center text-white bg-accent-2 hover:bg-accent-2/90 focus:ring-4 focus:ring-accent-2/30  font-medium rounded-lg text-sm shadow-[0px_0px_12px] shadow-accent-2/50 transition-all duration-100"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="lg:w-6/12 w-full h-full flex flex-col lg:order-2 order-1 mb-10 lg:mb-0">
            <div className="w-full h-full">
              <div className="w-full aspect-square flex items-center justify-center relative">
                <div className="w-[280px] lg:w-[400px]">
                  <PasFotoBg />
                </div>
                <Image
                  src={PasFoto}
                  alt="pasfoto"
                  className="lg:h-[500px] h-[350px] w-auto z-10 absolute mb-10"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
