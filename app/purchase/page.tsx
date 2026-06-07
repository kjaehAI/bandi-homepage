export default function PurchasePage() {
    return (
      <main className="min-h-screen bg-[#120d0a] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <a href="/" className="text-sm text-white/50 hover:text-white">
            ← 홈으로
          </a>
  
          <p className="mt-16 text-sm tracking-[0.35em] text-[#b99774]">
            PURCHASE
          </p>
  
          <h1 className="mt-4 text-5xl font-bold leading-tight">
            빈티지 오디오 매입 안내
          </h1>
  
          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/70">
            사용하지 않는 턴테이블, 스피커, 앰프, 리시버가 있다면 사진을
            보내주세요. 제품 모델과 상태를 확인한 뒤 상담을 도와드립니다.
          </p>
  
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">매입 상담 절차</h2>
  
            <ol className="mt-6 space-y-4 text-white/65">
              <li>1. 제품 사진과 모델명을 문자로 보내주세요.</li>
              <li>2. 제품 상태와 구성품을 확인합니다.</li>
              <li>3. 1차 상담 후 매입 가능 여부를 안내드립니다.</li>
              <li>4. 필요 시 방문 상담 또는 추가 확인을 진행합니다.</li>
            </ol>
          </div>
  
          <a
            href={`sms:010-3777-5290?body=${encodeURIComponent(
              "안녕하세요 오디오 매입 문의 드립니다"
            )}`}
            className="mt-10 inline-block rounded-full bg-white px-7 py-4 font-bold text-black transition hover:bg-white/85"
          >
            매입 문자 문의하기
          </a>
        </div>
      </main>
    );
  }