"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Home() {
  return (
    <main className="flex min-h-screen mx-auto flex-col">
      <header className="w-full h-16 flex items-center flex-row px-8 shadow bg-white sticky top-0 z-50">
        <Image src="/splash.png" alt="SafePlay+" width={200} height={16} />
      </header>
      <section className="mx-0 px-0">
        <div className="flex flex-row justify-center items-center flex-wrap gap-32 max-lg:gap-8 pt-24 from-orange-300 to-orange-500 bg-gradient-to-b p-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-semibold max-md:text-3xl">
              Enkel lekplatsbesiktning,
              <br />
              direkt i mobilen
            </h1>
            <h3 className="text-xl max-w-md">
              Ladda ner appen och börja effektivisera dina besiktningar idag, helt kostnadsfritt!
            </h3>
            <div className="flex flex-row items-center gap-16">
              <a href="https://apps.apple.com/se/app/safeplay/id6445820584" target="_blank">
                <Image src="/app_store.svg" alt="App Store" height={40} width={200} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=se.oskarrubensson.safeplayplus" target="_blank">
                <Image src="/google_play.png" alt="Google Play" height={40} width={220} />
              </a>
            </div>
          </div>
          <div className="">
            <Image src="/man_by_playground.png" alt="" width={512} height={512} className="rounded-md shadow-md" />
          </div>
        </div>
        <div className="overflow-x-hidden">
          <div className="w-[120%] -mx-[10%] -mt-12 h-24 rounded-[120%] bg-orange-500 border-b border-gray-400 shadow-md"></div>
        </div>
      </section>
      <section className="flex flex-row justify-center items-center flex-wrap gap-4 hidden">
        <div className="key-box">
          <h2>Snabbare</h2>
          <p>När du lämnar lekplatsen har du ett färdigt och snyggt protokoll som är redo att skickas till kund!</p>
        </div>
        <div className="key-box">
          <h2>Säkrare</h2>
          <p>
            Alla protokoll du någonsin skapat finns säkerhetskopierade och sparade i molnet så att du kommer åt dom
            överallt, när som helst!
          </p>
        </div>
        <div className="key-box">
          <h2>Proffsigare</h2>
          <p>Genom att lägga in ditt företags branding ser dina protokoll snygga, stilrena och proffsiga ut!</p>
        </div>
      </section>
      <section>
        <ScreenCarousel />
      </section>
      <section className="self-center max-w-2xl">
        <h2 className="text-3xl font-semibold pb-4">Kontakt</h2>
        <p>
          Om du har frågor eller vill boka ett möte och diskutera hur SafePlay+ kan effektivisera och digitalisera din
          verksamhet är du varmt välkommen att kontakta oss på{" "}
          <a href="mailto:oskar@safeplay.se" className="text-orange-500">
            oskar@safeplay.se
          </a>
        </p>
      </section>
    </main>
  );
}

const ScreenCarousel = () => {
  let images = [
    [
      "/screen1.png",
      "Allt i Appen",
      "Från att skapa en ny besiktning till att skicka protokollet till kund, allt sker i appen!",
    ],
    ["/screen2.png", "Enkel Design", "Enkel och intuitiv design gör det enkelt att skapa och redigera protokoll!"],
    [
      "/screen1.png",
      "Effektivt",
      "Med SafePlay+ behöver du inte föra över bilder till din datorn, hantera word-mallar, renskriva eller liknande. Alla repetetiva moment är automatiserade för effektiva och snabba besiktningar!",
    ],
    [
      "/screen3.png",
      "Proffsiga Protokoll",
      "Skriv ut dina protokoll som en proffsig och stilren PDF med ditt företags färger och logga på, redo att skickas till kund!",
    ],
  ];
  const activeStyle = "";
  const inactiveStyle = "opacity-50 transform scale-90";

  return (
    <div className="h-full">
      <Swiper
        pagination={{ clickable: true, renderBullet: (index, className) => `<span class="${className}"></span>` }}
        autoplay={{ delay: 7000 }}
        slideToClickedSlide
        spaceBetween={-20}
        slidesPerView={1}
        slidesPerGroup={1}
        centeredSlides
        breakpoints={{
          600: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        loop
        modules={[Navigation, Pagination, Autoplay]}
        className="h-full"
      >
        {images.map(([src, title], i) => (
          <SwiperSlide key={src + i}>
            {({ isActive, isNext, isPrev }) => (
              <div className={`pb-8 transition-all duration-200 ${isActive ? activeStyle : inactiveStyle}`}>
                <div className="w-screen -translate-x-1/3">
                  <div className="w-full max-w-xl mx-auto">
                    <h1
                      className={`text-orange-600 text-3xl font-semibold mb-4 text-center transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                    >
                      {title}
                    </h1>
                    <p
                      className={`text-base font-extralight mb-4 text-center transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                    >
                      {images[i][2]}
                    </p>
                  </div>
                </div>
                <Image
                  src={src}
                  alt={title}
                  width={1284}
                  height={2778}
                  className="object-contain max-h-[60vh] mx-auto"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
