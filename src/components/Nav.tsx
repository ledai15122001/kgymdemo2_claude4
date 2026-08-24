import { forwardRef, useEffect, useState, type RefObject } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const links = [
  { label: 'GIỚI THIỆU', href: '#facility' },
  { label: 'BIẾN ĐỔI', href: '#transformation' },
  { label: 'VIDEO', href: '#video' },
  { label: 'GÓI TẬP', href: '#services-pricing' },
  { label: 'LIÊN HỆ', href: '#lien-he' },
  { label: 'CÂU HỎI', href: '#faq' },
];

interface NavProps {
  heroRef: RefObject<HTMLElement | null>;
  visible: boolean;
}

const Nav = forwardRef<HTMLElement, NavProps>(({ heroRef, visible }, ref) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [insideHero, setInsideHero] = useState(true);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInsideHero(entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroRef]);

  const setNavRef = (node: HTMLElement | null) => {
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  useEffect(() => {
    if (!visible) return;
    const navEl = ref && typeof ref !== 'function' ? ref.current : null;
    if (!navEl) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navEl,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 },
      );
    });
    return () => ctx.revert();
  }, [visible, ref]);

  return (
    <>
      <nav
        ref={setNavRef}
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        className={`sticky top-0 z-[100] grid w-full grid-cols-[1fr_auto_1fr] items-center px-5 py-6 transition-opacity duration-700 md:fixed md:left-0 md:px-16 ${visible ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden={!visible}
      >
        <div
          className={`absolute inset-0 -z-10 backdrop-blur-xl transition-opacity duration-500 bg-[#0D0D0D]/90 border-b ${insideHero ? 'border-transparent opacity-0' : 'border-white/10 opacity-100'}`}
          aria-hidden="true"
        />

        <div className="relative justify-self-start">
          <a
            href="/"
            className="text-white tracking-tighter transition-opacity hover:opacity-80"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: '20px', lineHeight: '28px', fontWeight: 800 }}
          >
            K<span className="text-[#FF7372]">-GYM</span>
          </a>
        </div>

        <div className="relative col-start-2 hidden items-center justify-center gap-1 justify-self-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded px-3 py-2 text-[12px] font-medium uppercase tracking-[0.05em] text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="relative col-start-3 hidden items-center justify-end gap-4 justify-self-end md:flex">
          <a
            href="tel:0964555961"
            className="text-[13px] font-medium tracking-[0.05em] text-white/80 transition-colors duration-300 hover:text-white"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            096 455 59 61
          </a>
          <a
            href="https://zalo.me/0964555961"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-6 py-3 text-[12px] font-medium uppercase tracking-[0.15em] text-[#34282D] transition-colors duration-300 hover:bg-white/90 active:scale-95"
          >
            TƯ VẤN MIỄN PHÍ
          </a>
        </div>

        <button
          className="relative col-start-3 justify-self-end text-white md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 bg-[#34282D] pt-24">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[12px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-white"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0964555961"
            className="text-[14px] tracking-[0.1em] text-white/80 transition-colors hover:text-white"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            096 455 59 61
          </a>
          <a
            href="https://zalo.me/0964555961"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="bg-white px-8 py-4 text-[12px] font-medium uppercase tracking-[0.15em] text-[#34282D] transition-colors duration-300 hover:bg-white/90"
          >
            TƯ VẤN MIỄN PHÍ
          </a>
        </div>
      )}
    </>
  );
});

Nav.displayName = 'Nav';

export default Nav;
