import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE =
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto,w_1600/v1787542385/facility_8.jpg';

const GALLERY_IMAGES = [
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto,w_700/v1787538842/model_7.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto,w_700/v1787538843/model_8.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto,w_700/v1787538842/model_6.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto,w_700/v1787538844/model_13.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto,w_700/v1787538842/model_12.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto,w_700/v1787538844/model_10.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto,w_700/v1787538845/model_14.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto,w_700/v1787538843/model_16.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/f_auto,q_auto,w_700/v1787538845/model_15.jpg',
];

export default function TrainingEnvironment() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const hero = heroRef.current;
    const grid = gridRef.current;
    if (!section || !hero || !grid) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        hero.querySelector('h2'),
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', once: true },
        },
      );

      gsap.fromTo(
        grid.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.06,
          scrollTrigger: { trigger: grid, start: 'top 88%', once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="training-environment"
      aria-labelledby="environment-heading"
      className="bg-[#0D0D0D]"
    >
      <div ref={heroRef} className="relative overflow-hidden bg-[#151515]">
        <img
          src={HERO_IMAGE}
          alt="Huấn luyện viên đồng hành cùng học viên tại K-GYM Lái Thiêu"
          loading="eager"
          decoding="async"
          className="block aspect-[4/3] w-full object-cover object-[center_46%] sm:aspect-[21/9]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(7,8,7,.72) 0%, rgba(7,8,7,.18) 48%, rgba(7,8,7,.08) 100%), linear-gradient(0deg, rgba(7,8,7,.68) 0%, transparent 54%, rgba(7,8,7,.2) 100%)',
          }}
          aria-hidden="true"
        />
        <h2
          id="environment-heading"
          className="absolute inset-x-6 bottom-7 max-w-[860px] text-balance text-[clamp(31px,8vw,76px)] font-extrabold leading-[0.98] tracking-[-0.05em] text-[#F8F5F0] sm:inset-x-auto sm:left-16 sm:right-auto sm:bottom-12"
        >
          ĐỒNG HÀNH CÙNG BẠN
          <br />
          <strong>TRÊN TỪNG</strong>
          <br />
          <em className="not-italic text-[#FF7372]">BUỔI TẬP.</em>
        </h2>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-3"
        aria-label="Không gian tập luyện và huấn luyện viên K-GYM"
      >
        {GALLERY_IMAGES.map((src, index) => (
          <figure
            className="group relative m-0 aspect-[3/4] overflow-hidden bg-[#151515] sm:aspect-[1524/2048]"
            key={src}
          >
            <img
              src={src}
              alt={`Không gian tập luyện K-GYM ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
