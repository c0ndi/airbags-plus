import Link from "next/link";

const phone = "48123123123"
export default function Hero() {
  return (
    <section className={"bg-hero-pattern bg-no-repeat bg-cover h-[80vh] text-white flex items-center select-none"}>
      <div className={"max-w-[1280px] w-full mx-auto select-auto px-2"}>
        <div className={"text-[32px] sm:text-[48px] font-extrabold"}>
          <p>
            SPRZEDAŻ,
            <span className={"text-primary"}> SKUP</span>
          </p>
          NAPRAWA
          <span className={"text-primary"}> AIRBAGOW</span>
        </div>

        <p className={"desc pb-3 sm:w-[500px]"}>Orci, egestas pharetra diam turpis turpis posuere metus. Aliquam
          dignissim fermentum vel
          donec nunc id. </p>

        <div className={"flex sm:items-center gap-6 flex-col sm:flex-row"}>
          <Link href={"/#usługi"}>
            <button className={"h-[46px] px-8 text-white rounded-md bg-primary font-medium"}>Poznaj Ofertę</button>
          </Link>

          <p className={""}>lub</p>
          <Link
            href={`https://wa.me/${phone}`}
            target={"_blank"}
            className={"font-bold pb-2 border-b border-white font-[Lato] w-max"}
          >
            Zadzwoń {`+${phone.slice(0, 2)} ${phone.slice(2, 5)} ${phone.slice(5, 8)} ${phone.slice(8, 11)}`}
          </Link>
        </div>
      </div>
    </section>
  )
}