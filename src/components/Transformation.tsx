import { useState, type PointerEvent as ReactPointerEvent } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TRANSFORMATION_IMAGES = [
  'https://res.cloudinary.com/oytqegys/image/upload/v1787539011/ketqua_3.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/v1787539011/ketqua_1.jpg',
  'https://res.cloudinary.com/oytqegys/image/upload/v1787539010/ketqua_2.jpg',
];

function Transformation() {
  const [slide, setSlide] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const maxSlide = TRANSFORMATION_IMAGES.length - 1;

  const next = () => setSlide((prev) => Math.min(prev + 1, maxSlide));
  const previous = () => setSlide((prev) => Math.max(prev - 1, 0));

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    setDragStart(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart === null) return;
    const distance = event.clientX - dragStart;
    if (Math.abs(distance) > 45) {
      if (distance < 0) next();
      else previous();
    }
    setDragStart(null);
  };

  return (
    <section
      className="bg-[#111111] px-6 py-20 text-center text-[#F8F5F0] sm:py-28"
      id="transformation"
      aria-labelledby="transformation-heading"
    >
      <p className="text-xs font-bold tracking-[0.25em] text-[#FF7372]">KẾT QUẢ THỰC TẾ</p>
      <h2 id="transformation-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
        HÀNH TRÌNH <em className="not-italic text-[#FF7372]">THAY ĐỔI</em>
      </h2>

      <div className="mx-auto mt-10 w-full max-w-[820px] px-0 sm:px-6">
        <div
          className="relative aspect-square w-full overflow-hidden"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => setDragStart(null)}
          onPointerLeave={() => setDragStart(null)}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            {TRANSFORMATION_IMAGES.map((src, index) => (
              <figure className="w-full shrink-0" key={src}>
                <img
                  src={src}
                  alt={`Kết quả tập luyện K-GYM góc ${index + 1}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  draggable="false"
                  className="h-full w-full object-contain"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            type="button"
            onClick={previous}
            disabled={slide === 0}
            aria-label="Ảnh trước"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 disabled:opacity-30"
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={slide === maxSlide}
            aria-label="Ảnh tiếp theo"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 disabled:opacity-30"
          >
            <ArrowRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Transformation;
