import WhatsAppWhiteIcon from "../public/images/whatsapp-white.png";
import FacebookWhiteIcon from "../public/images/facebook-white.png";
import Image from "next/image";
import Link from "next/link";

const phone = "48512496766"

export function Logo() {
  return (
    <div className={"flex flex-col text-white select-none mt-6"}>
      <p className={"text-[18px] sm:text-[24px] font-semibold"}>AIRBAGS</p>
      <p className={"text-[30px] sm:text-[42px] font-light -translate-y-1/3"}>PLUS</p>
    </div>
  )
}

export default function Navbar() {
  return (
    <nav className={"absolute w-full"}>
      <div className={"max-w-[1280px] w-full px-2 sm:px-0 mx-auto flex items-center justify-between"}>
        <Logo/>

        <div className={"flex items-center gap-6 ml-auto"}>
          <Link
            target={"_blank"}
            href={`https://wa.me/${phone}`}
          >
            <Image
              src={WhatsAppWhiteIcon}
              alt={"WhatsApp"}
              height={31}
              width={31}
            />
          </Link>
          <Link
            target={"_blank"}
            href={"https://www.facebook.com/"}
          >
            <Image
              src={FacebookWhiteIcon}
              alt={"WhatsApp"}
              height={28}
              width={28}
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}