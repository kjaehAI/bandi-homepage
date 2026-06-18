const phoneLink = "tel:01037775290";

export default function McIntoshMX110Page() {
  return (
    <main className="min-h-screen bg-[#f4ecdf] text-[#241d17]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <a href="/" className="inline-flex text-sm font-semibold text-[#956537]">
          ← 홈으로 돌아가기
        </a>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-[#d5bea0] bg-white">
            <img
              src="/images/mcintosh-mx110.jpg"
              alt="McIntosh MX110"
              className="w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-[#956537]">
              SOLD ARCHIVE
            </p>

            <h1 className="mt-3 text-4xl font-semibold">McIntosh MX110</h1>
            <p className="mt-3 text-lg text-[#6f5d4a]">
              Tube Preamp / Tuner
            </p>

            <div className="mt-8 rounded-3xl border border-[#d5bea0] bg-[#fff8ed] p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["판매상태", "판매완료"],
                  ["분류", "Tube Preamp / Tuner"],
                  ["구성", "프리앰프 + 튜너"],
                  ["진공관", "원관 / 미제 구관"],
                  ["FM 수신", "감도 우수"],
                  ["매직아이", "장착"],
                  ["상태", "관리 우수"],
                  ["기능", "밸런스·프리부 정상"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-sm text-[#8a7966]">{label}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-[#8a7966]">판매 당시 가격</p>
              <p className="mt-2 text-4xl font-bold">₩ 1,800,000</p>
            </div>

            <a
              href={phoneLink}
              className="mt-8 inline-block rounded-full bg-[#241d17] px-8 py-4 text-sm font-semibold text-white"
            >
              유사 제품 문의하기
            </a>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#d5bea0] bg-[#fff8ed] p-8">
          <h2 className="text-2xl font-semibold">제품 설명</h2>

          <p className="mt-6 leading-8 text-[#655442]">
            McIntosh MX110은 진공관에서 트랜지스터 시대로 넘어가던 시기에
            맥킨토시에서 출시한 프리튜너 앰프입니다.
          </p>

          <p className="mt-4 leading-8 text-[#655442]">
            맥킨토시 최초의 프리튜너 앰프로, 튜너와 프리앰프를 함께 사용할 수
            있어 저렴한 가격에 두 가지 기능을 모두 취할 수 있다는 매력이 있는
            제품입니다.
          </p>

          <p className="mt-4 leading-8 text-[#655442]">
            내부 부품 상태가 좋고 크롬에 녹이 없으며, 전체적으로 관리가 잘된
            상태의 앰프입니다.
          </p>

          <p className="mt-4 leading-8 text-[#655442]">
            사용된 진공관은 모두 원관 또는 미제 구관으로 세팅되어 있습니다.
          </p>

          <p className="mt-4 leading-8 text-[#655442]">
            FM 수신 감도는 전면 매직아이가 붙어 있을 정도로 분리도와 감도가
            우수하며, 좌우 밸런스와 프리부 기능도 정상적으로 살아 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}