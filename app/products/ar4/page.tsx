"use client";

import { useState } from "react";

const phoneLink = "tel:01037775290";

const galleryImages = [
  "/images/ar4.jpg",
  "/images/ar4-1.jpg",
  "/images/ar4-2.jpg",
  "/images/ar4-3.jpg",
];

const relatedProducts = [
  {
    name: "Dynaco SCA-35",
    category: "Tube Integrated Amplifier",
    price: "400,000원",
    image: "/images/sca35.jpg",
    link: "/products/sca35",
  },
  {
    name: "Braun SK61",
    category: "Turntable / Radio",
    price: "1,500,000원",
    image: "/images/sk61.jpg",
    link: "/products/sk61",
  },
];

export default function AR4Page() {
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  return (
    <main className="min-h-screen bg-[#f4ecdf] text-[#241d17]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <a href="/" className="inline-flex text-sm font-semibold text-[#956537]">
          ← 홈으로 돌아가기
        </a>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-[#d5bea0] bg-white">
              <img
                src={selectedImage}
                alt="AR4 Speaker"
                className="w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-2xl border bg-white transition ${
                    selectedImage === image
                      ? "border-[#241d17] ring-2 ring-[#241d17]/20"
                      : "border-[#d5bea0]"
                  }`}
                >
                  <img
                    src={image}
                    alt={`AR4 Speaker ${index + 1}`}
                    className="h-28 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-[#956537]">
              VINTAGE SPEAKER
            </p>

            <h1 className="mt-3 text-4xl font-semibold">AR4 Speaker</h1>
            <p className="mt-3 text-lg text-[#6f5d4a]">USA · 1960s</p>

            <div className="mt-8 rounded-3xl border border-[#d5bea0] bg-[#fff8ed] p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["제조국", "USA"],
                  ["제조년도", "1960s"],
                  ["상태", "Excellent"],
                  ["청음", "가능"],
                  ["오리지널 유닛", "100%"],
                  ["교체 이력", "없음"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-sm text-[#8a7966]">{label}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-[#8a7966]">판매가격</p>
              <p className="mt-2 text-4xl font-bold">₩ 1,000,000</p>
            </div>

            <a
              href={phoneLink}
              className="mt-8 inline-block rounded-full bg-[#241d17] px-8 py-4 text-sm font-semibold text-white"
            >
              전화 문의하기
            </a>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#d5bea0] bg-[#fff8ed] p-8">
          <h2 className="text-2xl font-semibold">제품 설명</h2>

          <p className="mt-6 leading-8 text-[#655442]">
            AR4는 미국 Acoustic Research의 대표적인 북쉘프 스피커입니다.
          </p>

          <p className="mt-4 leading-8 text-[#655442]">
            작은 크기에서 나오는 깊고 자연스러운 빈티지 사운드가 특징이며,
            현재 제품은 오리지널 유닛 100% 상태를 유지하고 있습니다.
          </p>
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-[#956537]">
                RELATED PRODUCTS
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                다른 판매중 제품 보기
              </h2>
            </div>

            <a href="/" className="text-sm font-semibold text-[#956537]">
              전체 제품 보기 →
            </a>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {relatedProducts.map((product) => (
              <a
                key={product.name}
                href={product.link}
                className="group overflow-hidden rounded-[2rem] border border-[#d5bea0] bg-[#fff8ed] shadow-[0_16px_45px_rgba(60,38,18,0.09)]"
              >
                <div className="relative h-72 overflow-hidden bg-[#e4d0b4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>

                <div className="p-7">
                  <p className="text-sm text-[#956537]">{product.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-lg font-semibold">
                    ₩ {product.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}