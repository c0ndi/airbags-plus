import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/images/hero-bg.png";

const phone = "48512496766"

export default function Hero() {
  return (
    <section
      className={"relative h-screen sm:h-[80vh] text-white flex items-center select-none"}>
      <Image
        src={HeroImage}
        fill
        alt={"Hero"}
        className={"-z-10 object-cover"}
        priority={true}
      />

      <div className={"max-w-[1280px] w-full mx-auto select-auto px-2"}>
        <div className={"text-[32px] sm:text-[48px] font-extrabold"}>
          <p>
            SPRZEDAŻ,
            <span className={"text-primary"}> SKUP</span>
          </p>
          NAPRAWA
          <span className={"text-primary"}> AIRBAGOW</span>
        </div>

        <p className={"desc pb-3 sm:w-[500px]"}>
          Nasza oferta usług skierowana jest do klientów indywidualnych oraz warsztatów samochodowych z całej Europy,
          ogległość nie jest dla nas ograniczeniem`
        </p>

        <div className={"flex sm:items-center gap-6 flex-col sm:flex-row"}>
          <Link href={"/#usługi"}>
            <button
              className={"h-[27px] text-[13px] sm:text-base sm:h-[46px] px-8 text-white rounded-sm sm:rounded-md bg-primary font-medium"}>Poznaj
              Ofertę
            </button>
          </Link>

          <p className={""}>lub</p>
          <Link
            href={`https://wa.me/${phone}`}
            target={"_blank"}
            className={"text-[13px] sm:text-base font-bold sm:pb-2 border-b border-white font-[Lato] w-max"}
          >
            Zadzwoń {`+${phone.slice(0, 2)} ${phone.slice(2, 5)} ${phone.slice(5, 8)} ${phone.slice(8, 11)}`}
          </Link>
        </div>
      </div>
    </section>
  )
}