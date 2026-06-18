const phoneNumber = "010-3777-5290";
const phoneLink = "tel:01037775290";
const mapLink = "https://naver.me/F5a4k8RU";
const address =
  "서울특별시 금천구 가산디지털2로 43-14 가산한화비즈메트로2차 1134호";

const products = [
  {
    name: "AR4 Speaker",
    category: "Vintage Speaker",
    price: "1,000,000원",
    tag: "Original",
    image: "/images/ar4.jpg",
    link: "/products/ar4",
    description: "작은 크기에서 나오는 깊고 자연스러운 빈티지 사운드.",
    specs: [
      ["제조국", "USA"],
      ["제조년도", "1960s"],
      ["상태", "Excellent"],
      ["청음", "가능"],
      ["오리지널 유닛", "100%"],
      ["교체 이력", "없음"],
    ],
  },
  {
    name: "Dynaco SCA-35",
    category: "Tube Integrated Amplifier",
    price: "400,000원",
    tag: "Tube Amp",
    image: "/images/sca35.jpg",
    link: "/products/sca35",
    description:
      "곱고 예쁘면서도 단단한 음색이 돋보이는 6BQ5 진공관 인티앰프입니다.",
    specs: [
      ["제조국", "USA"],
      ["제조년도", "1960s"],
      ["상태", "Excellent"],
      ["청음", "가능"],
      ["출력관", "러시아제"],
      ["기타 진공관", "구관"],
    ],
  },
  {
    name: "Braun SK61",
    category: "Turntable / Radio",
    price: "1,500,000원",
    tag: "Original",
    image: "/images/sk61.jpg",
    link: "/products/sk61",
    description:
      "올 오리지널 상태의 브라운 SK61로, FM 수신 감도와 청음 상태가 좋습니다.",
    specs: [
      ["제조국", "Germany"],
      ["제조년도", "1960s"],
      ["상태", "Excellent"],
      ["청음", "가능"],
      ["오리지널", "All Original"],
      ["점검", "전문 수리점 완료"],
    ],
  },
];

