const Header = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue rounded-b-3xl sm:rounded-3xl px-8 py-6 ">
      <h3 className="text-darkGrayBlue">Your Result</h3>
      <div className="bg-gradient-to-b from-violetBlue to-persianBlue rounded-full w-32 h-32 flex flex-col justify-center items-center m-6">
        <span className="text-primary text-5xl font-bold mb-2">76</span>
        <p className="text-darkGrayBlue text-[12px]">of 100</p>
      </div>
      <h2 className="text-xl text-primary pb-2">Great</h2>
      <p className="text-[14px] text-center text-darkGrayBlue">You scored higher than 65% of the people who have taken these tests.</p>
    </section>
  )
}
export default Header