import Image from "next/image";
import ServiceOneImage from "@/public/images/services-1.png";
import ServiceTwoImage from "@/public/images/services-2.png";
import ServiceThreeImage from "@/public/images/services-3.png";
import Link from "next/link";

const services = [
  {
    title: 'Regeneracja poduszek powietrznych',
    desc: <p className={"desc"}>Oprócz tego, że zależy nam na eleganckim i nie nagannym wyglądzie wnętrza samochodu to
      naszym priorytetem
      jest również bezpieczeństwo użytkowników pojazdów.<br/> <br/>Zaczynając od diagnostyki oraz demontażu, a kończąć
      na uaktywnieniu systemu poduszek powietrznych. Zajmujemy się naprawą poduszek powietrznych do każdego modelu
      samochodu. Etap regeneracji przeprowadzamy z wielką starannością przywracając bezpieczeństwo założone przez
      producentów pojazdów. <br/><br/>Jesteśmy wstanie naprawić każdą deskę rozdzielczą, z każdego surowca z jakiego
      jest wykonana, tworzywo, guma czy skóra.</p>
  },
  {
    title: "Regeneracja desek rozdzielczych",
    desc: <p className={"desc"}>Profesjonalna regeneracja konsoli. Naprawiamy deski rozdzielcze po wybuchu poduszki do
      wszystkich aut
      osobowych, bez względu na rok produkcji i pochodzenie. Oklejamy nową skają o takiej samej lub maksymalnie
      zbliżonej strukturze jak w pierwotnej wersji. <br/><br/>Do zatuszowania ubytków nie stosujemy farb oraz lakierów.
      Deski rozdzielcze są oklejane zupełnie nowym materiałem. Nie używamy szpachli oraz innych podobnych surowców które
      mogą zagrażać życiu lub zdrowiu.Używamy najlepszych klei na rynku specjalnie importowanych z zagranicy dlatego nie
      ma obaw że deska odklei się przy wysokich temperaturach. <br/><br/>Zaufało nam już wielu zadowolonych klientów,
      którzy do nas wracają oraz polecają nas swoim znajomym co bardzo nas cieszy.</p>,
  },
  {
    title: "Regeneracja pasów bezpieczeństwa",
    desc: <p className={"desc"}>Oferujemy usługę naprawczą wystrzelonych pasów bezpieczeństwa, napinaczy, oraz dopinaczy
      pasów. Wszystkie
      naprawy wykonane są na oryginalnych elementach, które zapewniają bezpieczeństwo przy ewentualnych kolizjach. <br/><br/>Mamy
      wieloletnie doświadczenie w regeneracji pasów bezpieczeństwa, dlatego też powierzając naprawę tego elementu naszej
      firmie, możesz mieć pewność, że zostanie wykonana tak, jak należy.</p>
  }
]

const phone = "48123123123"

export default function Services() {
  return (
    // @ts-ignore
    <div className={"py-12 w-full flex flex-col gap-20"} id="usługi">
      <p className={"text-[24px] sm:text-[40px] font-bold text-white"}>Sprawdź nasze usługi: </p>

      <div className={"flex items-center gap-8 flex-col sm:flex-row"}>
        <div className={"w-full sm:w-1/2 relative h-[400px]"}>
          <Image
            src={ServiceOneImage}
            fill
            alt={"Regeneracja poduszek potwietrznych"}
            className={"object-cover rounded-lg"}
          />
        </div>
        <div className={"w-full sm:w-1/2"}>
          <p className={"text-white font-semibold text-[24px] sm:text-[32px] pb-3"}>{services[0].title}</p>
          {services[0].desc}

          <Link
            target={"_blank"}
            href={`https://wa.me/${phone}`}
          >
          <div className={"border-b border-primary text-primary text-[15px] xl:text-[20px] font-semibold flex justify-between mt-8"}>
            <p>SKUP PODUSZEK</p>
            <p>SKUP PODUSZEK</p>
            <p className={"hidden sm:inline-block"}>SKUP PODUSZEK</p>
          </div>
          </Link>
        </div>
      </div>

      <div className={"flex items-center gap-8 flex-col sm:flex-row"}>
        <div className={"w-full sm:w-1/2 relative h-[400px] sm:order-2"}>
          <Image
            src={ServiceTwoImage}
            alt={"Regeneracja poduszek potwietrznych"}
            fill
            className={"object-cover rounded-lg"}
          />
        </div>
        <div className={"w-full sm:w-1/2"}>
          <p className={"text-white font-semibold text-[24px] sm:text-[32px] pb-3"}>{services[1].title}</p>
          {services[1].desc}
        </div>
      </div>

      <div className={"flex items-center gap-8 flex-col sm:flex-row"}>
        <div className={"w-full sm:w-1/2 relative h-[300px]"}>
          <Image
            src={ServiceThreeImage}
            fill
            alt={"Regeneracja poduszek potwietrznych"}
            className={"object-cover rounded-lg"}
          />
        </div>
        <div className={"w-full sm:w-1/2"}>
          <p className={"text-white font-semibold text-[24px] sm:text-[32px] pb-3"}>{services[2].title}</p>
          {services[2].desc}
        </div>
      </div>
    </div>
  )
}