const soldOutProducts = [
  {
    name: "Fisher RS-1080",
    category: "Vintage Receiver",
    image: "/images/fisher-rs1080.jpg",
    link: "/products/fisher-rs1080",
  },
  {
    name: "McIntosh MX110",
    category: "Tube Preamp / Tuner",
    image: "/images/mcintosh-mx110.jpg",
    link: "/products/mcintosh-mx110",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4ecdf] text-[#241d17]">
      <header className="sticky top-0 z-50 border-b border-[#d8c7ad] bg-[#f4ecdf]/90 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="text-base font-bold tracking-[0.38em]">
            BANDI AUDIO
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#6f5d4a] md:flex">
            <a href="#products" className="hover:text-[#241d17]">
              Shop
            </a>
            <a href="#why" className="hover:text-[#241d17]">
              Service
            </a>
            <a href="#archive" className="hover:text-[#241d17]">
              Archive
            </a>
            <a href="#contact" className="hover:text-[#241d17]">
              Contact
            </a>
          </nav>

          <a
            href={phoneLink}
            className="hidden rounded-full bg-[#241d17] px-5 py-2.5 text-sm font-semibold text-white md:inline-block"
          >
            전화 문의
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.02fr_0.98fr] md:items-center md:py-24">
        <div>
          <p className="mb-5 text-sm font-semibold tracking-[0.38em] text-[#956537]">
            PREMIUM VINTAGE AUDIO
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl">
            음악의 감성을
            <br />
            다시 깨우다
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#655442]">
            반디오디오는 빈티지 오디오, 스피커, 턴테이블, 진공관 앰프를
            전문으로 매입·판매·청음 상담하는 빈티지 오디오 전문점입니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-[#241d17] px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(36,29,23,0.18)]"
            >
              판매중 제품 보기
            </a>

            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#a88c6a] bg-[#fff8ed] px-7 py-3 text-sm font-semibold text-[#241d17]"
            >
              오시는 길
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 border-y border-[#d8c7ad] py-5">
            <div>
              <p className="text-lg font-semibold">1:1</p>
              <p className="mt-1 text-xs text-[#806d59]">상담 구매</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Vintage</p>
              <p className="mt-1 text-xs text-[#806d59]">오디오 전문</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Visit</p>
              <p className="mt-1 text-xs text-[#806d59]">방문 청음</p>
            </div>
          </div>

          <p className="mt-6 text-sm text-[#806d59]">
            장바구니·결제·회원가입 없이 상담 후 구매하는 문의형
            쇼핑몰입니다.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2.2rem] border border-[#d5bea0] bg-[#fff8ed] p-4 shadow-[0_24px_70px_rgba(60,38,18,0.14)]">
          <div className="relative h-[460px] overflow-hidden rounded-[1.8rem] bg-[#d8c7ad]">
            <img
              src="/images/main-hero.jpg"
              alt="반디오디오 쇼룸"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
            <div className="absolute left-5 top-5 rounded-full bg-[#241d17] px-4 py-2 text-xs font-semibold tracking-[0.15em] text-white">
              BANDI SHOWROOM
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-[#fff8ed]/90 p-5 backdrop-blur">
              <p className="text-sm font-semibold text-[#241d17]">
                빈티지 오디오 청음 공간
              </p>
              <p className="mt-1 text-sm leading-6 text-[#6f5d4a]">
                제품 상태 확인 · 방문 청음 · 전화 상담 후 구매
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8c7ad] bg-[#241d17] px-6 py-4 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-7 text-xs font-semibold tracking-[0.25em] text-white/65">
          <span>VINTAGE SPEAKER</span>
          <span>TUBE AMPLIFIER</span>
          <span>TURNTABLE</span>
          <span>BUY & SELL</span>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.35em] text-[#956537]">
              SELECTED PRODUCTS
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              판매중인 제품
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#655442]">
            빈티지 오디오는 상태와 개성이 모두 다릅니다. 반디오디오는 상담과
            청음을 통해 제품을 안내합니다.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[2rem] border border-[#d5bea0] bg-[#fff8ed] shadow-[0_18px_50px_rgba(60,38,18,0.1)]"
            >
              <div className="relative h-80 overflow-hidden bg-[#e4d0b4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-[#241d17] px-3.5 py-1.5 text-xs font-semibold text-white">
                  {product.tag}
                </span>
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold tracking-[0.22em] text-[#956537]">
                    AVAILABLE
                  </p>
                  <p className="text-sm text-[#7b6a57]">{product.category}</p>
                </div>

                <h3 className="mt-5 text-2xl font-semibold">{product.name}</h3>

                <div className="mt-4 rounded-2xl border border-[#e3d2bb] bg-[#f8efe2] p-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {product.specs.map(([label, value]) => (
                      <div key={label}>
                        <p className="text-[#8a7966]">{label}</p>
                        <p className="font-semibold text-[#241d17]">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-4 min-h-12 text-sm leading-6 text-[#655442]">
                  {product.description}
                </p>

                <div className="mt-7 border-t border-[#e3d2bb] pt-5">
                  <p className="text-xs text-[#8a7966]">판매가격</p>
                  <p className="text-lg font-semibold text-[#241d17]">
                    ₩ {product.price}
                  </p>

                  <div className="mt-5 flex gap-3">
                    <a
                      href={product.link}
                      className="flex-1 rounded-full border border-[#9d8468] px-5 py-2.5 text-center text-sm font-semibold text-[#241d17]"
                    >
                      상세보기
                    </a>

                    <a
                      href={phoneLink}
                      className="flex-1 rounded-full bg-[#241d17] px-5 py-2.5 text-center text-sm font-semibold text-white"
                    >
                      문의하기
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="why" className="bg-[#eadbc6] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold tracking-[0.35em] text-[#956537]">
            SERVICE
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            반디오디오 이용 방식
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {[
              [
                "01",
                "제품 상담",
                "제품 상태, 청음 가능 여부, 구매 상담을 전화로 안내합니다.",
              ],
              [
                "02",
                "방문 청음",
                "실제 공간에서 빈티지 오디오의 사운드를 직접 확인할 수 있습니다.",
              ],
              [
                "03",
                "매입 문의",
                "스피커, 앰프, 턴테이블, 리시버 등 빈티지 오디오 매입 상담이 가능합니다.",
              ],
            ].map((item) => (
              <div
                key={item[0]}
                className="rounded-[2rem] border border-[#d5bea0] bg-[#fff8ed] p-8 shadow-[0_14px_40px_rgba(60,38,18,0.08)]"
              >
                <p className="text-3xl font-semibold text-[#b98f64]">
                  {item[0]}
                </p>
                <h3 className="mt-8 text-2xl font-semibold">{item[1]}</h3>
                <p className="mt-4 leading-7 text-[#655442]">{item[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="archive" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold tracking-[0.35em] text-[#956537]">
          SOLD ARCHIVE
        </p>

        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          판매완료 제품
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-[#655442]">
          판매완료 제품은 삭제하지 않고 아카이브로 남겨 반디오디오가 다루는
          제품군과 취급 이력을 보여줍니다.
        </p>

        <div className="mt-10 grid gap-7 md:grid-cols-2">
          {soldOutProducts.map((product) => (
            <a
              key={product.name}
              href={product.link}
              className="group overflow-hidden rounded-[2rem] border border-[#d5bea0] bg-[#fff8ed] opacity-95 shadow-[0_16px_45px_rgba(60,38,18,0.09)] transition hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden bg-[#e4d0b4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-[#241d17] px-3.5 py-1.5 text-xs font-semibold text-white">
                  SOLD OUT
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="mt-2 text-[#7b6a57]">{product.category}</p>

                <div className="mt-5 border-t border-[#e3d2bb] pt-5">
                  <span className="inline-flex rounded-full border border-[#9d8468] px-5 py-2 text-sm font-semibold text-[#241d17]">
                    상세보기
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-[#241d17] text-[#f4ecdf] shadow-[0_24px_70px_rgba(36,29,23,0.22)]">
          <div className="grid gap-10 p-8 md:grid-cols-[1fr_0.8fr] md:p-14">
            <div>
              <p className="text-sm font-semibold tracking-[0.35em] text-[#c4965f]">
                BUY & SELL
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                보유 중인 빈티지 오디오,
                <br />
                반디오디오에 문의하세요.
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-white/65">
                스피커, 앰프, 턴테이블, 리시버, 진공관 오디오 매입 상담이
                가능합니다.
              </p>

              <a
                href={phoneLink}
                className="mt-8 inline-block rounded-full bg-[#f4ecdf] px-7 py-3 text-sm font-semibold text-[#241d17]"
              >
                매입 문의하기
              </a>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#c4965f]">
                VISIT
              </p>
              <p className="mt-5 text-2xl font-semibold">{phoneNumber}</p>
              <p className="mt-5 leading-7 text-white/65">{address}</p>
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-block rounded-full border border-white/25 px-6 py-3 text-sm font-semibold"
              >
                네이버 지도 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-[#d5bea0] bg-[#fff8ed] p-8 shadow-[0_18px_50px_rgba(60,38,18,0.1)] md:p-12">
          <p className="text-sm font-semibold tracking-[0.35em] text-[#956537]">
            CONTACT
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            청음·매입·판매 문의
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-[#8a7966]">전화번호</p>
              <a href={phoneLink} className="mt-2 block text-2xl font-semibold">
                {phoneNumber}
              </a>
            </div>

            <div>
              <p className="text-sm text-[#8a7966]">주소</p>
              <p className="mt-2 text-lg font-semibold leading-8">{address}</p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={phoneLink}
              className="rounded-full bg-[#241d17] px-7 py-3 text-sm font-semibold text-white"
            >
              전화 문의
            </a>

            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#9d8468] px-7 py-3 text-sm font-semibold text-[#241d17]"
            >
              네이버 지도
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d8c7ad] px-6 py-9 text-center text-sm text-[#8a7966]">
        © BANDI AUDIO. Vintage Audio Shop. / {phoneNumber} / {address}
      </footer>
    </main>
  );
}