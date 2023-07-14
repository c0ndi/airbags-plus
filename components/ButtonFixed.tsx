import Image from "next/image";
import WhatsAppIcon from '@/public/images/whatsapp-white.png'
import Link from "next/link";

const phone = "48123123123"

export default function ButtonFixed() {
  return (
    <Link href={`https://wa.me/${phone}`} target={"_blank"}>
      <div className={"fixed bottom-3 right-3 sm:bottom-3 sm:right-52 py-2 px-4 text-white rounded-md bg-primary font-medium flex items-center gap-2 z-50"}>
        <p className={"text-15px]"}>
          Skup poduszek
        </p>
        <Image src={WhatsAppIcon} alt={"WhatsApp"} height={24} width={24}/>
      </div>
    </Link>
  )
}