export default function Home() {
  const phone = "01000000000";
  const naverCafe = "https://cafe.naver.com/bandiaudio";

  return (
    <main className="min-h-screen bg-[#120d0a] text-white">
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,#6b4a35_0%,#2b1c14_45%,#120d0a_100%)]">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="/" className="font-bold tracking-[0.25em]">
            BANDI AUDIO
          </a>

          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="/about" className="hover:text-white">
              소개
            </a>
            <a href="/products" className="hover:text-white">
              제품
            </a>
            <a href="/purchase" className="hover:text-white">
              매입
            </a>
            <a href="/location" className="hover:text-white">
              오시는 길
            </a>
          </nav>
        </header>

        <div className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-[0.35em] text-white/50">
              VINTAGE AUDIO SHOP
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              음악의 감성을
              <br />
              다시 깨우다
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              반디오디오는 빈티지 오디오, 턴테이블, 스피커, 앰프를 직접
              청음하고 상담받을 수 있는 아날로그 사운드 공간입니다.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${phone}`}
                className="rounded-full bg-white px-7 py-4 text-center font-bold text-black transition hover:bg-white/85"
              >
                전화 문의하기
              </a>

              <a
                href="/products"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
              >
                제품 둘러보기
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-8 shadow-2xl backdrop-blur">
            <div className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-[radial-gradient(circle,#8b6a4d_0%,#2a1a12_55%,#080504_100%)]">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full border border-white/30 bg-black/40 text-7xl">
                  ◉
                </div>
                <p className="tracking-[0.4em] text-white/70">BANDI AUDIO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <p className="mb-4 text-sm tracking-[0.35em] text-[#b99774]">
          ABOUT BANDI AUDIO
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          시간이 지나도 사라지지 않는 소리의 가치
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
          반디오디오는 단순히 오래된 오디오를 판매하는 곳이 아닙니다. 각
          제품이 가진 시대의 감성, 소리의 질감, 공간과 어울리는 분위기까지
          함께 제안하는 빈티지 오디오 전문 공간입니다.
        </p>

        <a
          href="/about"
          className="mt-8 inline-block rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
        >
          반디오디오 소개 보기
        </a>
      </section>

      <section className="bg-[#1b120d] px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm tracking-[0.35em] text-[#b99774]">
            PRODUCTS
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">취급 제품</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {["턴테이블", "스피커", "앰프", "리시버"].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-6 h-40 rounded-2xl bg-[#2a1a12]" />
                <h3 className="text-2xl font-bold">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  상태와 소리를 직접 확인한 빈티지 오디오 제품을 소개합니다.
                </p>
              </div>
            ))}
          </div>

          <a
            href="/products"
            className="mt-10 inline-block rounded-full bg-white px-7 py-4 font-bold text-black transition hover:bg-white/85"
          >
            전체 제품 보기
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-[0.35em] text-[#b99774]">
              PURCHASE
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              빈티지 오디오 매입 상담
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/65">
              사용하지 않는 턴테이블, 스피커, 앰프, 리시버가 있다면 사진을
              보내주세요. 제품 상태와 모델을 확인한 뒤 상담을 도와드립니다.
            </p>

            <a
              href="/purchase"
              className="mt-8 inline-block rounded-full bg-white px-7 py-4 font-bold text-black transition hover:bg-white/85"
            >
              매입 안내 보기
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#1b120d] px-6 py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm tracking-[0.35em] text-[#b99774]">
            VISIT
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            직접 들어보고 선택하세요
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            사진으로는 알 수 없는 소리의 차이를 반디오디오에서 직접
            경험해보세요. 방문 전 문의해주시면 더 편하게 상담받으실 수
            있습니다.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${phone}`}
              className="rounded-full bg-white px-7 py-4 font-bold text-black transition hover:bg-white/85"
            >
              전화 문의
            </a>

            <a
              href={naverCafe}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              네이버 카페
            </a>

            <a
              href="/location"
              className="rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              오시는 길
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-white/40">
        <p>BANDI AUDIO © 2026</p>
        <p className="mt-2">Vintage Audio · Turntable · Speaker · Amplifier</p>
      </footer>
    </main>
  );
}