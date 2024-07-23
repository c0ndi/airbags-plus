export default function Loading() {
  return (
    <div className={"h-screen bg-black flex justify-center items-center"}>
      <div className={"text-white"}>
        <p className={"text-[32px] sm:text-[40px] font-light"}>
          AIRBAGS<span className={"text-primary font-semibold"}>PLUS</span>
        </p>
        <div className={"animation h-[2px] bg-primary"} />
      </div>
    </div>
  )
}