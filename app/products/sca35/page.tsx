"use client";

import { useState } from "react";

const phoneLink = "tel:01037775290";

const galleryImages = [
  "/images/sca35.jpg",
  "/images/sca35-1.jpg",
  "/images/sca35-2.jpg",
  "/images/sca35-3.jpg",
];

const relatedProducts = [
  {
    name: "AR4 Speaker",
    category: "Vintage Speaker",
    price: "1,000,000원",
    image: "/images/ar4.jpg",
    link: "/products/ar4",
  },
  {
    name: "Braun SK61",
    category: "Turntable / Radio",
    price: "1,500,000원",
    image: "/images/sk61.jpg",
    link: "/products/sk61",
  },
];

export default function SCA35Page() {
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
                alt="Dynaco SCA-35"
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
                    alt={`Dynaco SCA-35 ${index + 1}`}
                    className="h-28 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-[#956537]">
              TUBE INTEGRATED AMPLIFIER
            </p>

            <h1 className="mt-3 text-4xl font-semibold">Dynaco SCA-35</h1>
            <p className="mt-3 text-lg text-[#6f5d4a]">USA · 1960s</p>

            <div className="mt-8 rounded-3xl border border-[#d5bea0] bg-[#fff8ed] p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["제조국", "USA"],
                  ["제조년도", "1960s"],
                  ["상태", "Excellent"],
                  ["청음", "가능"],
                  ["출력관", "러시아제"],
                  ["기타 진공관", "구관"],
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
              <p className="mt-2 text-4xl font-bold">₩ 400,000</p>
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
            곱고 예쁘면서도 단단한 음색이 돋보이는 6BQ5 진공관
            인티앰프입니다.
          </p>

          <p className="mt-4 leading-8 text-[#655442]">
            험이나 트러블 없이 안정적으로 동작하며, 출력관은 러시아제,
            나머지 진공관은 구관 구성입니다.
          </p>

          <p className="mt-4 leading-8 text-[#655442]">
            아웃트랜스가 제법 커서 풍부하고 안정적인 소리를 들려줍니다.
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