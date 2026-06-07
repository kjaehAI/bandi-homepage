export default function ProductsPage() {
    const products = [
      "턴테이블",
      "스피커",
      "앰프",
      "리시버",
      "진공관 앰프",
      "올인원 오디오",
    ];
  
    return (
      <main className="min-h-screen bg-[#120d0a] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <a href="/" className="text-sm text-white/50 hover:text-white">
            ← 홈으로
          </a>
  
          <p className="mt-16 text-sm tracking-[0.35em] text-[#b99774]">
            PRODUCTS
          </p>
  
          <h1 className="mt-4 text-5xl font-bold">취급 제품</h1>
  
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
            반디오디오는 턴테이블, 스피커, 앰프, 리시버 등 다양한 빈티지
            오디오를 취급합니다. 제품별 상태와 소리는 문의 후 확인하실 수
            있습니다.
          </p>
  
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-6 flex h-48 items-center justify-center rounded-2xl bg-[#2a1a12] text-5xl text-white/30">
                  ◉
                </div>
  
                <h2 className="text-2xl font-bold">{item}</h2>
  
                <p className="mt-3 leading-7 text-white/55">
                  상태와 소리를 확인한 빈티지 오디오 제품을 소개합니다.
                </p>
  
                <a
                  href={`sms:010-3777-5290?body=${encodeURIComponent(
                    `${item} 제품 문의 드립니다`
                  )}`}
                  className="mt-6 inline-block rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-white/85"
                >
                  제품 문의하기
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }