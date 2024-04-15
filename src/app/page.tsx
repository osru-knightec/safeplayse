"use client";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleRedirect = (route: string) => {
    router.push(route);
  };
  return (
    <main className="flex min-h-screen mx-auto flex-col  from-orange-300 to-orange-500 bg-gradient-radial">
      <header className="w-full h-24 flex items-center flex-row px-8 border-b-2 border-b-slate-200 bg-white">
        <Image src="/splash.png" alt="SafePlay+" width={200} height={24} />
      </header>
      <div className="pb-32 px-12">
        <section className="flex flex-row justify-around items-center flex-wrap gap-32 mt-32">
          <div>
            <h1 className="text-5xl font-semibold">
              Enkel lekplatsbesiktning,
              <br />
              direkt i mobilen
            </h1>
            <div className="flex flex-row items-center gap-16 mt-12">
              <a href="https://apps.apple.com/se/app/safeplay/id6445820584" target="_blank">
                <Image src="/app_store.svg" alt="App Store" width={200} height={60} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=se.oskarrubensson.safeplayplus" target="_blank">
                <Image src="/google_play.png" alt="Google Play" width={200} height={60} />
              </a>
            </div>
          </div>
          <div className="bg-white p-2 rounded-md shadow-orange-500 shadow-md border border-orange-500">
            <Image
              src="/man_by_playground.png"
              alt=""
              width={600}
              height={600}
              className="rounded-md border border-gray-700"
            />
          </div>
        </section>
        <section className="flex flex-row justify-around items-center flex-wrap mt-32">
          <div className="key-box">
            <h2 className="text-3xl font-semibold">Snabbare</h2>
            <hr className="h-[2px] bg-orange-200 my-2" />
            <p>När du lämnar lekplatsen har du ett färdigt och snyggt protokoll som är redo att skickas till kund</p>
          </div>
          <div className="key-box">
            <h2 className="text-3xl font-semibold">Säkrare</h2>
            <hr className="h-[2px] bg-orange-200 my-2" />
            <p>Alla protokoll du någonsin skapat finns säkerhetskopierade och sparade i appen</p>
          </div>
          <div className="key-box">
            <h2 className="text-3xl font-semibold">Proffsigare</h2>
            <hr className="h-[2px] bg-orange-200 my-2" />
            <p>Genom att lägga in ditt företags branding ser dina protokoll snygga, stilrena och proffsiga ut</p>
          </div>
        </section>
        <section className="mx-auto w-1/2 bg-white rounded-md p-4 mt-40">
          <h2 className="text-3xl font-semibold pb-4">Kontakt</h2>
          <p>
            Om du har frågor eller funderingar är du varmt välkommen att kontakta oss på{" "}
            <a href="mailto:oskar@safeplay.se" className="text-orange-500">
              oskar@safeplay.se
            </a>
          </p>
        </section>
      </div>

      {/* <div>
        <Image src="/splash.png" alt="SafePlay+ logo" width={500} height={200} />
      </div>
      <p className="text-5xl font-bold p-0 m-0">Välkommen!</p>
      <div className="text-center">
        <p className="mb-2">SafePlay+ är en app för att digitalisera och effektivisera lekplatsbesiktningar.</p>
        <p>Byt ut papper och penna mot en smidig digital lösning och skapa professionella protokoll på nolltid.</p>
        <p>Vår app SafePlay+ är redan live och används av besiktningsmän i deras dagliga arbete! Ladda ner den här:</p>
        <div className="buttons">
          <button
            className="py-2 px-4 border border-orange-600"
            onClick={() =>
              handleRedirect("https://play.google.com/store/apps/details?id=se.oskarrubensson.safeplayplus")
            }
          >
            Google Play
          </button>
          <button
            className="py-2 px-4 border border-orange-600"
            onClick={() => handleRedirect("https://apps.apple.com/se/app/safeplay/id6445820584")}
          >
            App Store
          </button>
        </div>
      </div> */}
    </main>
  );
}
