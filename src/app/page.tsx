"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen mx-auto flex-col">
      <header className="w-full h-24 flex items-center flex-row px-8 shadow bg-white sticky top-0 z-50">
        <Image src="/splash.png" alt="SafePlay+" width={200} height={24} />
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
      <section className="flex flex-row justify-center items-center flex-wrap gap-4">
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
        <div className="flex justify-center">
          <div className="flex-1 max-w-sm z-10 py-4">
            <Image
              src="/screen1.png"
              alt=""
              width={1284}
              height={2778}
              className="border-4 border-gray-700 overflow-hidden rounded-3xl shadow-inner"
            />
          </div>
          <div className="flex-1 max-w-sm -mx-12 z-20 overflow-hidden">
            <Image
              src="/screen2.png"
              alt=""
              width={1284}
              height={2778}
              className="border-4 border-gray-700 overflow-hidden rounded-3xl shadow-inner"
            />
          </div>
          <div className="flex-1 max-w-sm z-10 py-4">
            <Image
              src="/screen3.png"
              alt=""
              width={1284}
              height={2778}
              className="border-4 border-gray-700 overflow-hidden rounded-3xl shadow-inner"
            />
          </div>
        </div>
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
