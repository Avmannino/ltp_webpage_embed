// src/app/App.tsx

// ✅ Branding
import logo from "../assets/wingslogo.png";

// ✅ Hero carousel (replace VideoHero)
import { HeroCarousel } from "@/app/components/HeroCarousel";

import { InfoBox } from "@/app/components/InfoBox";
import { PriceCard } from "@/app/components/PriceCard";
import { ScheduleTable } from "@/app/components/ScheduleTable";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

import allAgesIcon from "../assets/icons/icons8-birth-date-100.png";
import calendarIcon from "../assets/icons/icons8-calendar-50.png";
import coachingIcon from "../assets/icons/icons8-coaching-100.png";
import skatesIcon from "../assets/icons/icons8-hockey-skates-50.png";
import qrCode from "../assets/Registration_QR.avif";

// ✅ HERO IMAGES (add these files to your repo)
import hero1 from "../assets/hero/hero-1.jpg";
import hero2 from "../assets/hero/hero-2.jpg";
import hero3 from "../assets/hero/hero-3.jpg";
import hero4 from "../assets/hero/hero-4.jpg";

export default function App() {
  // ✅ Reusable shadow token
  const SHADOW = "shadow-[0_8px_20px_rgba(0,0,0,0.45)]";

  // ✅ Colors (kept from your design)
  const PAGE_BG = "bg-[#013763]";
  const CARD_OVERLAY = "bg-[#365750]/85";

  // ✅ LINKS (from the site)
  const SPRING_LTP_REG_URL =
    "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=3995937";

  // ✅ Spring 2026 schedule (from your Learn to Play screenshot)
  const SPRING_SCHEDULE = [
    {
      label: "Mondays",
      price: "$550",
      time: "3:40 PM – 4:40 PM",
      dates: [
        "Mar 16, 2026",
        "Mar 23, 2026",
        "Mar 30, 2026",
        "Apr 6, 2026",
        "Apr 13, 2026",
        "Apr 20, 2026",
        "Apr 27, 2026",
        "May 4, 2026",
        "May 11, 2026",
        "May 18, 2026",
        "Jun 1, 2026",
        "Jun 8, 2026",
      ],
    },
    {
      label: "Saturdays",
      price: "$550",
      time: "12:20 PM – 1:20 PM",
      dates: [
        "Mar 14, 2026",
        "Mar 21, 2026",
        "Mar 28, 2026",
        "Apr 11, 2026",
        "Apr 18, 2026",
        "Apr 25, 2026",
        "May 2, 2026",
        "May 9, 2026",
        "May 16, 2026",
        "May 30, 2026",
        "Jun 6, 2026",
        "Jun 13, 2026",
      ],
    },
  ];

  const HERO_IMAGES = [
    { src: hero1, alt: "Learn to Play hockey — photo 1" },
    { src: hero2, alt: "Learn to Play hockey — photo 2" },
    { src: hero3, alt: "Learn to Play hockey — photo 3" },
    { src: hero4, alt: "Learn to Play hockey — photo 4" },
  ];

  return (
    <div className={`min-h-screen ${PAGE_BG} flex flex-col sm:block`}>
      {/* Header */}
      <header className={`${PAGE_BG} border-b border-[#b2dbd7]/70`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-4" />
      </header>

      {/* Hero */}
      <section className={`${PAGE_BG} border-b border-[#b2dbd7]/70`}>
        {/* ✅ slightly tighter padding on mobile, keep your desktop spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-5 xl:px-0 pt-10 pb-12 sm:py-12">
          <div className="grid gap-y-8 items-center lg:grid-cols-[1fr_110px_1.2fr] xl:grid-cols-[1fr_140px_1.25fr]">
            {/* LEFT: text */}
            <div className="min-[1001px]:max-[1325px]:pr-5">
              <div className="flex flex-col items-center lg:items-center mb-5">
                <img
                  src={logo}
                  alt="Wings Arena"
                  className="
                    mx-auto
                    w-[235px] sm:w-[300px] lg:w-[355.04px]
                    mb-0
                    mr-0 lg:mr-8
                    ml-0 lg:ml-[10px]
                    min-[1001px]:max-[1325px]:ml-[28px]
                  "
                />

                <p
                  className="
                    text-[#fff] font-bold tracking-wide mt-2
                    text-center
                    mr-0 lg:mr-4
                    min-[1001px]:max-[1325px]:pl-[28px]
                  "
                >
                  March 14th - June 13th
                </p>

                <div className="mt-[15px] -mb-[10px] h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />
              </div>

              <div
                className="
                  text-gray-200 mb-4
                  space-y-5
                  text-center lg:text-center
                  ml-0 sm:ml-1
                  min-[1001px]:max-[1325px]:ml-[28px]
                  text-[15px] sm:text-[16px] lg:text-[18px]
                  leading-relaxed
                  w-full max-w-none
                "
              >
                <p className="font-semibold text-gray-200">
                  A beginner-friendly hockey program focused on building confidence
                  through fun, guided instruction.
                </p>

                <p>
                  Players learn foundational skills through stations and games — no
                  prior experience required.
                </p>

                <p className="text-gray-300 font-semibold">
                  Full gear is required. Skate & helmet rentals available.
                </p>

                <div className="pt-2 flex justify-center">
                  <a
                    href={SPRING_LTP_REG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center justify-center
                      rounded-lg
                      px-4 py-3
                      font-bold text-white
                      bg-[#365750]/55 hover:bg-white/20
                      border border-white/30
                      transition
                      ${SHADOW}
                      w-full max-w-[320px] sm:w-auto
                    `}
                  >
                    Register for Spring Learn to Play
                  </a>
                </div>
              </div>
            </div>

            {/* Spacer column (creates guaranteed gap on lg+) */}
            <div className="hidden lg:block" />

            {/* RIGHT: Hero Carousel */}
            <div
              className={`
                relative h-64 sm:h-80 lg:h-[360px]
                w-full
                lg:justify-self-end
                ${SHADOW}
                rounded-lg overflow-hidden
              `}
            >
              <HeroCarousel images={HERO_IMAGES} intervalMs={4500} />
            </div>
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <section
        className="
          max-w-[calc(80rem*0.97+200px)]
          mx-auto
          px-0
          sm:px-6
          xl:px-8
          py-8
          max-[1000px]:pt-0
          max-[1000px]:mt-[18px]
          lg:mt-[25px]
        "
      >
        <div className="max-[640px]:w-[100vw] max-[640px]:ml-[calc(50%-50vw)] max-[640px]:px-3 max-[640px]:box-border">
          <div className="flex justify-center mb-[calc(1rem*1.0356)]">
            <div className={`w-full max-w-[760px] [&>*]:!w-full [&>*]:${SHADOW}`}>
              <InfoBox
                iconImage={allAgesIcon}
                title="Ages 3-8"
                description={
                  <>
                    Beginner-friendly program — great for kids getting started with{" "}
                    <strong>hockey fundamentals</strong>.
                  </>
                }
                iconSize="w-[35.35px] h-[35.35px]"
                iconOffset="-mt-[10px]"
                textOffset="-mt-[1.5px]"
                titleClassName="text-[15px] sm:text-[16px]"
                descriptionClassName="text-[11px] sm:text-[13px] leading-snug"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[calc(1rem*1.0356)] justify-items-stretch">
              <div className={`w-full [&>*]:!w-full [&>*]:${SHADOW}`}>
                <InfoBox
                  iconImage={calendarIcon}
                  title="Class Options"
                  description="Mondays or Saturdays"
                  iconSize="w-[40px] h-[40px]"
                  iconOffset="-mt-[6px]"
                  textOffset="-mt-[3.5px]"
                  titleClassName="text-[16px] sm:text-[16px]"
                  descriptionClassName="text-[11px] sm:text-[13px] leading-tight"
                />
              </div>

              <div className={`w-full [&>*]:!w-full [&>*]:${SHADOW}`}>
                <InfoBox
                  iconImage={coachingIcon}
                  title="Coaching"
                  description="Positive instruction with fun games and skill stations"
                  iconSize="w-[39px] h-[39px]"
                  iconOffset="-mt-[6px]"
                  textOffset="-mt-[3.5px]"
                  titleClassName="text-[16px] sm:text-[16px]"
                  descriptionClassName="text-[11px] sm:text-[13px] leading-tight"
                />
              </div>

              <div className={`w-full [&>*]:!w-full [&>*]:${SHADOW}`}>
                <InfoBox
                  iconImage={skatesIcon}
                  title="Required Gear"
                  description="Full gear required (ask about rentals)"
                  iconSize="w-[39px] h-[39px]"
                  iconOffset="-mt-[6px]"
                  textOffset="-mt-[3.5px]"
                  titleClassName="text-[16px] sm:text-[16px]"
                  descriptionClassName="text-[11px] sm:text-[13px] leading-tight"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={`${PAGE_BG} py-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <h2 className="text-[1.7rem] sm:text-[2.15625rem] mb-2 text-white text-center">
            Pricing Options
          </h2>

          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />

          <p className="text-center text-gray-200 mb-6 font-semibold">
            Learn To Play Spring 2026
          </p>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-stretch gap-6 sm:gap-x-10 w-full max-w-4xl">
              <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                <PriceCard
                  title="Mondays"
                  price="$550"
                  description="Spring Learn to Play"
                  features={["3:40 PM – 4:40 PM"]}
                />
              </div>

              <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                <PriceCard
                  title="Saturdays"
                  price="$550"
                  description="Spring Learn to Play"
                  features={["12:20 PM – 1:20 PM"]}
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={SPRING_LTP_REG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold text-white bg-[#365750]/55 hover:bg-white/20 border border-white/30 transition ${SHADOW}`}
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className={`${PAGE_BG} pt-2 pb-0`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <h2 className="text-[1.5625rem] sm:text-[2.2625rem] mb-0 sm:mb-5 text-white text-center">
            Spring 2026 Schedule
          </h2>
          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />
        </div>
      </section>

      <div className="w-[92%] sm:w-full max-w-6xl mx-auto my-8 mt-2">
        <div className={`relative overflow-hidden rounded-lg border border-white/20 p-4 sm:p-8 ${SHADOW}`}>
          <div className={`absolute inset-0 ${CARD_OVERLAY} backdrop-blur-[2px]`} />
          <div className="relative z-10">
            <ScheduleTable items={SPRING_SCHEDULE} />
            <div className="mt-6 text-center" />
          </div>
        </div>
      </div>

      {/* Registration / Contact */}
      <section className={`${PAGE_BG} py-8 pb-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <h2 className="text-[1.5625rem] sm:text-[2.2625rem] mb-0 sm:mb-5 text-white text-center">
            Registration
          </h2>
          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />

          <div className="w-[90%] sm:w-full max-w-3xl mx-auto my-8">
            <div className={`relative overflow-hidden rounded-lg border border-white/20 p-6 sm:p-8 text-center ${SHADOW}`}>
              <div className={`absolute inset-0 ${CARD_OVERLAY} backdrop-blur-[2px]`} />
              <div className="relative z-10">
                <h3 className="text-white text-[1.35rem] sm:text-[1.65rem] mb-2 -mt-[10px]">
                  Register Today!
                </h3>

                <p className="text-white leading-relaxed">
                  Use the QR code or click the link below to register for Spring Learn
                  to Play.
                </p>

                <img
                  src={qrCode}
                  alt="Registration QR Code"
                  className="mx-auto mt-5 w-[120px] sm:w-[160px] h-auto rounded-md bg-white p-2"
                />

                <a
                  href={SPRING_LTP_REG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block font-bold underline underline-offset-4 text-blue-600 hover:text-blue-700 transition text-lg md:text-3xl lg:text-3xl xl:text-4xl"
                >
                  Click Here to Register
                </a>

                <div className="my-6 h-px w-full bg-white/25" />

                <h3 className="text-white text-[1.35rem] sm:text-[1.65rem] mb-3">
                  Questions?
                </h3>

                <p className="text-white">
                  Email: <span className="font-semibold">info@wingsarena.com</span>
                </p>

                <div className="mt-4 text-white space-y-1">
                  <p className="font-semibold text-white">Wings Arena</p>
                  <p>5 Barry Place • Stamford, CT 06902</p>
                  <p>(203) 357-1055</p>
                </div>

                <div className="mt-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className={`${PAGE_BG} py-12 sm:py-12 pt-0 sm:pt-12 mt-[35px] sm:mt-0 -translate-y-[15px]`}
      >
        <div className="max-w-[58.08rem] mx-auto px-4 sm:px-6 xl:px-8">
          <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-white text-center">
            Frequently Asked Questions
          </h2>
          <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />

          <div className={`relative overflow-hidden rounded-lg border border-white/20 ${SHADOW}`}>
            <div className={`absolute inset-0 ${CARD_OVERLAY} backdrop-blur-[2px]`} />

            <div className="relative z-10">
              <Accordion type="single" collapsible className="bg-transparent px-4 sm:px-6">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-white">
                    Who is Learn to Play for?
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    Learn to Play is designed for beginners and focuses on building
                    confidence through step-by-step coaching and fun drills.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-white">
                    What equipment is required?
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    Full gear is required. Contact us if you have questions about
                    rentals or what to bring.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-white">
                    When are classes?
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    Spring Learn to Play runs 03/14 – 06/13 with options on Mondays or
                    Saturdays. See the Schedule section above for exact dates and times.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-white">
                    How much does it cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    Spring Learn to Play is <strong>$550</strong> for Mondays or
                    Saturdays.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
