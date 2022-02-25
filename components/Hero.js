import React from 'react';
import { Autoplay, EffectFade, Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import scss from '../styles/Hero.module.scss';

export default function HeroSection() {
  return (
    <div className="hero-section position-relative">
      <div className={scss.heroImage}>
        <div className={scss.heroText}>
          <h1>Aidanus Möbl </h1>
          <p>Wohnen wie ein König</p>
        </div>
      </div>
    </div>

  );
}
