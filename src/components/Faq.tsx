import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'Tôi có thể được tư vấn miễn phí trước khi đến tập qua Zalo không?',
    a: 'Có. Bạn có thể nhắn Zalo 096 455 59 61 để được tư vấn miễn phí trước khi đến phòng tập. Chúng tôi sẽ tư vấn gói tập phù hợp, chi phí, giờ giấc và những điều bạn muốn biết trước khi quyết định đăng ký.',
  },
  {
    q: 'Gói tập của K-GYM gồm những loại nào?',
    a: 'K-GYM có gói 1 ngày (50.000đ), gói 1 tháng (450.000đ, HSSV 400.000đ) và gói 3 tháng (900.000đ, HSSV 800.000đ). Gói 3 tháng đang là lựa chọn tiết kiệm nhất cho bạn nào muốn tập dài hạn.',
  },
  {
    q: 'Học sinh, sinh viên có được giảm giá không?',
    a: 'Có. K-GYM áp dụng giá ưu đãi riêng cho học sinh, sinh viên (HSSV) ở cả gói 1 tháng và 3 tháng. Bạn chỉ cần xuất trình thẻ HSSV khi đăng ký tại quầy.',
  },
  {
    q: 'K-GYM mở cửa những khung giờ nào?',
    a: 'Phòng tập mở cửa 2 khung giờ mỗi ngày: buổi sáng từ 5h đến 11h và buổi chiều từ 14h đến 21h30. Bạn có thể chọn khung giờ phù hợp với lịch trình cá nhân.',
  },
  {
    q: 'Tôi mới tập lần đầu, có huấn luyện viên hướng dẫn không?',
    a: 'Có. K-GYM welcome cả huấn luyện viên cá nhân (PT) và PT freelance để hỗ trợ bạn xây dựng lộ trình tập phù hợp. Bạn cứ liên hệ trước để được tư vấn hình thức tập phù hợp với mục tiêu của mình.',
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#34282D]/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-7 text-left md:py-8"
        aria-expanded={isOpen}
      >
        <span
          className="text-[19px] leading-[1.4] tracking-[-0.01em] text-[#34282D] md:text-[22px]"
          style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
        >
          {faq.q}
        </span>
        <span className="shrink-0 text-[#FF7372]">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div
        className="grid transition-all duration-500 ease-out"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p
            className="pb-7 pr-10 text-[15px] leading-[1.8] text-[#75656A] md:pb-8 md:text-[16px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="Câu hỏi thường gặp về K-GYM"
      className="bg-[#F8F5F0] py-16 md:py-24"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#75656A]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Trước Khi Đến Tập
          </span>
          <h2
            className="text-[32px] leading-[1.1] tracking-tight text-[#34282D] md:text-[44px]"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
          >
            Những điều bạn thường muốn biết
          </h2>
        </div>

        <div className="border-t border-[#34282D]/10">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
