import React from "react";
import { data } from "../../utils/99";

function AsmaulHusna({ lang }) {
  return (
    <div className="my-10">
      <h1 className="lg:text-5xl text-3xl font-bold text-center">
        Asmaul Husna
      </h1>
      <div className="w-full flex justify-center lg:px-28 mb-20">
        <div className="w-[90%] my-4 md:my-8 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {data.map((item, i) => (
            <div
              className="relative overflow-hidden rounded-lg shadow-lg text-center cursor-pointer transform transition duration-300 hover:scale-105"
              key={i}
            >
              <div className="absolute top-2 left-2 z-10 flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-full">
                {i + 1 + "."}
              </div>
              <h1 className="text-3xl md:text-4xl pt-10 pb-6 ">
                {item.arabic}
              </h1>
              <h1 className="text-lg md:text-xl font-semibold ">
                {item.latin}
              </h1>
              <h1 className="text-base md:text-lg pt-2 pb-6 px-4">
                {lang ? item.eng : item.id}
              </h1>
              <div className="absolute inset-0 z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AsmaulHusna;
