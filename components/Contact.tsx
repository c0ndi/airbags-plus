import Image from 'next/image'
import Link from "next/link";
import WhatsAppIcon from '@/public/images/whatsApp.png'
import RedArrow from '@/public/images/red-arrow.png'

const phone = "48123123123"

export default function Contact() {
  return (
    <div className={"pt-12"}>
      <p className={"text-[24px] sm:text-[40px] font-bold text-white"}>Kontakt: </p>

      <div className={"flex items-center gap-3 relative w-max flex-wrap"}>
        <div className={"font-light text-white text-[15px] sm:text-[22px]"}>
          Telefon oraz WhatsApp: &nbsp;
          <Link
            target={"_blank"}
            href={`https://wa.me/${phone}`} className={"font-[Lato] font-semibold"}
          >
            {`+${phone.slice(0, 2)} ${phone.slice(2, 5)} ${phone.slice(5, 8)} ${phone.slice(8, 11)}`}
          </Link>
        </div>
        <Link
          target={"_blank"}
          href={`https://wa.me/${phone}`} className={"font-[Lato] font-semibold"}
        >
          <Image
            src={WhatsAppIcon}
            alt={"WhatsApp"}
            height={50}
            width={50}
          />
          <Image
            src={RedArrow}
            alt={"Red Arrow"}
            height={50}
            width={50}
            className={"absolute -top-8 right-8 rotate-[45deg] -scale-x-100"}
          />
          <p
            className={"text-primary text-[15px] font-medium italic absolute -top-24 right-12 w-max"}
          >
            Kliknij aby odpalić <br/>
            aplikację WhatsApp
          </p>
        </Link>
      </div>
    </div>
  )
}