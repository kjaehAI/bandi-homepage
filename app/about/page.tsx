export default function AboutPage() {
    return (
      <main className="min-h-screen bg-[#120d0a] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <a href="/" className="text-sm text-white/50 hover:text-white">
            ← 홈으로
          </a>
  
          <p className="mt-16 text-sm tracking-[0.35em] text-[#b99774]">
            ABOUT BANDI AUDIO
          </p>
  
          <h1 className="mt-4 text-5xl font-bold leading-tight">
            반디오디오 소개
          </h1>
  
          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/70">
            반디오디오는 빈티지 오디오, 턴테이블, 스피커, 앰프를 직접 청음하고
            상담받을 수 있는 아날로그 사운드 공간입니다. 오래된 제품이 가진
            소리의 질감과 시대의 감성을 이해하고, 고객에게 맞는 오디오를
            제안합니다.
          </p>
  
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">빈티지 감성</h2>
              <p className="mt-4 leading-7 text-white/60">
                오래된 오디오가 가진 고유한 소리와 분위기를 소중하게 다룹니다.
              </p>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">직접 청음</h2>
              <p className="mt-4 leading-7 text-white/60">
                제품의 외관뿐 아니라 실제 소리를 들어보고 선택할 수 있습니다.
              </p>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">상담 중심</h2>
              <p className="mt-4 leading-7 text-white/60">
                공간, 취향, 예산에 맞는 오디오 선택을 함께 도와드립니다.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }