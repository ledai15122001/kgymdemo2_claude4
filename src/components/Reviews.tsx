const REVIEWS = [
  {
    name: 'Tuấn Anh',
    service: 'Gói 3 Tháng',
    text: 'Chủ phòng thân thiện , dễ chịu. Phòng tập luyện thoải mái thoáng mát.',
  },
  {
    name: 'Ng Huynh Chieu',
    service: 'PT Cá Nhân',
    text: 'Phòng đẹp , sạch sẽ , thoáng mát , mọi người vui vẻ hoà đồng, ông chủ vui tính.',
  },
  {
    name: 'Mai Loan',
    service: 'Gói HSSV',
    text: 'Phòng gym tiện nghi, sạch sẽ đầy đủ trang thiết bị. Đẳng cấp nhất khu vực Lái Thiêu',
  },
  {
    name: 'Quốc Thái',
    service: 'Tập Buổi Sáng',
    text: 'Phòng sạch sẽ và thoáng mát, không có máy Preacher curl :(',
  },
  {
    name: 'Hết Cao Vân',
    service: 'Gói 1 Tháng',
    text: 'Anh em ở đây hoà đồng thân thiện lắm luôn, giá tốt, phù hợp cho người mới bắt đầu tập.',
  },
  {
    name: 'Sĩ Bụ',
    service: 'PT Freelance',
    text: 'Chỗ tập ưng quá chừng 😘, có khu vực riêng cho PT dẫn khách, dụng cụ tập đầy đủ, nhiệt tình lắm nheee 😍😍',
  },
  {
    name: 'Phố Ngô',
    service: 'Gói 3 Tháng',
    text: 'Anh chủ K-GYM rất tâm huyết, tư vấn lộ trình tập phù hợp với từng người, các bạn hỗ trợ đều rất thân thiện.',
  },
  {
    name: 'Hải Yến',
    service: 'Tập Buổi Chiều',
    text: 'Trải nghiệm xứng đáng 5 sao. Không gian rộng rãi, trang thiết bị hiện đại, đáng đồng tiền bát gạo.',
  },
];

type Review = (typeof REVIEWS)[number];

const COL_1 = [REVIEWS[0], REVIEWS[1], REVIEWS[2], REVIEWS[3], REVIEWS[4]];
const COL_2 = [REVIEWS[3], REVIEWS[4], REVIEWS[5], REVIEWS[6], REVIEWS[7]];
const COL_3 = [REVIEWS[5], REVIEWS[6], REVIEWS[7], REVIEWS[0], REVIEWS[1]];

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="mb-6 flex w-full flex-col gap-5 rounded-xl border border-[#34282D]/10 bg-white/60 p-8">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-[14px] text-[#FF7372]">
            ★
          </span>
        ))}
      </div>
      <blockquote
        className="text-[15px] leading-[1.8] text-[#34282D]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        “{review.text}”
      </blockquote>
      <figcaption className="mt-auto">
        <p
          className="text-[16px] text-[#34282D]"
          style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
        >
          {review.name}
        </p>
        <p
          className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[#75656A]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {review.service}
        </p>
      </figcaption>
    </figure>
  );
}

function ReviewColumn({
  reviews,
  duration,
  delay,
  className = '',
}: {
  reviews: Review[];
  duration: number;
  delay: number;
  className?: string;
}) {
  const loop = [...reviews, ...reviews];
  return (
    <div className={`h-full overflow-hidden ${className}`}>
      <div
        className="flex flex-col will-change-transform"
        style={{
          animation: `marqueeScrollUp ${duration}s linear infinite`,
          animationDelay: `-${delay}s`,
        }}
      >
        {loop.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      aria-label="Client reviews"
      className="overflow-hidden bg-[#F8F5F0] py-16 md:py-24"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#75656A]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Khách Hàng Nói Gì
          </span>
          <h2
            className="text-[32px] leading-[1.1] tracking-tight text-[#34282D] md:text-[44px]"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
          >
            Cảm Nhận Khách Hàng
          </h2>
        </div>

        <div className="relative">
          <div className="grid h-[70vh] grid-cols-1 gap-6 sm:grid-cols-2 md:h-[85vh] md:grid-cols-3 md:gap-8">
            <ReviewColumn reviews={COL_1} duration={30} delay={0} />
            <ReviewColumn reviews={COL_2} duration={36} delay={12} className="hidden sm:block" />
            <ReviewColumn reviews={COL_3} duration={33} delay={6} className="hidden md:block" />
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F8F5F0] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F8F5F0] to-transparent" />
        </div>
      </div>
    </section>
  );
}
