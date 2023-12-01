import { Link } from "react-router-dom";
import { useState } from "react";
import { useSurahs } from "../../services/quran";
import useDebounce from "../../hooks/useDebounce";
import fuzzySearch from "../../lib/fuzzySearch";
import Input from "../../components/Input/Input";
import { useTheme } from "../../utils/themeMode";
import Alquran from "../../assets/lottie/Quran/Alquran";
import { useRef } from "react";
import { useEffect } from "react";

const AyahCard = ({ number, name, translation, revelation, numberOfAyahs }) => {
  const { darkMode } = useTheme();

  return (
    <Link
      to={`/quran/${number}`}
      className={`rounded-lg p-5 flex items-center justify-between transition-all duration-300 transform hover:scale-105 ${
        darkMode
          ? "bg-gray-800 text-gray-300 border-gray-700"
          : "bg-white text-gray-800 border-gray-200"
      }`}
      style={{
        boxShadow: darkMode
          ? "2px 2px 6px rgba(0, 0, 0, 0.4), -2px -2px 6px rgba(255, 255, 255, 0.1)"
          : "2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(255, 255, 255, 0.3)",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
    >
      <div className="flex items-center gap-4">
        <span
          className={`text-3xl font-semibold rounded-full w-12 h-12 flex items-center justify-center ${
            darkMode
              ? "bg-yellow-500 text-gray-800"
              : "bg-gray-300 text-gray-600"
          }`}
        >
          {number}
        </span>
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <span className="text-xs">{translation}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xs font-semibold block mb-1">{revelation}</span>
        <span className="text-xs">{numberOfAyahs} ayat</span>
      </div>
    </Link>
  );
};

const Quran = () => {
  const surahsQuery = useSurahs();
  const [searchKeyword, setSearchKeyword] = useState("");
  const debouncedSearchKeyword = useDebounce(searchKeyword);
  const { darkMode } = useTheme();

  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
    }
  }, [animationContainer]);

  const filteredSurahs = surahsQuery.data
    ? [
        ...surahsQuery.data.filter((surah) =>
          fuzzySearch(
            debouncedSearchKeyword.toLowerCase(),
            surah.name.toLowerCase()
          )
        ),
      ]
    : [];

  return (
    <div>
      {surahsQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center lg:gap-16">
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:p-8">
              <div className="lg:p-0 px-7 lg:pt-0 pt-10">
                <h1 className="text-center lg:text-left text-4xl lg:text-5xl font-bold text-yellow-500">
                  Al-Quran
                </h1>
                <div className="text-center lg:text-left text-base lg:text-lg text-gray-700 mt-4 lg:mt-6">
                  <blockquote
                    className={`italic text-center lg:text-left ${
                      darkMode
                        ? "text-gray-300"
                        : "text-gray-800"
                    }`}
                  >
                    “Sebaik-baiknya manusia adalah yang membaca dan mempelajari
                    Al-Qur'an serta mengajarkannya pada orang lain.” HR. Bukhari
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex items-center justify-center mt-8">
              <div className="h-80 lg:h-full w-full lg:w-auto">
                <Alquran
                  container={animationContainer}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="max-w-screen-lg lg:mx-auto w-full lg:px-8 mt-8 px-6">
            <Input
              value={searchKeyword}
              type="search"
              name="search"
              placeholder="Search..."
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
          <div className="max-w-screen-lg mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center px-4 py-5 pb-32">
            {filteredSurahs.length ? (
              filteredSurahs.map((surah) => (
                <AyahCard key={surah.number} {...surah} />
              ))
            ) : (
              <p className="text-4xl font-bold text-center w-full">Not found</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quran;
