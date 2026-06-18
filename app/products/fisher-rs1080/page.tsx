const phoneLink = "tel:01037775290";

export default function FisherRS1080Page() {
  return (
    <main className="min-h-screen bg-[#f4ecdf] text-[#241d17]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <a href="/" className="inline-flex text-sm font-semibold text-[#956537]">
          ← 홈으로 돌아가기
        </a>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-[#d5bea0] bg-white">
            <img
              src="/images/fisher-rs1080.jpg"
              alt="Fisher RS-1080"
              className="w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-[#956537]">
              SOLD ARCHIVE
            </p>

            <h1 className="mt-3 text-4xl font-semibold">Fisher RS-1080</h1>
            <p className="mt-3 text-lg text-[#6f5d4a]">
              Vintage Receiver · Late 1970s
            </p>

            <div className="mt-8 rounded-3xl border border-[#d5bea0] bg-[#fff8ed] p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["판매상태", "판매완료"],
                  ["분류", "Vintage Receiver"],
                  ["출시시기", "1970년대 후반"],
                  ["출력", "170W + 170W"],
                  ["전면 폭", "약 60cm"],
                  ["무게", "약 33kg"],
                  ["점검", "전체 점검 완료"],
                  ["FM 수신", "감도 조정 완료"],
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
              <p className="mt-2 text-4xl font-bold">₩ 1,200,000</p>
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
            Fisher RS-1080은 피셔사에서 1970년대 후반 출시한 최상위급
            빈티지 리시버입니다.
          </p>

          <p className="mt-4 leading-8 text-[#655442]">
            국내에서 거래된 흔적이 거의 없고, 미국과 유럽에서 간헐적으로
            거래 내역이 확인되는 희귀 리시버입니다.
          </p>

          <p className="mt-4 leading-8 text-[#655442]">
            전면 폭은 약 60cm, 무게는 약 33kg에 달하며 리시버로서는 강력한
            채널당 170W급 출력을 갖추고 있습니다.
          </p>

          <p className="mt-4 leading-8 text-[#655442]">
            스피커 3조 연결이 가능하며, 프리앰프 또는 파워앰프로도 활용할 수
            있어 쓰임새가 좋습니다.
          </p>

          <p className="mt-4 leading-8 text-[#655442]">
            이번 판매 당시 전체 점검과 FM 수신 감도 조정을 완료했으며,
            오리지널 출력석도 확인된 제품입니다.
          </p>

          <p className="mt-4 leading-8 text-[#655442]">
            내부의 거대한 전원부와 방열판을 기반으로 강력한 저역감을 들려주는
            인상적인 빈티지 리시버입니다.
          </p>
        </div>
      </section>
    </main>
  );
}