import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GALLERY_IMAGES = [
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto:eco,dpr_auto,w_600/v1787538700/facility_10.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto:eco,dpr_auto,w_600/v1787538700/facility_3.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto:eco,dpr_auto,w_600/v1787538700/facility_4.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto:eco,dpr_auto,w_600/v1787538703/facility_5.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto:eco,dpr_auto,w_600/v1787538705/facility_11.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto:eco,dpr_auto,w_600/v1787538701/480697137_1163085115828180_1686684189078389935_n.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto:eco,dpr_auto,w_600/v1787538700/facility_2.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto:eco,dpr_auto,w_600/v1787541986/7replace.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto:eco,dpr_auto,w_600/v1787538699/facility_9.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto:eco,dpr_auto,w_600/v1787538699/model_11.jpg',
];

const FacilityGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const track = trackRef.current;
    if (!section || !header || !track) return;

    const ctx = gsap.context(() => {
      // Heading + description
      gsap.fromTo(
        header.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: section, start: 'top 80%', once: true },
        },
      );

      // Gallery images — opacity only (no transform) so it never fights
      // with the marquee's own translateX CSS animation on the track.
      gsap.fromTo(
        track.children,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.04,
          scrollTrigger: { trigger: section, start: 'top 75%', once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="facility" className="overflow-hidden bg-[#0D0D0D] pb-4 pt-20 sm:pb-6 sm:pt-20" aria-labelledby="facility-heading">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.38em] text-[#FF7372] sm:mb-8">
          Cơ Sở Vật Chất
        </p>

        <div ref={headerRef} className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <h2
            id="facility-heading"
            className="lg:col-span-7 max-w-[760px] text-[clamp(1.75rem,3.5vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#F8F5F0]"
          >
            <span className="block">Không gian tập luyện </span>
            <span className="mt-2 block font-display font-normal italic tracking-[-0.045em] text-[#B8B8B8]">
              Chuẩn K-GYM Lái Thiêu
            </span>
          </h2>

          <p className="lg:col-span-5 font-body pb-1 text-[15px] leading-[1.75] tracking-[-0.01em] text-[#B8B8B8]">
          Trang thiết bị đầy đủ, không gian rộng rãi, thoáng mát — K-GYM Lái Thiêu mang đến môi trường tập luyện chuyên nghiệp cho mọi trình độ, từ người mới bắt đầu đến vận động viên.
          </p>
        </div>
      </div>

      <div
        className="gallery-marquee-viewport mt-20 overflow-hidden sm:mt-28"
        style={{ height: 'clamp(260px, 44vw, 580px)' }}
      >
        <div ref={trackRef} className="gallery-marquee-track flex h-full w-max will-change-transform gap-3">
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, i) => (
            <div
              key={i}
              className="h-full shrink-0 overflow-hidden"
              style={{ width: 'clamp(200px, 33vw, 480px)' }}
            >
              <img
                src={src}
                alt=""
                draggable={false}
                loading="lazy"
                decoding="async"
                className="h-full w-full select-none object-cover object-center"
                style={{ display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilityGallery;
