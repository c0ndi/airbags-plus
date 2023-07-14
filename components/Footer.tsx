import {Logo} from "@/components/Navbar";
import Link from "next/link";

const phone = "48123123123"

export default function Footer() {
  return (
    <footer className={"sm:py-3 pb-12 mt-20 border-t sm:border-t-2 border-white"}>
      <Logo/>

      <p className={"text-white"}>
        Numer telefonu:
        <Link href={`tel:${phone}`}>
        <span className={"font-[Lato] font-medium"}>
          &nbsp;
          {`+${phone.slice(0, 2)} ${phone.slice(2, 5)} ${phone.slice(5, 8)} ${phone.slice(8, 11)}`}
        </span>
        </Link>
      </p>
    </footer>
  )
}