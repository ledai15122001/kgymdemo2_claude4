import { forwardRef } from 'react';

const ZALO_LINK = 'https://zalo.me/0964555961';
const MAPS_LINK =
  'https://www.google.com/maps/place/K+GYM+-+L%C3%A1i+Thi%C3%AAu/@10.913172,106.7056735,1161m/data=!3m1!1e3!4m8!3m7!1s0x3174d7cf35bee6b9:0x6c11e69bc6c50ba6!8m2!3d10.913172!4d106.7056735!9m1!1b1!16s%2Fg%2F11v3kvhdt6?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D';
const MESSENGER_LINK = 'https://www.messenger.com/t/100063801061455';
const TIKTOK_LINK = 'https://www.tiktok.com/@kgymlaithieu';

const ICONS = [
  {
    name: 'Google Maps',
    href: MAPS_LINK,
    src: 'https://res.cloudinary.com/o5ikznlv/image/upload/q_auto/f_auto/w_200/v1786071157/images-Photoroom_u1pswl.png',
    label: 'Open Google Maps',
  },
  {
    name: 'Zalo',
    href: ZALO_LINK,
    src: 'https://res.cloudinary.com/o5ikznlv/image/upload/q_auto/f_auto/w_200/v1786071157/Icon_of_Zalo.svg_fvgtc7.webp',
    label: 'Chat on Zalo',
  },
  {
    name: 'Messenger',
    href: MESSENGER_LINK,
    src: 'https://res.cloudinary.com/o5ikznlv/image/upload/q_auto/f_auto/w_200/v1786071157/5968771_tdpcd6.png',
    label: 'Message on Messenger',
  },
  {
    name: 'TikTok',
    href: TIKTOK_LINK,
    src: 'https://res.cloudinary.com/o5ikznlv/image/upload/q_auto/f_auto/w_200/v1786071156/tiktok-logo_a8px9f.png',
    label: 'Visit TikTok',
  },
];

const FloatingContact = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="fixed bottom-5 right-5 z-[70] flex flex-col items-center gap-3 md:bottom-7 md:right-7 md:gap-4"
      style={{ opacity: 0, pointerEvents: 'none', willChange: 'opacity' }}
      aria-label="Liên hệ nhanh"
    >
      {ICONS.map((icon) => (
        <a
          key={icon.name}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={icon.label}
          title={icon.label}
          className="group transition-transform duration-300 ease-out hover:scale-105"
        >
          <img
            src={icon.src}
            alt={icon.name}
            loading="lazy"
            decoding="async"
            className="floating-contact-btn h-10 w-10 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)] md:h-12 md:w-12"
          />
        </a>
      ))}
    </div>
  );
});

FloatingContact.displayName = 'FloatingContact';

export default FloatingContact;
