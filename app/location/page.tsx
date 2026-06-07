export default function LocationPage() {
    const phone = "01000000000";
    const mapLink = "https://map.naver.com/";
  
    return (
      <main className="min-h-screen bg-[#120d0a] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <a href="/" className="text-sm text-white/50 hover:text-white">
            ← 홈으로
          </a>
  
          <p className="mt-16 text-sm tracking-[0.35em] text-[#b99774]">
            LOCATION
          </p>
  
          <h1 className="mt-4 text-5xl font-bold">오시는 길</h1>
  
          <p className="mt-8 text-lg leading-9 text-white/70">
            방문 전 전화 문의 후 오시면 더 편하게 청음 상담을 받으실 수
            있습니다.
          </p>
  
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
            <p>주소: 실제 주소 입력 예정</p>
            <p className="mt-3">전화: 010-0000-0000</p>
            <p className="mt-3">영업시간: 연중무휴 365일 청음 가능</p>
          </div>
  
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${phone}`}
              className="rounded-full bg-white px-7 py-4 text-center font-bold text-black transition hover:bg-white/85"
            >
              전화 문의
            </a>
  
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
            >
              네이버 지도 보기
            </a>
          </div>
        </div>
      </main>
    );
  }