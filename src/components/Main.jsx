import { data } from "autoprefixer";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const textColor = {
  reaction: "text-lightRed",
  memory: "text-orangeyYellow",
  verbal: "text-greenTeal",
  visual: "text-cobaltBlue"
}

const bgColor = {
  reaction: "bg-[#fff0f0]",
  memory: "bg-[#fffbf5]",
  verbal: "bg-[#f5fffd]",
  visual: "bg-[#f6f6fe]"
}

const Main = () => {
  const [link, setLink] = useState([]);

  useEffect(() => {
    const json = "/data.json";

    axios
      .get(json)
      .then(({ data }) => setLink(data))

      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="px-5">
      <h3 className="py-5">Summary</h3>
      <article className=" flex flex-col gap-4">
        {link.map((data) => (
          <div
            key={data.id}
            className={`${bgColor[data.category]} px-4 py-[10px] rounded-lg flex justify-between hover:scale-105 hover:transition-all cursor-pointer shadow-sm`}
          >
            <div className="flex gap-2 ">
              <div>
                <img src={data.icon} alt="" />
              </div>
              <h3 className={`${textColor[data.category]} capitalize text-[14px] font-bold`}>{data.category}</h3>
            </div>
            <p className= "font-bold">{data.score} <span className="text-darkGrayBlue">/ 100</span></p>
          </div>
        ))}
        <button className="bg-[#303b5a] hover:transition-all hover:scale-105 hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue  text-primary capitalize px-4 py-[10px] rounded-3xl mb-2 sm:mb-5">continue</button>
      </article>
    </section>

  );
};
export default Main;
