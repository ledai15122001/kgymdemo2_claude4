import { useState } from 'react';
import { Check } from 'lucide-react';

const LEFT_IMAGE = 'https://res.cloudinary.com/oytqegys/image/upload/v1787538842/model_7.jpg';

type PriceMode = 'thuong' | 'hssv';

type Plan = {
  id: string;
  duration: string;
  unit: string;
  price: Record<PriceMode, number | null>;
  perks: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    id: 'ngay',
    duration: '1',
    unit: 'NGÀY',
    price: { thuong: 50000, hssv: null },
    perks: ['Tập thử toàn bộ khu vực', 'Không cần đăng ký trước'],
  },
  {
    id: 'thang',
    duration: '1',
    unit: 'THÁNG',
    price: { thuong: 450000, hssv: 400000 },
    perks: ['Tập không giới hạn buổi', 'Hướng dẫn sử dụng máy miễn phí'],
  },
  {
    id: 'ba-thang',
    duration: '3',
    unit: 'THÁNG',
    price: { thuong: 900000, hssv: 800000 },
    perks: ['Tiết kiệm hơn so với đóng theo tháng', 'Ưu tiên tư vấn lộ trình tập', 'Well come PT Freelance'],
    featured: true,
  },
];

function formatPrice(value: number) {
  return `${value.toLocaleString('vi-VN')}đ`;
}

function PlanCard({ plan, mode }: { plan: Plan; mode: PriceMode }) {
  const price = plan.price[mode] ?? plan.price.thuong;
  const isHssvUnavailable = mode === 'hssv' && plan.price.hssv === null;

  return (
    <div
      className={`relative flex flex-col gap-5 border p-6 transition-colors duration-300 md:p-7 ${
        plan.featured
          ? 'border-[#FF7372] bg-[#171313]'
          : 'border-white/12 bg-[#131313] hover:border-white/25'
      }`}
    >
      {plan.featured && (
        <span
          className="absolute -top-3 right-6 bg-[#FF7372] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0D0D0D]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Tiết Kiệm Nhất
        </span>
      )}

      <div className="flex items-end justify-between gap-4">
        <div className="flex items-baseline gap-2">
          <span
            className="text-[40px] leading-none tracking-[-0.03em] text-white md:text-[48px]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
          >
            {plan.duration}
          </span>
          <span
            className="text-[13px] uppercase tracking-[0.15em] text-white/60"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {plan.unit}
          </span>
        </div>
        <div className="text-right">
          <div
            className={`text-[22px] leading-none tracking-[-0.02em] md:text-[26px] ${
              plan.featured ? 'text-[#FF7372]' : 'text-white'
            }`}
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
          >
            {isHssvUnavailable ? formatPrice(plan.price.thuong as number) : formatPrice(price as number)}
          </div>
          {isHssvUnavailable && (
            <span
              className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-white/40"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Giá chung
            </span>
          )}
        </div>
      </div>

      <ul className="flex flex-col gap-2.5 border-t border-white/10 pt-5">
        {plan.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-[#FF7372]' : 'text-white/50'}`}
              strokeWidth={2}
            />
            <span
              className="text-[13px] leading-[1.5] text-white/75 md:text-[14px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {perk}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="https://zalo.me/0964555961"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-1 flex items-center justify-center px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 active:scale-95 ${
          plan.featured
            ? 'bg-[#FF7372] text-[#0D0D0D] hover:bg-[#ff5a59]'
            : 'border border-white/25 text-white hover:border-white hover:bg-white/10'
        }`}
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        Đăng Ký Ngay
      </a>
    </div>
  );
}

export default function ServicesPricing() {
  const [mode, setMode] = useState<PriceMode>('thuong');

  return (
    <section id="services-pricing" aria-label="Services and pricing" className="bg-[#0D0D0D]">
      <div className="grid md:min-h-[720px] md:grid-cols-2">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#151515] md:aspect-auto md:h-auto">
          <img
            src={LEFT_IMAGE}
            alt="Không gian tập luyện thực tế tại K-GYM Lái Thiêu"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 75%, rgba(0,0,0,0.6) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10">
            <span
              className="text-[10px] uppercase tracking-[0.28em] text-[#FF7372]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              K-GYM Lái Thiêu
            </span>
            <p
              className="mt-2 max-w-[320px] text-[15px] leading-[1.5] text-white/85 md:text-[16px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              161 Nguyễn Văn Tiết, Lái Thiêu, Thuận An, Bình Dương
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-12 md:py-20 lg:px-16">
          <span
            className="text-[10px] uppercase tracking-[0.38em] text-white/50"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Gói Tập · Bảng Giá
          </span>
          <h2
            className="mt-4 text-[clamp(1.75rem,3vw,2.75rem)] leading-[0.98] tracking-[-0.03em] text-white"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
          >
            Dịch Vụ &amp; Gói Tập
          </h2>
          <p
            className="mt-4 max-w-[440px] text-[14px] leading-[1.7] text-white/60 md:text-[15px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Chọn gói phù hợp với mục tiêu của bạn — không phí ẩn, không ràng buộc dài hạn.
          </p>

          <div
            role="tablist"
            aria-label="Chọn loại giá"
            className="mt-8 inline-flex w-fit border border-white/15"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'thuong'}
              onClick={() => setMode('thuong')}
              className={`px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                mode === 'thuong' ? 'bg-[#FF7372] text-[#0D0D0D]' : 'text-white/60 hover:text-white'
              }`}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Giá Thường
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'hssv'}
              onClick={() => setMode('hssv')}
              className={`px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                mode === 'hssv' ? 'bg-[#FF7372] text-[#0D0D0D]' : 'text-white/60 hover:text-white'
              }`}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Giá HSSV
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} mode={mode} />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p
              className="text-[12px] uppercase tracking-[0.12em] text-white/50"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Well Come PT Freelance · Huấn Luyện Viên Cá Nhân
            </p>
            <p
              className="text-[12px] text-white/50"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Sáng 5h–11h · Chiều 14h–21h30
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
