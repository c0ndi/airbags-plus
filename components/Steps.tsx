const steps = [
  {
    title: 'KONTAKT Z NAMI',
    description: 'Najprościej umówić się z nami przez apikację Whatsapp, lub bezośrednio przez telefon. WhathsAppa oraz telefon znajdziemy na dole strony.',
  },
  {
    title: 'UMÓWIENIE WIZYTY',
    description: 'Umów się z nami na wizytę w dogodnym dla Ciebie terminie, napewno wybierzemy godzinę, która Ci odpowiada.',
  },
  {
    title: 'DOKONANIE PŁATNOŚCI',
    description: 'Po wszystkim wystarczy uregulować formalności. Płatność za usługę możesz dokonać gotówką, lub przelewem.',
  },
]

export default function Steps() {
  return (
    <div className={"py-12 w-full"}>
      <p className={"text-[24px] sm:text-[40px] font-bold text-white"}>Szybka i sprawna obsługa</p>

      <div className={"grid grid-cols-1 md:grid-cols-3 gap-10 pt-6"}>
        {steps.map((step, index) => (
          <div key={index} className={"p-6 border border-gray-400 rounded-md"}>
            <div className={"flex gap-3"}>
              <p className={"text-[20px] sm:text-[24px] font-[Lato] text-white font-bold"}>0<span className={"text-primary"}>{index + 1}</span>
              </p>
              <p className={"text-[20px] sm:text-[24px] font-semibold text-white"}>{step.title}</p>
            </div>
            <p className={"desc pt-3"}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}