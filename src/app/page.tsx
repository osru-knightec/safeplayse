"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSpringRef, useTransition, animated } from "@react-spring/web";

export default function Home() {
  return (
    <main className="flex min-h-screen mx-auto flex-col from-orange-400 to-orange-500 bg-gradient-radial bg-fixed">
      <header className="w-full shadow bg-white sticky top-0 z-50 px-12">
        <div className="w-full max-w-4xl flex flex-row mx-auto h-12 lg:h-16 py-2 justify-center">
          <div className="flex-1 flex items-start">
            <Image
              src="/splash.png"
              alt="SafePlay+"
              width={1706}
              height={331}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Link href="#kontakt" className="text-xl ml-auto text-orange-500">
              Kontakt
            </Link>
          </div>
        </div>
      </header>
      <section className="bg-transparent">
        <div className="flex flex-row flex-wrap gap-12 items-center justify-center">
          <div className="flex flex-col gap-4 flex-1">
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Enkel lekplatsbesiktning,
              <br />
              direkt i mobilen
            </h1>
            <h3 className="text-xl">
              Ladda ner appen och börja effektivisera dina besiktningar idag, helt kostnadsfritt!
            </h3>
            <div className="flex flex-row items-center gap-16 flex-1">
              <a href="https://apps.apple.com/se/app/safeplay/id6445820584" target="_blank">
                <Image src="/app_store.svg" alt="App Store" height={40} width={200} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=se.oskarrubensson.safeplayplus" target="_blank">
                <Image src="/google_play.png" alt="Google Play" height={40} width={220} />
              </a>
            </div>
          </div>
          <div className="flex-1 min-w-64 w-full max-w-md sm:min-w-96">
            <Image
              src="/man_by_playground.png"
              alt=""
              width={512}
              height={512}
              className="rounded-md shadow-md h-full w-full"
            />
          </div>
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
        <div>
          <ScreenCarousel />
        </div>
      </section>
      <section className="bg-transparent">
        <div>
          <blockquote className="text-xl font-light">
            <p className="text-3xl font-normal inline">“</p> Med SafePlay+ kan jag skapa proffsiga protokoll direkt på
            plats, spara tid och undvika onödigt dubbelarbete. Nu hinner jag med många fler besiktningar och kan
            fokusera mer på själva inspektionen och säkerheten för barnen. Det är en värdefullt verktyg för mig och mitt
            arbete som besiktningsman! <p className="text-3xl font-normal inline">”</p>
            <br />
          </blockquote>
          <p className="text-center text-xl font-light mt-4">
            - Robert Rubensson,{" "}
            <Link href={"https://miljötrygg.se"} target="_blank" className="underline text-blue-900">
              Miljötrygg AB
            </Link>
          </p>
        </div>
      </section>

      <section className="border" id="kontakt">
        <div>
          <h2 className="text-3xl font-semibold pb-4">Kontakt</h2>
          <p>
            Om du har frågor eller vill boka ett möte och diskutera hur SafePlay+ kan effektivisera och digitalisera din
            verksamhet är du varmt välkommen att kontakta oss på{" "}
            <a href="mailto:oskar@safeplay.se" className="text-orange-500">
              oskar@safeplay.se
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

const ScreenCarousel = () => {
  let images = [
    [
      "/screen1.png",
      "Allt i Appen",
      "Från att skapa en ny besiktning till att skicka protokollet till kund, allt sker i appen med några enkla knapptryck!",
    ],
    [
      "/screen2.png",
      "Enkel Design",
      "Enkel och intuitiv design gör det enkelt att skapa och redigera protokoll så att du kan fokusera på besiktningen!",
    ],
    [
      "/screen3.png",
      "Smidig",
      "Du lägger med enkelhet in alla objekt och defekter tillsammans med respektive bilder och kommentarer i appen som sedan är redo att skickas till kund!",
    ],
    [
      "/screen4.png",
      "Proffsiga Protokoll",
      "Skriv ut dina protokoll som en proffsig och stilren PDF med ditt företags färger och logga på!",
    ],
    [
      "/screen5.png",
      "Svenska Standarder",
      "Appen är anpassad för att följa svenska standarder och lagar för lekplatsbesiktningar!",
    ],
    [
      "/screen6.png",
      "Effektivt",
      "Med SafePlay+ behöver du inte föra över bilder till din datorn, hantera word-mallar, renskriva eller liknande. Alla repetetiva moment är automatiserade för effektiva och snabba besiktningar!",
    ],
    [
      "/screen7.png",
      "Organiserat",
      "Slipp leta bland papper och dokument, alla protokoll du någonsin skapat finns sparade i molnet och är enkla att hitta och organisera från vilken mobil som helst!",
    ],
  ];
  const activeStyle = "";
  const inactiveStyle = "opacity-50 transform scale-90";
  const [activeIndex, setActiveIndex] = useState(0);

  const transRef = useSpringRef();
  const transitions = useTransition(activeIndex, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { position: "absolute", opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  useEffect(() => {
    transRef.start();
  }, [activeIndex]);

  return (
    <div className="h-full">
      {transitions((style, i) => {
        return (
          <animated.div style={style} className="w-full max-w-screen-lg flex flex-col justify-end">
            <h1 className="text-orange-600 text-3xl font-semibold mb-4 text-center">{images[i][1]}</h1>
            <p className="text-base font-extralight mb-4 text-center">{images[i][2]}</p>
          </animated.div>
        );
      })}
      <Swiper
        style={{ "--swiper-navigation-color": "#EA580C", "--swiper-pagination-color": "#EA580C" } as any}
        onSlideChange={({ realIndex }) => setActiveIndex(realIndex)}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: true }}
        slideToClickedSlide
        spaceBetween={-20}
        slidesPerView={1.8}
        slidesPerGroup={1}
        centeredSlides
        breakpoints={{
          768: {
            slidesPerView: 2.5,
            spaceBetween: 0,
          },
        }}
        grabCursor
        loop
        modules={[Navigation, Pagination, Autoplay]}
        className="h-full"
      >
        {images.map(([src, title], i) => (
          <SwiperSlide key={src + i}>
            {({ isActive, isNext, isPrev }) => (
              <div className={`pb-8 transition-all duration-200 ${isActive ? activeStyle : inactiveStyle}`}>
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
