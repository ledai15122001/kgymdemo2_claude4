const FOOTER_BG = 'https://res.cloudinary.com/oytqegys/image/upload/v1787545252/facility_6.jpg';

export default function Footer() {
  const socials = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100063801061455' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@kgymlaithieu' },
    { name: 'Zalo', href: 'https://zalo.me/0964555961' },
    { name: 'Messenger', href: 'https://www.messenger.com/t/100063801061455' },
  ];

  return (
    <footer
      className="sticky bottom-0 z-0 w-full overflow-hidden"
      style={{
        backgroundImage: `url(${FOOTER_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark cinematic overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/80"
        aria-hidden="true"
      />

      {/* Footer content */}
      <div className="relative min-h-[420px] px-6 py-24 md:min-h-[480px] md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
            {/* Logo + intro */}
            <div className="flex flex-col gap-4">
              <span
                className="text-white tracking-tight"
                style={{ fontFamily: "'Manrope', sans-serif", fontSize: '22px', fontWeight: 800 }}
              >
                K<span className="text-[#FF7372]">-GYM</span>
              </span>
              <p
                className="text-[13px] leading-[1.8] text-white/50"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Phòng tập gym tại Lái Thiêu.<br />
                Đồng hành cùng bạn trên hành trình rèn luyện thể chất.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <span
                className="text-[11px] uppercase tracking-[0.3em] text-[#FF7372]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Liên Hệ
              </span>
              <p
                className="text-[13px] leading-[1.8] text-white/60"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                161 Nguyễn Văn Tiết<br />
                Lái Thiêu, Thuận An<br />
                Bình Dương, Vietnam<br />
                096 455 59 61<br />
                tranlekha86@gmail.com
              </p>
            </div>

            {/* Opening hours */}
            <div className="flex flex-col gap-3">
              <span
                className="text-[11px] uppercase tracking-[0.3em] text-[#FF7372]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Giờ Mở Cửa
              </span>
              <p
                className="text-[13px] leading-[1.8] text-white/60"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Sáng: 5:00 – 11:00<br />
                Chiều: 14:00 – 21:30
              </p>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3">
              <span
                className="text-[11px] uppercase tracking-[0.3em] text-[#FF7372]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Mạng Xã Hội
              </span>
              <div className="flex flex-col gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-white/60 transition-colors hover:text-white"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 border-t border-white/10 pt-8">
            <p
              className="text-[11px] uppercase tracking-[0.2em] text-white/30"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              © 2026 K-GYM Lái Thiêu. Bảo Lưu Mọi Quyền.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
